# 🗄️ Supabase Setup Guide - Step by Step

## ✅ What We've Done So Far

I've created all the necessary files for Supabase integration:

1. ✅ **Database Schema** (`website/supabase/schema.sql`) - Complete PostgreSQL schema
2. ✅ **Supabase Clients** (`website/lib/supabase/`) - Browser and server clients
3. ✅ **TypeScript Types** - Full type definitions for database
4. ✅ **Environment Config** - `.env.local.example` template
5. ✅ **Installed Packages** - `@supabase/supabase-js` and `@supabase/ssr`

---

## 🚀 Now You Need To Do These Steps

### **Step 1: Create Supabase Account & Project** (5 minutes)

1. **Go to Supabase:** https://supabase.com
2. **Sign up** with GitHub, Google, or email
3. **Create a new project:**
   - Click "New Project"
   - Organization: Create or select
   - Project name: `pm-skills-marketplace`
   - Database password: Create a strong password (SAVE THIS!)
   - Region: Choose closest to you
   - Click "Create new project"

⏳ **Wait 2-3 minutes** for project to be created...

---

### **Step 2: Run the Database Schema** (3 minutes)

Once your project is ready:

1. **Go to SQL Editor:**
   - In left sidebar, click "SQL Editor"
   - Click "New query"

2. **Copy the entire schema:**
   ```bash
   # On your Mac, copy this file:
   cat ~/Desktop/Claud\ Workspace/pm-skills-marketplace/website/supabase/schema.sql | pbcopy
   ```

3. **Paste into SQL Editor** and click "Run"

You should see: ✅ **"Success. No rows returned"**

This creates:
- 6 tables (profiles, skills, skill_reviews, skill_usage, user_skills, categories)
- Indexes for performance
- Row Level Security policies
- Triggers for auto-updates
- 12 seed categories

---

### **Step 3: Get Your Supabase Credentials** (2 minutes)

1. **Go to Project Settings:**
   - Click the ⚙️ gear icon in left sidebar
   - Click "API" in the settings menu

2. **Copy these values:**
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (also starts with `eyJ...` - keep this secret!)

---

### **Step 4: Configure Environment Variables** (2 minutes)

1. **Create `.env.local` file:**
   ```bash
   cd ~/Desktop/Claud\ Workspace/pm-skills-marketplace/website
   cp .env.local.example .env.local
   ```

2. **Edit `.env.local`** with your values:
   ```bash
   # Open in your editor
   open .env.local
   ```

3. **Fill in your Supabase credentials:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Save the file**

---

### **Step 5: Restart Your Development Server** (1 minute)

The server needs to restart to pick up the new environment variables.

**Option A: I can restart it for you** - Just say "restart server"

**Option B: Restart manually:**
```bash
# Stop the current server (Ctrl+C in terminal)
# Or kill it:
lsof -ti:3000 | xargs kill -9

# Start again:
cd ~/Desktop/Claud\ Workspace/pm-skills-marketplace/website
npm run dev
```

---

### **Step 6: Verify Connection** (1 minute)

After restarting, I'll test the database connection for you!

---

## 📊 Database Schema Overview

### **Tables Created:**

1. **`profiles`** - User profiles (extends Supabase Auth)
   - Links to auth.users
   - Tracks subscription tier (free/pro/team/enterprise)
   - Stripe customer ID for payments

2. **`skills`** - All PM skills
   - Complete skill metadata
   - Download counts, ratings, reviews
   - Full-text search enabled
   - Tags and categories

3. **`skill_reviews`** - User reviews
   - 1-5 star ratings
   - Comments
   - Helpful votes
   - One review per user per skill

4. **`skill_usage`** - Analytics tracking
   - Install, execute, error events
   - Session tracking
   - Performance metrics

5. **`user_skills`** - Installed skills per user
   - Track what each user has installed
   - Last used date
   - Use count
   - Favorites

6. **`categories`** - Skill categories
   - 12 pre-seeded PM categories
   - Icons and colors
   - Skill counts

---

## 🔐 Security Features

**Row Level Security (RLS) Enabled:**
- ✅ Users can only see/edit their own data
- ✅ Skills are public (read-only)
- ✅ Only admins can create/edit skills
- ✅ Users can review and install skills

**Automatic Features:**
- ✅ Profile created on user signup
- ✅ Updated timestamps auto-managed
- ✅ Skill ratings auto-calculated from reviews
- ✅ Download counts can be incremented safely

---

## 🧪 Testing the Database

Once connected, you can test by:

1. **Creating a user** (sign up on your site)
2. **Viewing skills** (they'll come from database)
3. **Installing a skill** (tracked in user_skills)
4. **Leaving a review** (stored in skill_reviews)

---

## 📝 Next Steps After Supabase is Set Up

Once you've completed Steps 1-6 above, I'll help you:

1. **Seed the database** with your 4 existing skills (RICE, User Interviews, etc.)
2. **Update the website** to fetch real data from Supabase
3. **Add authentication** (sign up, sign in, sign out)
4. **Enable skill downloads** with tracking
5. **Add user dashboard** to see installed skills

---

## 🆘 Troubleshooting

### **"Project creation failed"**
- Try a different project name
- Check if you have any billing issues
- Wait a minute and try again

### **"Schema failed to run"**
- Make sure you copied the ENTIRE schema file
- Check for any syntax errors in the SQL Editor
- Try running it in smaller sections

### **"Can't connect to database"**
- Verify your `.env.local` has correct values
- Check Project URL ends with `.supabase.co`
- Make sure keys start with `eyJ`
- Restart dev server after adding env vars

### **"No rows returned"**
- This is GOOD! It means the schema ran successfully
- Empty tables are normal - we'll add data next

---

## ✅ Checklist

Complete these steps in order:

- [ ] Create Supabase account
- [ ] Create new project (`pm-skills-marketplace`)
- [ ] Wait for project to be ready (2-3 min)
- [ ] Open SQL Editor
- [ ] Run the schema.sql file
- [ ] Verify: "Success. No rows returned"
- [ ] Go to Project Settings → API
- [ ] Copy Project URL
- [ ] Copy anon public key
- [ ] Copy service_role key
- [ ] Create `.env.local` file
- [ ] Add all three credentials
- [ ] Restart development server
- [ ] Tell me when done!

---

## 🎯 Current Status

**What's Done:**
- ✅ Schema file created (400+ lines)
- ✅ Supabase clients configured
- ✅ TypeScript types defined
- ✅ Environment template ready
- ✅ Packages installed

**What You Need To Do:**
- ⏳ Create Supabase project (Steps 1-2)
- ⏳ Get credentials (Step 3)
- ⏳ Configure .env.local (Step 4)
- ⏳ Restart server (Step 5)

**Once You're Done:**
- I'll seed the database with skills
- I'll update pages to use real data
- We'll add authentication
- We'll enable downloads

---

## 📞 Ready?

**Follow Steps 1-6 above**, then let me know when you're done by saying:

**"Supabase is set up"** or **"Done with Supabase"**

And paste your Project URL so I can verify!

---

**Estimated Time:** 15 minutes total
**Difficulty:** Easy (just follow the steps!)

You've got this! 🚀
