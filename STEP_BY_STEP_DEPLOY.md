# 🚀 Step-by-Step Vercel Deployment (With Screenshots Guide)

## STEP 1: Sign Up / Login to Vercel

### 1.1 Open Vercel
Open your browser and go to:
```
https://vercel.com
```

### 1.2 Click "Sign Up" or "Login"
- If you see a **"Sign Up"** button, click it
- If you already have an account, click **"Login"**

### 1.3 Connect with GitHub
You'll see options:
- ✅ **Click: "Continue with GitHub"** (RECOMMENDED)
- Or use email/other options

### 1.4 Authorize Vercel
- GitHub will ask: "Authorize Vercel?"
- **Click: "Authorize Vercel"**
- You may need to enter your GitHub password

---

## STEP 2: Import Your Project

### 2.1 You'll see the Vercel Dashboard
After login, you'll be on a page that says:
- "Let's build something new"
- Or you'll see existing projects

### 2.2 Click "Add New..."
- Look for a button that says **"Add New..."** (usually top-right)
- Click it
- Select **"Project"** from dropdown

### 2.3 Import Git Repository
You'll see a page titled: "Import Git Repository"

**Look for your repository:**
- You might see: **"pm-skills-marketplace"** listed
- If you see it: **Click "Import"** next to it
- If you don't see it:
  - Click **"Adjust GitHub App Permissions"**
  - Select your repositories
  - Come back and refresh

### 2.4 If Asked to Install Vercel on GitHub
- Click **"Install"** or **"Configure"**
- Select: "Only select repositories"
- Choose: **"pm-skills-marketplace"**
- Click **"Install"**
- You'll be redirected back to Vercel

---

## STEP 3: Configure Project Settings

### 3.1 You'll See "Configure Project" Page

You'll see several sections. Here's what to do:

### 3.2 Project Name
- **Field:** "Project Name"
- **Current Value:** May show `pm-skills-marketplace` or `pm-skills-marketplace-slashworks`
- **⚠️ IMPORTANT:** If you see error "Project already exists", change the name!
- **Action:** Type a NEW unique name:
  - Try: `slashworks` (recommended)
  - Or: `slashworks-prod`
  - Or: `slashworks-site`
  - Or: Any other unique name you prefer

### 3.3 Framework Preset
- **Field:** "Framework Preset"
- **Value:** Should say **"Next.js"**
- **Action:** If it doesn't, select "Next.js" from dropdown
- ✅ Should auto-detect correctly

### 3.4 Root Directory ⚠️ IMPORTANT!
- **Field:** "Root Directory"
- **Current Value:** Probably shows `./` (root)
- **Action:**
  1. Click **"Edit"** button next to Root Directory
  2. A list of folders appears
  3. **Select: "website"** (this is crucial!)
  4. Click **"Continue"**

### 3.5 Build and Output Settings
These should auto-fill:
- **Build Command:** `npm run build` ✅
- **Output Directory:** `.next` ✅
- **Install Command:** `npm install` ✅

