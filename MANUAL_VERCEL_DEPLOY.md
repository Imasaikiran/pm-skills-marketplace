# 🚀 Manual Vercel Deployment Guide (Using Web Dashboard)

## Why This Method?
The Vercel CLI installation failed, so we'll use the **Vercel Web Dashboard** which is actually easier and doesn't require any CLI installation!

---

## ✅ Step 1: Prepare Your GitHub Repo (DONE!)

Your code is already on GitHub:
- Repository: https://github.com/imasaikiran/pm-skills-marketplace
- Branch: main
- Status: All code pushed ✅

---

## 🌐 Step 2: Deploy via Vercel Dashboard

### 2.1 Go to Vercel
1. Open: https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Repository
1. After login, you'll see the dashboard
2. Click **"Add New..."** → **"Project"**
3. Find your repo: **"pm-skills-marketplace"**
4. Click **"Import"**

### 2.3 Configure Project
You'll see the import screen. Configure:

**Root Directory:**
- Click "Edit" next to Root Directory
- Enter: `website`
- Click "Continue"

**Framework Preset:**
- Should auto-detect: **Next.js** ✅

**Build Command:**
- Should auto-fill: `npm run build` ✅

**Output Directory:**
- Should auto-fill: `.next` ✅

**Install Command:**
- Should auto-fill: `npm install` ✅

### 2.4 Add Environment Variables

Click **"Environment Variables"** section

Add these variables ONE BY ONE:

#### Variable 1: NEXT_PUBLIC_SUPABASE_URL
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://dnjlvwqdzrtnrqryogpk.supabase.co
Environment: Production, Preview, Development (select all 3)
```

#### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODc2MzMsImV4cCI6MjA4NDY2MzYzM30.3vuv9lluFn_ndx0jwMPzx8DIA5e6dZhuVCUdmLSRlS0
Environment: Production, Preview, Development
```

#### Variable 3: SUPABASE_SERVICE_ROLE_KEY
```
Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA4NzYzMywiZXhwIjoyMDg0NjYzNjMzfQ.Zt-4OZXXYuj-qWIyWrpJAAJE1DKLrk0AQdDCuR_gLyw
Environment: Production, Preview, Development
```

#### Variable 4: NEXT_PUBLIC_BASE_URL
```
Name: NEXT_PUBLIC_BASE_URL
Value: https://slashworks.biz
Environment: Production only
```

#### Variable 5: RAZORPAY_KEY_ID (⚠️ USE YOUR REAL KEYS!)
```
Name: RAZORPAY_KEY_ID
Value: [YOUR RAZORPAY KEY - Get from https://dashboard.razorpay.com/app/keys]
Environment: Production only
```

#### Variable 6: RAZORPAY_KEY_SECRET (⚠️ USE YOUR REAL KEYS!)
```
Name: RAZORPAY_KEY_SECRET
Value: [YOUR RAZORPAY SECRET - Get from https://dashboard.razorpay.com/app/keys]
Environment: Production only
```

#### Variable 7: RESEND_API_KEY (⚠️ Get from Resend)
```
Name: RESEND_API_KEY
Value: [YOUR RESEND API KEY - Get from https://resend.com/api-keys]
Environment: Production only
```

### 2.5 Deploy!
1. After adding all variables, click **"Deploy"**
2. Wait 2-5 minutes for build to complete
3. You'll get a URL like: `https://pm-skills-marketplace-xxx.vercel.app`

---

## 🌐 Step 3: Connect Custom Domain (slashworks.biz)

### 3.1 In Vercel Dashboard
1. Go to your project → **Settings** → **Domains**
2. Click **"Add"**
3. Enter: `slashworks.biz`
4. Click **"Add"**
5. Also add: `www.slashworks.biz` (repeat steps)

### 3.2 Vercel will show DNS records

You'll see something like:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3.3 Configure DNS at Your Domain Registrar

**Where is slashworks.biz registered?**
- GoDaddy: Go to DNS Management
- Namecheap: Go to Advanced DNS
- Google Domains: Go to DNS settings
- Cloudflare: Go to DNS

**Add these DNS records:**

| Type | Name/Host | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Delete any existing A or CNAME records for @ and www first!**

### 3.4 Wait for DNS Propagation
- Usually takes 5-30 minutes
- Can take up to 24 hours
- Check status: https://www.whatsmydns.net

---

## 🔧 Step 4: Update Razorpay Webhook

Once your site is live at slashworks.biz:

1. Go to: https://dashboard.razorpay.com/app/webhooks
2. Click **"Add New Webhook"** or edit existing
3. **Webhook URL:** `https://slashworks.biz/api/razorpay/webhook`
4. **Secret:** Generate a random string (save it!)
5. **Active Events:** Select:
   - ✅ payment.captured
   - ✅ payment.failed
   - ✅ order.paid
6. Click **"Create Webhook"**

7. **Add webhook secret to Vercel:**
   - Go to Vercel → Settings → Environment Variables
   - Add new variable:
     ```
     Name: RAZORPAY_WEBHOOK_SECRET
     Value: [the secret you just created]
     Environment: Production
     ```
   - Redeploy: Go to Deployments → Click "..." on latest → Redeploy

---

## 🧪 Step 5: Test Your Live Site

