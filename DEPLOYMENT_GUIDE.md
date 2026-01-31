# 🚀 Vercel Deployment Guide

## Quick Deployment Steps

Your PM Skills Marketplace is ready to deploy! Follow these steps to get it live.

---

## Prerequisites

- [x] Git repository created (✅ Done!)
- [x] Code committed (✅ Done!)
- [ ] GitHub account
- [ ] Vercel account (free)

---

## Step 1: Push to GitHub

### **Option A: Create New Repository on GitHub**

1. **Go to GitHub:**
   - Visit https://github.com/new

2. **Create Repository:**
   - Repository name: `pm-skills-marketplace`
   - Description: `Product Management Skills Marketplace - Claude Code compatible skills`
   - Public or Private: Your choice
   - **Don't** initialize with README (we already have one)
   - Click "Create repository"

3. **Push Your Code:**
   ```bash
   cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"

   # Add remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/pm-skills-marketplace.git

   # Push code
   git branch -M main
   git push -u origin main
   ```

### **Option B: Use GitHub CLI (if installed)**

```bash
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"

# Login to GitHub
gh auth login

# Create repository and push
gh repo create pm-skills-marketplace --public --source=. --remote=origin --push
```

---

## Step 2: Deploy to Vercel

### **A. Using Vercel Dashboard** (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Use GitHub to sign in

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Authorize Vercel to access your GitHub
   - Find `pm-skills-marketplace`
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `website`
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Add Environment Variables:**
   Click "Environment Variables" and add these:

   ```
   NEXT_PUBLIC_SUPABASE_URL
   https://dnjlvwqdzrtnrqryogpk.supabase.co

   NEXT_PUBLIC_SUPABASE_ANON_KEY
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODc2MzMsImV4cCI6MjA4NDY2MzYzM30.3vuv9lluFn_ndx0jwMPzx8DIA5e6dZhuVCUdmLSRlS0

   SUPABASE_SERVICE_ROLE_KEY
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA4NzYzMywiZXhwIjoyMDg0NjYzNjMzfQ.Zt-4OZXXYuj-qWIyWrpJAAJE1DKLrk0AQdDCuR_gLyw

   NEXT_PUBLIC_SITE_URL
   https://your-site-name.vercel.app
   ```

   **Important:** For `NEXT_PUBLIC_SITE_URL`, you'll update this after deployment with your actual Vercel URL.

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site is live!

---

## Step 3: Update Production URL

After deployment, you'll get a URL like: `https://pm-skills-marketplace-xyz.vercel.app`

### **Update Environment Variable:**

1. Go to your Vercel project → Settings → Environment Variables
2. Find `NEXT_PUBLIC_SITE_URL`
3. Update value to your actual URL (e.g., `https://pm-skills-marketplace-xyz.vercel.app`)
4. Click "Save"
5. Go to Deployments tab → Click "..." on latest deployment → "Redeploy"

### **Update Supabase:**

1. **Go to Supabase Dashboard:**
   https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/auth/url-configuration

2. **Add Site URL:**
   - Add your Vercel URL to "Site URL"
   - Add to "Redirect URLs": `https://your-site.vercel.app/auth/callback`

3. **Update OAuth Providers (if using):**
   - GitHub: Add `https://your-site.vercel.app` to authorized URLs
   - Google: Add to authorized redirect URIs

---

## Step 4: Test Production Site

Visit your live site and test:

- [ ] Homepage loads
- [ ] Skills browse page works
- [ ] Skill detail pages work
- [ ] Sign up works
- [ ] Sign in works
- [ ] Database connection works
- [ ] User menu appears when logged in

---

## Vercel CLI Deployment (Alternative)

If you prefer command line:

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd website
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? pm-skills-marketplace
# - Directory? ./ (current directory)
# - Override settings? No

# Production deployment
vercel --prod
```

---

## Environment Variables Reference

### **Public Variables** (visible in browser)
```env
NEXT_PUBLIC_SUPABASE_URL=https://dnjlvwqdzrtnrqryogpk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

### **Secret Variables** (server-only)
```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

---

## Custom Domain (Optional)

### **Add Custom Domain:**

1. Go to Vercel Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `pmskills.io`)
4. Follow DNS configuration instructions
5. Vercel provides:
   - Automatic HTTPS
   - SSL certificates
   - CDN globally

---

## Automatic Deployments

Once connected to GitHub:

- ✅ **Every push to `main`** → Production deployment
- ✅ **Pull requests** → Preview deployments
- ✅ **Branch pushes** → Preview deployments
- ✅ **Automatic builds** → No manual action needed

---

## Monitoring & Analytics

### **Vercel Dashboard:**
- View deployments
- Check build logs
- Monitor errors
- View analytics
- Track performance

### **Supabase Dashboard:**
- Monitor database queries
- Check auth usage
- View API requests
- Track storage

---

## Rollback (if needed)

If something goes wrong:

1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"
4. Previous version is restored instantly

---

## Build Configuration

Your `next.config.js` is already configured for production:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dnjlvwqdzrtnrqryogpk.supabase.co'],
  },
};

module.exports = nextConfig;
```

---

## Performance Optimizations

Vercel automatically provides:

- ✅ **Edge Network** - Global CDN
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Automatic Caching** - Static pages cached
- ✅ **Compression** - Gzip/Brotli
- ✅ **HTTP/2** - Faster loading
- ✅ **Server-Side Rendering** - SEO optimized

---

## Cost

### **Vercel Free Tier Includes:**
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Preview deployments
- Analytics
- Support for hobby projects

**This is more than enough for your marketplace!**

### **Supabase Free Tier Includes:**
- 500MB database
- 1GB file storage
- 2GB bandwidth
- 50,000 monthly active users
- Social OAuth providers

**Also plenty for getting started!**

---

## Troubleshooting

### **Build Fails:**
- Check build logs in Vercel dashboard
- Verify all dependencies in `package.json`
- Ensure environment variables are set

### **Database Connection Issues:**
- Verify Supabase URL is correct
- Check API keys are valid
- Ensure Supabase project is active

### **OAuth Not Working:**
- Update callback URLs in provider settings
- Add production URL to authorized domains
- Check environment variables

### **404 Errors:**
- Clear Vercel cache and redeploy
- Check file paths are correct
- Verify routing configuration

---

## Post-Deployment Checklist

- [ ] Site is live and accessible
- [ ] Homepage loads correctly
- [ ] Skills pages work
- [ ] Database queries succeed
- [ ] Authentication works
- [ ] Sign up creates users
- [ ] Sign in authenticates
- [ ] User menu appears
- [ ] Environment variables set
- [ ] Supabase URLs updated
- [ ] OAuth configured (if using)
- [ ] Custom domain added (optional)

---

## Next Steps After Deployment

1. **Share your site!** Send the URL to potential users
2. **Add more skills** - Expand your library
3. **Monitor usage** - Check Vercel & Supabase analytics
4. **Collect feedback** - Iterate based on user input
5. **Set up monitoring** - Error tracking, uptime monitoring
6. **SEO optimization** - Add meta tags, sitemap
7. **Marketing** - Share on social media, Product Hunt

---

## Quick Commands

```bash
# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel remove

# Link to project
vercel link

# Pull environment variables
vercel env pull
```

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Supabase Production:** https://supabase.com/docs/guides/platform/going-into-prod

---

## 🎉 You're Ready to Deploy!

Follow the steps above and your PM Skills Marketplace will be live in minutes!

**Recommended Path:**
1. Push code to GitHub (Step 1)
2. Import to Vercel (Step 2)
3. Add environment variables
4. Deploy!

Good luck! 🚀
