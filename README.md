# My-Portfolio

Personal portfolio landing page for **Amogh Raghavendra Deshpande** — AI Full Stack Developer.

## Live Preview Locally

Open `index.html` in your browser, or run a simple local server:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub named `My-Portfolio` (or any name).
2. Push this folder:

```bash
git init
git add .
git commit -m "Add portfolio landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/My-Portfolio.git
git push -u origin main
```

3. Go to **Settings → Pages → Source** and select the `main` branch.
4. Your site will be live at `https://YOUR_USERNAME.github.io/My-Portfolio/`

## Deploy to Vercel

1. Push the repo to GitHub (steps above).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** → import your `My-Portfolio` repo.
4. Leave all settings as default (no build command needed — it's a static site).
5. Click **Deploy**. Vercel gives you a live URL instantly.

## Customize

Update these placeholder links in `index.html`:

- GitHub profile URL (search for `https://github.com/`)
- Project GitHub repo links
- Project live demo URLs (search for `href="#"` on Live Demo buttons)

## Structure

```
My-Portfolio/
├── index.html    # Main landing page
├── styles.css    # Custom styles
├── script.js     # Navbar, mobile menu, contact form
└── README.md
```
