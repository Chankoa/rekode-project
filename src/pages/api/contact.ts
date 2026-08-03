import type { APIRoute } from "astro";
import { env } from "node:process";
import { Resend } from "resend";

export const prerender = false;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 10_000;

type ValidationErrors = Partial<Record<"name" | "email" | "message", string>>;

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });

const stringValue = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

const normalizeName = (value: string) => value.trim().replace(/\s+/g, " ");
const normalizeEmail = (value: string) => value.trim().toLowerCase();
const normalizeMessage = (value: string) => value.replace(/\r\n?/g, "\n").trim();

const isValidEmail = (value: string) =>
  value.length <= MAX_EMAIL_LENGTH &&
  !/[\r\n]/.test(value) &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );

export const POST: APIRoute = async ({ request }) => {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return json({ ok: false, message: "Le formulaire envoyé est invalide." }, 400);
  }

  // Honeypot: answer as if the submission succeeded without sending an email.
  if (stringValue(formData, "website").trim()) {
    return json({ ok: true, message: "Votre message a bien été envoyé." }, 200);
  }

  const name = normalizeName(stringValue(formData, "name"));
  const email = normalizeEmail(stringValue(formData, "email"));
  const message = normalizeMessage(stringValue(formData, "message"));
  const errors: ValidationErrors = {};

  if (name.length < 2 || name.length > MAX_NAME_LENGTH) {
    errors.name = "Indiquez un nom compris entre 2 et 120 caractères.";
  }

  if (!isValidEmail(email)) {
    errors.email = "Indiquez une adresse e-mail valide.";
  }

  if (message.length < 10 || message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Votre message doit contenir entre 10 et 10 000 caractères.";
  }

  if (Object.keys(errors).length > 0) {
    return json(
      {
        ok: false,
        message: "Vérifiez les informations saisies puis réessayez.",
        errors,
      },
      400,
    );
  }

  const apiKey = env.RESEND_API_KEY;
  const from = env.CONTACT_EMAIL_FROM;
  const to = env.CONTACT_EMAIL_TO;

  if (!apiKey || !from || !to) {
    return json(
      { ok: false, message: "Le service de contact est temporairement indisponible." },
      500,
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message de ${name} — formulaire REKODE`,
      text: `Nouveau message reçu depuis le formulaire REKODE\n\nNom : ${name}\nE-mail : ${email}\n\nMessage :\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#171717"><h1 style="font-size:20px">Nouveau message — formulaire REKODE</h1><p><strong>Nom :</strong> ${safeName}<br><strong>E-mail :</strong> ${safeEmail}</p><p><strong>Message :</strong></p><p>${safeMessage}</p></div>`,
    });

    if (error) {
      return json(
        { ok: false, message: "Votre message n’a pas pu être envoyé. Réessayez plus tard." },
        502,
      );
    }
  } catch {
    return json(
      { ok: false, message: "Votre message n’a pas pu être envoyé. Réessayez plus tard." },
      502,
    );
  }

  return json({ ok: true, message: "Votre message a bien été envoyé." }, 200);
};

export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ ok: false, message: "Méthode non autorisée." }), {
    status: 405,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      Allow: "POST",
    },
  });
