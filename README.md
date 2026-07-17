# NK Woodworks Website

Static HTML, CSS, and JavaScript website prepared for GitHub Pages.

## Publish on GitHub Pages

1. Create a new repository on GitHub.
2. Upload everything in this folder to the root of the repository.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

The included `CNAME` file connects the site to `nk-woodwork.com`. Keep this file in the repository. Confirm the domain's DNS records point to GitHub Pages before using the custom domain.

## Update the site

- Edit product names, descriptions, availability, and price in `index.html`.
- The Aleppo Pine Desk and Osage Orange Sculpture public Stripe Payment Links are in `index.html` on their **Purchase** buttons.
- Never add Stripe secret keys to GitHub.
- Replace a photo by putting the replacement in `images/` with the same filename.
- The portfolio and shop use the same product image filenames.
- Mark a product sold by using the `sold` card style, adding the **Sold** badge, and removing any purchase link.
- Change the custom domain by editing `CNAME`; do not delete it while using a custom domain.

## Preview locally

Open `index.html` in a web browser. No installation, server, database, or build step is required.
