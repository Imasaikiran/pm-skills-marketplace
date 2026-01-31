# 🚀 Deploy Slashworks to Vercel (slashworks.biz)

## Step 1: Push to GitHub

### If you already have a GitHub repo:
```bash
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"
git push origin main
```

### If you need to create a new GitHub repo:
1. Go to https://github.com/new
2. Repository name: `slashworks`
3. Make it **private** (recommended)
4. Don't initialize with README (you already have code)
5. Click "Create repository"

6. Then run:
```bash
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/slashworks.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login to Vercel
```bash
vercel login
```
- This will open browser to authenticate
- Or use email/GitHub login

### Deploy
```bash
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/website"
vercel
```

**Answer the prompts:**
```
? Set up and deploy? Y
? Which scope? (Select your account)
? Link to existing project? N
? What's your project's name? slashworks
? In which directory is your code located? ./
? Want to override the settings? N
```

Vercel will deploy and give you a URL like: `https://slashworks-xxx.vercel.app`

---

## Step 3: Add Environment Variables

### In Vercel Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your `slashworks` project
3. Go to **Settings** → **Environment Variables**

### Add these variables:

#### Supabase
```
NEXT_PUBLIC_SUPABASE_URL = https://dnjlvwqdzrtnrqryogpk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODc2MzMsImV4cCI6MjA4NDY2MzYzM30.3vuv9lluFn_ndx0jwMPzx8DIA5e6dZhuVCUdmLSRlS0
```

#### Razorpay (Use LIVE keys for production!)
```
RAZORPAY_KEY_ID = rzp_live_xxxxx
RAZORPAY_KEY_SECRET = your_live_secret
RAZORPAY_WEBHOOK_SECRET = your_webhook_secret
```

#### Resend (Email)
```
RESEND_API_KEY = re_xxxxx
```

#### Site URL
```
NEXT_PUBLIC_BASE_URL = https://slashworks.biz
```

**Important:** Make sure to select **Production** environment for all variables!

### Redeploy after adding variables:
```bash
vercel --prod
```

---

## Step 4: Connect Custom Domain (slashworks.biz)

### In Vercel Dashboard:
1. Go to your project → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `slashworks.biz`
4. Also add: `www.slashworks.biz` (optional)

### Configure DNS (at your domain registrar):

Vercel will show you DNS records to add. Typically:

#### Option A: Using A Records (Recommended)
Add these A records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| A | www | 76.76.21.21 |

#### Option B: Using CNAME (Alternative)
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |
| A | @ | 76.76.21.21 |

### Where to add DNS records:
- GoDaddy: DNS Management
- Namecheap: Advanced DNS
- Cloudflare: DNS settings
- Google Domains: DNS

**Wait 5-60 minutes for DNS propagation**

---

## Step 5: Update Razorpay Webhook URL

Once your site is live at `slashworks.biz`:

1. Go to Razorpay Dashboard → Webhooks
2. Update webhook URL to: `https://slashworks.biz/api/razorpay/webhook`
3. Save changes

---

## Step 6: Test Production Site

### Test Checklist:
- [ ] Visit https://slashworks.biz
- [ ] Homepage loads with dark theme
- [ ] Click "Browse all 150+ →" goes to /skills
- [ ] Skills page shows all 146 frameworks
- [ ] Search "RICE" works
- [ ] Filter by "AI PM" shows 31 skills
- [ ] Click "Get for $1 →" goes to payment page
- [ ] Payment page loads
- [ ] Click "Pay $1 with Razorpay"
- [ ] Razorpay checkout opens
- [ ] Make test payment (use real card)
- [ ] Verify email received with download link
- [ ] Download and verify ZIP file

---

## Alternative: Vercel GitHub Integration (Recommended)

### For automatic deployments on every push:

1. **Go to Vercel Dashboard**
2. Click **Add New** → **Project**
3. **Import Git Repository**
4. Select your GitHub repo: `slashworks`
5. **Configure Project:**
   - Framework Preset: Next.js
   - Root Directory: `./website`
   - Build Command: `npm run build`
   - Output Directory: (leave default)
6. **Add Environment Variables** (same as Step 3)
7. Click **Deploy**

**Benefits:**
- Every `git push` triggers automatic deployment
- Preview deployments for branches
- Automatic HTTPS
- Easy rollbacks

---

## Vercel CLI Commands Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]

# Link local project to Vercel
vercel link
```

---

## Production Checklist

### Before Going Live:
- [ ] Push all code to GitHub
- [ ] Add production environment variables to Vercel
- [ ] Use Razorpay LIVE keys (not test)
- [ ] Use Resend production API key
- [ ] Set NEXT_PUBLIC_BASE_URL to https://slashworks.biz
- [ ] Configure custom domain in Vercel
- [ ] Update DNS records at registrar
- [ ] Update Razorpay webhook URL
- [ ] Test payment with real card ($1)
- [ ] Verify email delivery
- [ ] Test download link

### After Launch:
- [ ] Monitor Vercel logs for errors
- [ ] Check Razorpay dashboard for payments
- [ ] Monitor email delivery (Resend logs)
- [ ] Test from mobile device
- [ ] Test in different browsers
- [ ] Share link with test users

---

## Troubleshooting

### Issue: Build fails on Vercel
**Solution:**
```bash
# Test build locally first
cd website
npm run build

# If successful, commit and push
git add .
git commit -m "Fix build"
git push origin main
```

### Issue: Environment variables not working
**Solution:**
1. Check variables are set in Vercel dashboard
2. Make sure they're for "Production" environment
3. Redeploy: `vercel --prod`

### Issue: Domain not connecting
**Solution:**
1. Wait 30-60 minutes for DNS propagation
2. Check DNS records are correct
3. Use https://www.whatsmydns.net to verify propagation

### Issue: Payment not working
**Solution:**
1. Check Razorpay keys are LIVE keys
2. Verify webhook URL is correct
3. Check Vercel logs for errors
4. Test webhook endpoint manually

---

## Quick Deploy Script

Save this as `deploy.sh`:
```bash
#!/bin/bash

echo "🚀 Deploying Slashworks to Production"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
cd website
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Check: https://slashworks.biz"
```

Make executable: `chmod +x deploy.sh`

Run: `./deploy.sh`

---

## Summary

**Fast Track:**
1. Push to GitHub: `git push origin main`
2. Deploy to Vercel: `cd website && vercel --prod`
3. Add environment variables in Vercel dashboard
4. Connect domain: Add `slashworks.biz` in Vercel
5. Update DNS at your registrar
6. Wait for DNS propagation
7. Test at https://slashworks.biz

**Your site will be live in ~30 minutes!** 🎉
