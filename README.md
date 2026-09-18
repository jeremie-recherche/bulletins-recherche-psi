# Bulletins de la recherche psi

Site de veille critique consacré à la parapsychologie, à l'anomalistique et aux sciences de la conscience.

## Publication d'un bulletin

1. Ajouter un fichier Markdown dans `src/content/bulletins/` avec `draft: true`.
2. Créer une branche et une pull request afin de relire le texte et de vérifier automatiquement la construction.
3. Passer `draft` à `false` après validation de fond.
4. Fusionner la pull request. GitHub Actions publie alors le site sur GitHub Pages.
5. Après le déploiement, GitHub Actions annonce automatiquement le nouveau bulletin sur Bluesky. Une correction ultérieure d'un bulletin déjà public ne crée pas une nouvelle annonce.

Le flux peut aussi être exécuté manuellement en mode essai depuis l'onglet Actions, sans publication sur Bluesky.

## Développement local

```sh
npm install
npm run dev
```

La commande `npm run build` contrôle les types et produit le site statique dans `dist/`.

## Licences

Le code source est distribué sous licence MIT. Les textes sont distribués sous licence Creative Commons Attribution 4.0 International.
