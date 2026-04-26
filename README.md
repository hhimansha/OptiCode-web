# OptiCode — Research Project Website

A professional Apple-style React website for the OptiCode final-year research project at SLIIT.

## 🚀 Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Build for Production

```bash
npm run build
```

## 🌐 Deploying to GitHub Pages

### Step 1 — Set the base URL

Open `vite.config.js` and change the `base` to your GitHub repo name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/YOUR-REPO-NAME/',   // ← change this
})
```

For example, if your repo URL is `https://github.com/username/opticode-website`, set:
```js
base: '/opticode-website/',
```

### Step 2 — Push to GitHub

Commit and push all files to a GitHub repo (branch: `main`).

### Step 3 — Enable GitHub Pages

1. Go to **Settings → Pages** in your GitHub repo
2. Under **Source**, select **GitHub Actions**
3. The workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## ✏️ Customising for Another Research Group

All website content is defined in a single `SITE` object at the top of `src/App.jsx`.

Simply replace the values in `SITE` with your own:

```js
const SITE = {
  projectTitle: 'YourProject',
  projectSubtitle: 'Your subtitle here',
  projectTagline: 'Your tagline',
  conferenceTag: 'Conference Name · Paper #XXXX',
  groupNo: 'XX-XXX-XXX',
  institution: 'Your Institution',
  // ... and so on
}
```

**No other files need to be changed.**

---

## 📁 Project Structure

```
opticode-website/
├── index.html              # Entry HTML
├── vite.config.js          # Vite config (set base here for GitHub Pages)
├── package.json
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # All page components + SITE content object
│   └── index.css           # Global styles & CSS variables
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions auto-deploy
```

## 🎨 Tech Stack

- **React 18** + **Vite 5**
- **CSS Variables** (no framework dependencies)
- **Google Fonts**: Syne (display) + DM Sans (body)
- **GitHub Actions** for auto-deployment

---

> BSc (Hons) Information Technology — Final Year Research Project  
> Department of Information Technology, SLIIT
