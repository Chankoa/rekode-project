# REKODE

Site vitrine Astro pour presenter l'activite REKODE: creation de sites web, integration front-end, refonte, accompagnement et experimentation.

Le projet privilegie une structure simple a faire evoluer:

- contenu centralise dans `src/data`
- pages publiques dans `src/pages`
- sections reutilisables dans `src/components/sections`
- layout principal dans `src/layouts`
- styles organises par tokens, base, layout, components, sections et utilities

## Stack

- Astro 5
- TypeScript
- SCSS
- Tailwind CSS

## Demarrage

```bash
npm install
npm run dev
```

Le serveur local est ensuite accessible sur `http://localhost:4321/`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Structure utile

```text
src/
├── components/
│   ├── layout/
│   └── sections/
├── data/
│   ├── site-config.ts
│   └── site-content.ts
├── layouts/
├── pages/
└── styles/
	├── base/
	├── components/
	├── design-system/
	├── layout/
	├── sections/
	├── tokens/
	└── utilities/
```

## Modifier le contenu

- navigation, metadonnees et contact: `src/data/site-config.ts`
- hero, projets, services, approche, a propos et lab: `src/data/site-content.ts`

## Modifier les styles

- tokens globaux: `src/styles/design-system/_foundations.scss`
- couleurs semantiques clair/sombre: `src/styles/design-system/_semantic-tokens.scss`
- point d'entree SCSS: `src/styles/main.scss`
- styles des boutons: `src/styles/components/buttons.scss`

Exemple: pour changer le rayon par defaut des boutons, utiliser `--radius-btn` dans `src/styles/design-system/_foundations.scss` puis le consommer dans `src/styles/components/buttons.scss`.

## Verification

Avant commit, verifier au minimum:

```bash
npm run build
```