### Test Checklist:

#### Basic Functionality:
- [ ] Visit https://slashworks.biz
- [ ] Homepage loads correctly
- [ ] Dark theme displays
- [ ] "slashworks" branding visible

#### Navigation:
- [ ] Click "Browse all 150+ →"
- [ ] Skills page loads
- [ ] Shows "Showing all 146 frameworks"
- [ ] Category filters work
- [ ] Search works (try "RICE")

#### Payment Flow:
- [ ] Click "Get for $1 →"
- [ ] Payment page loads
- [ ] Click "Pay $1 with Razorpay"
- [ ] Razorpay checkout opens
- [ ] Make test payment with real card
- [ ] Payment succeeds

#### Post-Payment:
- [ ] Email received (check spam folder)
- [ ] Email contains download link
- [ ] Download link works
- [ ] ZIP file downloads
- [ ] ZIP contains .md files

---

## 🐛 Troubleshooting

### Issue 1: Build Failed
**Symptoms:** Deployment shows "Build Failed" with errors

**Solution:**
1. Check build logs in Vercel
2. Most common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

**Fix:**
```bash
# Test build locally first
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/website"
npm run build

# If it builds locally but fails on Vercel:
# - Check environment variables are correct
# - Ensure Root Directory is set to "website"
```

### Issue 2: Environment Variables Not Working
**Symptoms:** Site loads but features don't work (no data, payment fails)

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Check all variables are added
3. Ensure they're enabled for "Production"
4. Click "..." on latest deployment → Redeploy

### Issue 3: Domain Not Connecting
**Symptoms:** slashworks.biz shows error or doesn't load

**Solution:**
1. Check DNS records are correct at your registrar
2. Wait 30-60 minutes (DNS propagation)
3. Use https://www.whatsmydns.net to check if DNS has propagated
4. Verify you deleted old A/CNAME records

### Issue 4: Skills Not Showing
**Symptoms:** Homepage loads but skills page is empty

**Solution:**
1. Check Supabase keys are correct
2. Verify database has 146 skills (should be done already)
3. Check browser console for errors
4. Verify NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

### Issue 5: Payment Not Working
**Symptoms:** Razorpay button doesn't work or shows error

**Solution:**
1. Verify you're using LIVE Razorpay keys (not test)
2. Check RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are correct
3. Ensure keys are for "Production" environment only
4. Check Vercel logs: Project → Logs

---

## 📱 Step 6: Final Testing

### Desktop Testing:
- [ ] Test in Chrome
- [ ] Test in Safari
- [ ] Test in Firefox
- [ ] Test in Edge

### Mobile Testing:
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Check responsive design
- [ ] Test payment on mobile

### Real Payment Test:
- [ ] Use real credit card
- [ ] Pay the $1
- [ ] Verify email received
- [ ] Download ZIP file
- [ ] Unzip and check contents
- [ ] Test installing a skill in Claude Code

---

## 🎉 Success Criteria

Your deployment is successful when:

✅ https://slashworks.biz loads
✅ All 146 skills display on /skills page
✅ Search and filters work
✅ Payment button opens Razorpay
✅ Test payment succeeds
✅ Email received with download link
✅ ZIP file downloads correctly
✅ Mobile site works

---

## 📞 Get Help

### Vercel Issues:
- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support
- Discord: https://vercel.com/discord

### Domain Issues:
- Check registrar's support (GoDaddy, Namecheap, etc.)
- DNS propagation checker: https://www.whatsmydns.net

### Payment Issues:
- Razorpay Support: support@razorpay.com
- Razorpay Docs: https://razorpay.com/docs

---

## 🔄 Redeploying

If you need to redeploy after making changes:

1. **Push to GitHub:**
   ```bash
   cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"
   git add .
   git commit -m "Update"
   git push origin main
   ```

2. **Auto-Deploy:**
   - Vercel auto-deploys when you push to GitHub
   - Check Deployments tab to see progress

3. **Manual Redeploy:**
   - Go to Vercel → Deployments
   - Click "..." on any deployment
   - Click "Redeploy"

---

## 📋 Quick Reference

**Your GitHub Repo:**
https://github.com/imasaikiran/pm-skills-marketplace

**Your Vercel Dashboard:**
https://vercel.com/dashboard

**Your Domain:**
- Production: https://slashworks.biz
- Vercel URL: https://pm-skills-marketplace-xxx.vercel.app

**Required API Keys:**
1. Supabase (✅ you have these)
2. Razorpay (⚠️ get from dashboard)
3. Resend (⚠️ get for email)

---

## 🚀 Estimated Timeline

- Import project to Vercel: 5 minutes
- Configure and deploy: 5 minutes
- First deployment build: 3-5 minutes
- Add custom domain: 2 minutes
- DNS propagation: 30-60 minutes
- Testing: 10 minutes

**Total: ~1 hour** (mostly waiting for DNS)

---

## ✅ Current Status

- [x] Code on GitHub
- [x] vercel.json configuration created
- [ ] Import to Vercel Dashboard
- [ ] Add environment variables
- [ ] Deploy
- [ ] Connect domain
- [ ] Test

**YOU'RE READY! Start at Step 2 above** 🎊

Go to: https://vercel.com
