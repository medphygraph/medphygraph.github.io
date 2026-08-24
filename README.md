# MedPhyGraph project site

Static project page for **MedPhyGraph** (SenCache-style academic portfolio).

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
# Python
python -m http.server 8080

# Node
npx --yes serve .
```

Then visit `http://localhost:8080`.

## Folder layout

```
medphygraph-site/
  index.html
  css/styles.css
  js/main.js
  assets/
    pipeline.png
    graph_update.mp4
  README.md
```

Add more demo clips under `assets/` and link them in the Demo section of `index.html`.

## Deploy to GitHub Pages (`medphygraph.github.io`)

1. Create / use the org or user Pages repo (e.g. `medphygraph/medphygraph.github.io`).
2. Push the contents of this folder to the `main` (or `gh-pages`) branch root.
3. In repo **Settings → Pages**, set source to that branch.

Example (from this folder):

```bash
git init
git add .
git commit -m "Add MedPhyGraph project page"
git branch -M main
git remote add origin https://github.com/medphygraph/medphygraph.github.io.git
git push -u origin main
```

Do not add Cursor co-author trailers if you want clean GitHub contributors.

## Content sources

- Abstract, tables, and pipeline description from the MedPhyGraph paper draft
- Pipeline figure from `medphygraph-clean/docs/assets/pipeline_architecture.png`
- Graph demo from `medphygraph-clean/runs/graph_animation/graph_update.mp4`
