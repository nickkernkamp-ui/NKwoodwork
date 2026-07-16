# NK Woodworks Website

A static website for NK Woodworks with a home section, image portfolio, and contact section.

## Files

- `index.html` is the website content.
- `styles.css` controls the design.
- `script.js` controls the image preview.
- `assets/images/` contains web-ready images.
- `assets/originals/` contains the original uploaded photos.

## Preview

Open `index.html` in your browser, or run a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Upload To GitHub

Create a new GitHub repository first. Then run these commands inside this folder:

```bash
git init
git add .
git commit -m "Initial NK Woodworks website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nk-woodworks-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Turn On GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Click `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Choose branch `main`.
6. Choose folder `/root`.
7. Click `Save`.

GitHub will give you a live website link after it finishes publishing.
