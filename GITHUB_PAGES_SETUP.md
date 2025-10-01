# 🚀 GitHub Pages Deployment Guide

## ✅ Configuration Complete!

Your project is now configured for GitHub Pages deployment. Here's what I've set up:

- ✅ Installed `gh-pages` package
- ✅ Added deploy scripts to `package.json`
- ✅ Configured base path in `vite.config.ts`

---

## 📋 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. **Go to GitHub:** [github.com/new](https://github.com/new)

2. **Create new repository:**

   - Repository name: `CV_Application` (or any name you prefer)
   - Description: "Interactive CV Application"
   - Choose: **Public** (required for free GitHub Pages)
   - ⚠️ **Do NOT** initialize with README, .gitignore, or license

3. **Click "Create repository"**

---

### Step 2: Initialize Git & Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit - Interactive CV Application"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/CV_Application.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important:** Replace `YOUR_USERNAME` with your actual GitHub username!

---

### Step 3: Deploy to GitHub Pages

Once your code is on GitHub, deploy with one command:

```bash
npm run deploy
```

This will:

1. Automatically build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist` folder to that branch
4. Deploy to GitHub Pages

You'll see output like:

```
Published
✓ built in 1.35s
```

---

### Step 4: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", it should already show:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save** (if not already saved)

---

## 🎉 Your CV is Live!

Your CV will be accessible at:

```
https://YOUR_USERNAME.github.io/CV_Application/
```

_(Replace YOUR_USERNAME with your GitHub username)_

---

## 🔄 Updating Your CV

Whenever you make changes:

1. **Edit your files** (cv.tsx, styles, etc.)
2. **Test locally:**
   ```bash
   npm run dev
   ```
3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Update CV content"
   git push
   ```
4. **Deploy:**
   ```bash
   npm run deploy
   ```

Your live site will update in ~1-2 minutes!

---

## 🌐 Custom Domain (Optional)

Want a custom domain like `yourname.com`?

1. **Buy a domain** (Namecheap, Google Domains, etc.)

2. **Add CNAME file** to your `public` folder:

   ```
   yourname.com
   ```

3. **Update DNS settings** at your domain registrar:

   - Add a CNAME record pointing to: `YOUR_USERNAME.github.io`

4. **In GitHub Settings → Pages:**
   - Add your custom domain
   - Enable "Enforce HTTPS"

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Fix:** Make sure the base path in `vite.config.ts` matches your repository name:

```typescript
base: '/CV_Application/', // Must match your repo name exactly!
```

### Issue: 404 error

**Fix:**

1. Check that GitHub Pages is enabled (Settings → Pages)
2. Verify the branch is set to `gh-pages`
3. Wait 2-3 minutes for deployment to complete

### Issue: Styles not loading

**Fix:** Clear your browser cache or open in incognito mode

### Issue: "Permission denied" when pushing

**Fix:**

1. Set up SSH keys or use a personal access token
2. [GitHub SSH Setup Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## 📊 Monitor Your Deployment

### Check Deployment Status:

1. Go to your repository on GitHub
2. Click **Actions** tab
3. See `pages-build-deployment` workflow

### View Live Site:

- Visit: `https://YOUR_USERNAME.github.io/CV_Application/`
- Or click the link in Settings → Pages

---

## ✨ Pro Tips

1. **Add a README:** Include your live URL in the repository README

   ```markdown
   # CV Application

   Live Demo: https://YOUR_USERNAME.github.io/CV_Application/
   ```

2. **Add GitHub Actions Badge:**

   ```markdown
   ![Deploy](https://github.com/YOUR_USERNAME/CV_Application/workflows/pages-build-deployment/badge.svg)
   ```

3. **Analytics:** Add Google Analytics to track visitors

   - Add tracking code to `index.html`

4. **SEO:** Update `index.html` meta tags:
   ```html
   <meta name="description" content="Mathis Fajeau - Software Engineer CV" />
   <meta name="keywords" content="software engineer, developer, CV, resume" />
   ```

---

## 🎯 Quick Reference Commands

```bash
# Local development
npm run dev                  # Start dev server

# Deployment
npm run deploy              # Build & deploy to GitHub Pages

# Git workflow
git add .                   # Stage changes
git commit -m "message"     # Commit changes
git push                    # Push to GitHub
```

---

## 📞 Need Help?

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [gh-pages Package](https://github.com/tschaub/gh-pages)

---

## ✅ Next Steps After Deployment

- [ ] Share URL with potential employers
- [ ] Add link to your LinkedIn profile
- [ ] Include in your resume
- [ ] Test on mobile devices
- [ ] Share with friends for feedback
- [ ] Set up custom domain (optional)
- [ ] Add to your GitHub profile README

---

**Ready to deploy?** Just run: `npm run deploy` 🚀