**Action:** Leave these as default (don't change)

---

## STEP 4: Add Environment Variables

### 4.1 Find Environment Variables Section
Scroll down on the same page until you see:
- **"Environment Variables"** (with a key icon 🔑)

### 4.2 Click to Expand
- If it's collapsed, click to expand this section

### 4.3 Add Variable 1: NEXT_PUBLIC_SUPABASE_URL

**For each variable, you'll see 3 fields:**
1. **Name** (left field)
2. **Value** (middle field)
3. **Environment** (right checkboxes)

**Add this variable:**
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** `https://dnjlvwqdzrtnrqryogpk.supabase.co`
- **Environment:** Check ALL THREE boxes:
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **Click:** "Add" button

### 4.4 Add Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY

Click **"Add Another"** button, then:

- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwODc2MzMsImV4cCI6MjA4NDY2MzYzM30.3vuv9lluFn_ndx0jwMPzx8DIA5e6dZhuVCUdmLSRlS0`
- **Environment:** ✅ All three (Production, Preview, Development)
- Click "Add"

### 4.5 Add Variable 3: SUPABASE_SERVICE_ROLE_KEY

Click **"Add Another"**, then:

- **Name:** `SUPABASE_SERVICE_ROLE_KEY`
- **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA4NzYzMywiZXhwIjoyMDg0NjYzNjMzfQ.Zt-4OZXXYuj-qWIyWrpJAAJE1DKLrk0AQdDCuR_gLyw`
- **Environment:** ✅ All three
- Click "Add"

### 4.6 Add Variable 4: NEXT_PUBLIC_BASE_URL

Click **"Add Another"**, then:

- **Name:** `NEXT_PUBLIC_BASE_URL`
- **Value:** `https://slashworks.biz`
- **Environment:** ✅ **Production ONLY** (uncheck Preview and Development)
- Click "Add"

### 4.7 Optional: Add Razorpay Keys (You can skip for now)

**If you have Razorpay keys:**

**Variable 5:**
- **Name:** `RAZORPAY_KEY_ID`
- **Value:** [Your Razorpay Key ID from https://dashboard.razorpay.com/app/keys]
- **Environment:** ✅ Production only
- Click "Add"

**Variable 6:**
- **Name:** `RAZORPAY_KEY_SECRET`
- **Value:** [Your Razorpay Secret]
- **Environment:** ✅ Production only
- Click "Add"

**If you don't have them yet:**
- You can add these later
- Site will work, but payment won't
- See `RAZORPAY_SETUP.md` to get keys

### 4.8 Optional: Add Resend API Key (For emails)

**Variable 7:**
- **Name:** `RESEND_API_KEY`
- **Value:** [Get from https://resend.com/api-keys]
- **Environment:** ✅ Production only
- Click "Add"

**You can add this later too**

---

## STEP 5: Deploy!

### 5.1 Click the Deploy Button
- At the bottom of the page
- Big button that says: **"Deploy"**
- Click it!

### 5.2 Watch the Build Process
You'll see a new page with:
- "Building..." message
- Logs scrolling by
- Progress indicator

**This takes 2-5 minutes**

### 5.3 Wait for Success
You'll see:
- ✅ "Building" → "Completed"
- 🎉 Confetti animation
- Your deployment URL

### 5.4 Get Your URL
You'll see something like:
```
https://pm-skills-marketplace-abc123.vercel.app
```

### 5.5 Test Your Site
- **Click** on that URL
- Your site should open!
- ✅ Check homepage loads
- ✅ Check dark theme works
- ✅ Check skills page shows frameworks

---

## STEP 6: Connect Custom Domain (slashworks.biz)

### 6.1 Go to Domains Settings
On your project dashboard:
- Click **"Settings"** tab (top navigation)
- Click **"Domains"** in left sidebar

### 6.2 Add Domain
- You'll see a field: "Enter domain"
- Type: `slashworks.biz`
- Click **"Add"**

### 6.3 Also Add www Version
- Click "Add Domain" again
- Type: `www.slashworks.biz`
- Click "Add"

### 6.4 Vercel Shows DNS Configuration
Vercel will display the DNS records you need to add.

You'll see something like:
```
Add the following records to your DNS provider:

Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!** You'll need these values.

---

## STEP 7: Configure DNS at Your Domain Registrar

### 7.1 Find Where slashworks.biz is Registered

**Common registrars:**
- GoDaddy → godaddy.com
- Namecheap → namecheap.com
- Google Domains → domains.google.com
- Cloudflare → cloudflare.com

**Go to that website and login**

### 7.2 Find DNS Management

**Look for these menu options:**
- "DNS Management" (GoDaddy)
- "Advanced DNS" (Namecheap)
- "DNS" (Google Domains)
- "DNS Records" (Cloudflare)

### 7.3 Delete Existing Records (If Any)

**Look for existing A or CNAME records:**
- Type: A, Name: @ → **Delete it**
- Type: CNAME, Name: www → **Delete it**
- Type: CNAME, Name: @ → **Delete it**

### 7.4 Add New A Record

Click **"Add Record"** or **"Add"**

**Fill in:**
- **Type:** Select "A" from dropdown
- **Name/Host:** Type `@` (or leave blank if it's default)
- **Value/Points to:** Type `76.76.21.21`
- **TTL:** Keep default (3600 or Automatic)
- Click **"Save"** or **"Add Record"**

### 7.5 Add New CNAME Record

Click **"Add Record"** again

**Fill in:**
- **Type:** Select "CNAME" from dropdown
- **Name/Host:** Type `www`
- **Value/Points to:** Type `cname.vercel-dns.com`
- **TTL:** Keep default
- Click **"Save"** or **"Add Record"**

### 7.6 Save Changes
- Some registrars need you to click a final "Save" button
- Look for "Save Changes" or "Save DNS Settings"
- Click it if you see it

---

## STEP 8: Wait for DNS Propagation

### 8.1 This Takes Time
- Usually: 5-30 minutes
- Sometimes: Up to 24 hours
- Average: 30-60 minutes

### 8.2 Check DNS Propagation
Go to: https://www.whatsmydns.net

- **Search box:** Type `slashworks.biz`
- **Record type:** Select "A"
- Click **"Search"**

**You should see:**
- Multiple checkmarks showing `76.76.21.21`
- If not all green yet, wait longer

### 8.3 Check in Vercel
Go back to Vercel → Your Project → Domains

You'll see status:
- ⏳ "Pending" → Still waiting
- ✅ "Valid" → Domain is connected!

---

## STEP 9: Test Your Live Site!

### 9.1 Open Your Domain
Go to: `https://slashworks.biz`

### 9.2 Test Everything

**Homepage:**
- [ ] Loads correctly
- [ ] Dark theme visible
- [ ] "slashworks" branding
- [ ] "150+" shown

**Skills Page:**
- [ ] Click "Browse all 150+ →"
- [ ] Shows all 146 frameworks
- [ ] Search works (try "RICE")
- [ ] Filters work (click "AI PM")

**Payment:**
- [ ] Click "Get for $1 →"
- [ ] Payment page loads
- [ ] (If Razorpay keys added) Payment button works

**Mobile:**
- [ ] Open on phone
- [ ] Everything responsive
- [ ] Works smoothly

---

## 🐛 Troubleshooting

### Problem 1: Build Failed

**You see:** Red error message during deployment

**Solutions:**
1. **Check Root Directory:**
   - Settings → General → Root Directory
   - Should be: `website`
   - If not, edit it and redeploy

2. **Check Build Logs:**
   - Click on the failed deployment
   - Read error message
   - Usually missing environment variables

3. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on latest
   - Click "Redeploy"

### Problem 2: Site Shows 404

**You see:** "404 - Page Not Found"

**Solutions:**
1. Root Directory is wrong
   - Fix: Settings → General → Root Directory → `website`
   - Redeploy

2. Environment variables missing
   - Fix: Settings → Environment Variables
   - Add missing ones
   - Redeploy

### Problem 3: No Skills Showing

**You see:** Homepage loads but skills page is empty

**Solutions:**
1. Check Supabase environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` ✅
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅

2. Redeploy after adding variables

3. Check browser console (F12) for errors

### Problem 4: Domain Not Working

**You see:** "This site can't be reached"

**Solutions:**
1. Wait longer (DNS takes time)
2. Check DNS records at registrar
3. Verify:
   - Type A, Name @, Value 76.76.21.21 ✅
   - Type CNAME, Name www, Value cname.vercel-dns.com ✅
4. Use https://www.whatsmydns.net to check

### Problem 5: Payment Not Working

**You see:** Razorpay button doesn't work

**Solutions:**
1. Add Razorpay keys:
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
2. Use LIVE keys (not test) for production
3. Redeploy after adding

---

## 📝 Quick Checklist

### Before Deploying:
- [x] Code on GitHub ✅
- [x] vercel.json created ✅
- [ ] Vercel account created

### During Deployment:
- [ ] Logged into Vercel
- [ ] Imported pm-skills-marketplace
- [ ] Set Root Directory to "website"
- [ ] Added 4 environment variables (minimum)
- [ ] Clicked Deploy
- [ ] Got deployment URL

### After First Deploy:
- [ ] Tested deployment URL
- [ ] Added domain slashworks.biz
- [ ] Updated DNS records
- [ ] Waited for DNS propagation
- [ ] Tested https://slashworks.biz

### Optional (Can Do Later):
- [ ] Add Razorpay keys
- [ ] Add Resend key
- [ ] Test payment flow
- [ ] Test email delivery

---

## 🎉 Success!

When you see:
- ✅ https://slashworks.biz loads
- ✅ All 146 frameworks visible
- ✅ Search and filters work
- ✅ Mobile responsive

**YOU'RE LIVE!** 🚀

---

## 📞 Need Help?

### Can't find something?
- Re-read the step carefully
- Look for buttons with similar names
- Vercel UI changes sometimes but concepts stay same

### Still stuck?
1. Check Vercel docs: https://vercel.com/docs
2. Screenshot the error and check what it says
3. Most issues are:
   - Root directory not set to "website"
   - Missing environment variables
   - DNS not propagated yet

### Common Questions:

**Q: How long does deployment take?**
A: 2-5 minutes for build, 30-60 min for DNS

**Q: Can I deploy without Razorpay keys?**
A: Yes! Add them later to enable payments

**Q: What if I make mistakes?**
A: You can always redeploy or edit settings

**Q: Is it free?**
A: Yes! Vercel's free tier is perfect for this

---

## 🔄 Making Changes Later

After deployment, if you want to update your site:

### Update Code:
```bash
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace"
# Make your changes
git add .
git commit -m "Update site"
git push origin main
```

**Vercel auto-deploys when you push!**

### Update Environment Variables:
1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Edit or add new ones
4. Redeploy (Deployments → ... → Redeploy)

---

**Time to Complete:** 15-20 minutes + 30 min DNS wait

**Let's do this!** 🚀

Start at STEP 1: Go to https://vercel.com
