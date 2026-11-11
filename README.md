# Hritik Maurya — MS SQL Developer Portfolio

Professional portfolio built with React 18, Vite, and Tailwind CSS. All content is data-driven from JSON and Markdown files.

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push this branch or merge to `main`.
2. Connect the repo on [Vercel](https://vercel.com).
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. `vercel.json` is already configured for single-page application routing.

---

## 🛠️ How to Maintain & Update Content

All content lives in `/content`. Components purely render data.

### 1. Change Target Career Role
Edit `src/config.js`:
```js
export const primaryRole = 'sql-developer';
// Options: 'sql-developer' | 'plsql-developer' | 'database-developer' | 'dba' | 'bi-analyst' | 'data-engineer'
```
This automatically updates headlines, summaries, skill order, and featured projects from `content/roles.json`.

### 2. Add or Edit Projects
Add an entry to `content/projects.json`:
```json
{
  "id": "my-new-project",
  "title": "Project Name",
  "shortDescription": "One-line description",
  "fullDescription": "Detailed overview...",
  "technologies": ["MS SQL", "Python"],
  "category": "Database",
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "year": 2026,
  "featured": true,
  "archived": false,
  "hidden": false
}
```

### 3. Add a SQL Case Study
Create a `.md` file in `content/case-studies/`:
```markdown
---
title: "Query Optimisation on Inventory Table"
slug: "inventory-query-opt"
summary: "Rebuilt indexing strategy to eliminate bookmark lookups."
date: "2026-03-01"
tags: ["T-SQL", "Performance"]
hidden: false
---

## Problem
...

## Approach
...

## Sample SQL
\`\`\`sql
SELECT ...
\`\`\`

## Result
...

## What I Learned
...
```

### 4. Update Resume PDFs
1. Put the PDF in `public/resumes/` (e.g. `public/resumes/Hritik_Maurya_SQL_Developer.pdf`).
2. Update the `updatedDate` in `content/resumes.json`.
