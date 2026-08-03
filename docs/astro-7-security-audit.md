# Audit sécurité et cadrage Astro 7 / Netlify 8

Date de l'audit : 3 août 2026.

## État initial

- Node.js : `22.17.0` (Netlify est configuré en `22.12.0`).
- npm : `10.9.3` (le projet déclare npm `10.8.2`).
- Astro : `6.3.7`.
- `@astrojs/netlify` : `7.0.13`.
- `astro-expressive-code` : `0.42.0`.
- `resend` : `6.18.1`.
- `sharp` : `0.34.5`.
- Audit initial : 14 vulnérabilités — 13 élevées, 1 faible, aucune modérée ou critique.

Les dépendances directes ou transitives signalées étaient Astro, l'adaptateur Netlify et sa pile de développement/images, `astro-expressive-code`, `sharp`, `vite`, `esbuild`, `postcss`, `svgo`, `js-yaml`, `immutable`, `brace-expansion` et `ipx`.

## Correctifs compatibles appliqués

Un `npm audit fix --dry-run` a d'abord été examiné. La commande `npm audit fix`, sans `--force`, a ensuite mis à jour uniquement le lockfile dans les limites des versions majeures déclarées. Les principaux changements effectifs sont :

- Astro `6.3.7` → `6.4.8` ;
- Vite `7.3.3` → `7.3.6` ;
- PostCSS `8.5.15` → `8.5.25` ;
- SVGO `4.0.1` → `4.0.2` ;
- `js-yaml` `4.1.1` → `4.3.1` ;
- `immutable` `5.1.5` → `5.1.9` ;
- mises à jour compatibles de `brace-expansion` et de dépendances internes Astro.

Résultat final : 9 vulnérabilités — 7 élevées, 1 modérée, 1 faible, aucune critique. Cinq signalements ont donc été supprimés sans changement majeur.

Les neuf nœuds encore signalés sont `astro`, `@astrojs/netlify`, `astro-expressive-code`, `sharp`, `esbuild`, `ipx`, `@netlify/dev`, `@netlify/images` et `@netlify/vite-plugin`. npm ne propose pour eux que des corrections avec rupture de version : Astro `7.1.6`, adaptateur Netlify `8.1.3`, Expressive Code `0.44.1` et Sharp `0.35.3`.

## Interprétation de l'exposition

- Le bundle de la fonction Netlify contient l'exécution serveur Astro et l'endpoint `/api/contact`; le risque Astro ne peut donc pas être classé comme exclusivement local. En revanche, le projet n'emploie ni `ClientRouter`/View Transitions ni directives `transition:*`, ce qui réduit l'exposition aux avis XSS correspondants.
- Le formulaire renvoie du JSON, valide les entrées côté serveur et n'injecte aucune valeur du visiteur dans des noms d'attributs Astro. Les valeurs HTML envoyées par e-mail sont échappées. Les secrets sont lus depuis `node:process.env`, côté serveur uniquement, et aucun contenu de formulaire n'est journalisé.
- La fonction Netlify générée embarque `resend`, mais pas `sharp`, `vite`, `esbuild`, `svgo`, `postcss`, `js-yaml` ni `brace-expansion`. Ces paquets interviennent dans la construction, l'optimisation d'images ou le serveur de développement.
- `sharp` traite ici des images contrôlées présentes dans le dépôt; aucun téléversement d'image par un visiteur n'existe.
- La configuration générée de l'Image CDN a `domains: []` et `remotePatterns: []`. L'avis sur l'échappement des motifs d'images distantes n'ouvre donc actuellement aucune source distante configurée.
- L'avis `esbuild` concerne le serveur de développement Windows. Le serveur n'est pas destiné à être exposé publiquement.

Cette exposition est limitée par l'usage actuel, mais elle n'est pas considérée comme définitivement corrigée : la mise à niveau majeure reste recommandée.

## Étude Astro 7 / adaptateur Netlify 8

La base technique est compatible avec les prérequis : Astro 7 exige Node `22.12.0` ou plus, valeur déjà fixée dans `package.json`, `.nvmrc` et `netlify.toml`. L'adaptateur Netlify 8.1.3 déclare Astro 7 comme pair compatible. Tailwind/Vite accepte Vite 8. Le dépôt n'utilise ni `src/fetch.ts`, ni `@astrojs/db`, ni API de transitions supprimée.

La migration n'est toutefois pas un simple remplacement de deux versions :

- Astro 7 passe à Vite 8 ;
- le nouveau compilateur Rust est plus strict sur le HTML invalide ou non fermé ;
- la gestion des espaces HTML change par défaut et demande une comparaison visuelle des pages ;
- `astro-expressive-code` doit passer de `0.42.0` à `0.44.1` pour annoncer la compatibilité Astro 7 ;
- Sharp doit également changer de série pour supprimer son avis ;
- l'endpoint Resend doit être exercé dans une prévisualisation Netlify disposant des variables serveur réelles.

## Décision

Ne pas effectuer la migration majeure dans ce sprint. Le niveau de risque est maîtrisable mais non trivial : compilateur, bundler, rendu des espaces, coloration de code, traitement d'images et fonction Netlify changeraient ensemble. Une validation locale ne suffirait pas à confirmer l'envoi Resend et le comportement Netlify avec les variables du site.

La migration doit être réalisée dans un sprint technique isolé, sur une branche dédiée, sans la mêler aux corrections éditoriales.

## Protocole recommandé

1. Créer une branche `codex/astro-7-netlify-8` depuis un état éditorial validé et capturer des références desktop/mobile, clair/sombre.
2. Mettre à jour ensemble Astro, `@astrojs/netlify`, `astro-expressive-code` et Sharp vers leurs versions compatibles documentées.
3. Corriger seulement les incompatibilités constatées par le compilateur et le build; vérifier en particulier les espaces typographiques et les composants de contenu.
4. Exécuter `npm ci`, `npm audit`, le lint et le build Netlify de production.
5. Vérifier les pages `/`, `/services`, `/etudes-de-cas/`, `/methode/`, `/a-propos/`, `/journal/` et `/contact/` sur desktop et mobile, dans les deux thèmes.
6. Tester `/api/contact` : méthode refusée, validation `400`, honeypot silencieux `200`, panne sobre et envoi réel depuis une prévisualisation Netlify autorisée. Contrôler `From`, `To` et `Reply-To` sans afficher les secrets.
7. Inspecter la fonction générée, puis lancer une prévisualisation de déploiement Netlify avant fusion.

## Références officielles

- Guide de migration Astro 7 : <https://docs.astro.build/en/guides/upgrade-to/v7/>
- Prérequis d'installation Astro : <https://docs.astro.build/en/install-and-setup/>
- Adaptateur Netlify pour Astro : <https://docs.astro.build/en/guides/integrations-guide/netlify/>
