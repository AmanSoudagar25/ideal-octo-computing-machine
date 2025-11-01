# Deployment Guide - Getting Your Site Live

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `roomcraft-ai` (or any name you prefer)
3. Make it **Public** or **Private** (your choice)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd C:\Users\amans\Desktop\RCAI
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.**

## Step 3: Deploy to Vercel

1. Go to https://vercel.com and sign up/login (use GitHub to sign in for easiest setup)

2. Click **"Add New Project"** or **"Import Project"**

3. Select your `roomcraft-ai` repository from the list

4. Configure the project:
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)

5. **Environment Variables** (Optional for now - you can add these later):
   - If you have Firebase set up, add all the `NEXT_PUBLIC_FIREBASE_*` variables from your `.env.local` file

6. Click **"Deploy"**

7. Wait 1-2 minutes for the build to complete

8. **🎉 Your site will be live!** Vercel will give you a URL like `roomcraft-ai.vercel.app`

## Step 4: Custom Domain (Optional)

- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain

---

**Need help?** If you encounter any issues, check:
- GitHub repository is public or you've granted Vercel access
- All files were committed and pushed
- Vercel has access to your GitHub repositories

