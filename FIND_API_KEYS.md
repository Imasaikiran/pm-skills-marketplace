# 🔑 How to Find Your Supabase API Keys

## ⚠️ Important: You Need JWT Tokens, Not Publishing Keys

The keys you shared are **publishing keys** (for Supabase Management API).
We need **JWT API keys** instead!

---

## 📍 Step-by-Step to Find API Keys

### **Method 1: Via Supabase Dashboard** (Recommended)

1. **Go to your Supabase project:**
   - URL: https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk

2. **Click the ⚙️ Settings icon** (bottom left sidebar)

3. **Click "API"** in the settings menu

4. **Scroll down to "Project API keys"** section

5. **You should see TWO keys:**

   **anon (public):**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY...
   ```
   ⬆️ This is VERY LONG (200+ characters)

   **service_role (secret):**
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNj...
   ```
   ⬆️ This is also VERY LONG (200+ characters)

---

## 🔍 **What the Keys Look Like**

### ✅ **CORRECT API Keys** (JWT tokens):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuamx2d3FkenJ0bnJxcnlvZ3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4MjQwMDB9.ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
```

**Characteristics:**
- ✅ Starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.`
- ✅ Has two dots (`.`) dividing it into 3 parts
- ✅ Very long (200-300+ characters)
- ✅ Contains your project ref in the decoded token

### ❌ **WRONG Keys** (Publishing keys):
```
sb_publishable_4Zh4pXgKcCUnzRVaJagU4Q_4Y5s4Pzm
sb_secret_amZ9Xrqv2FTwwfBgejHMog__OvWRUL0
```

**These are for:**
- ❌ Supabase Management API (not for your app)
- ❌ Different purpose (project management, not data access)

---

## 🎯 **Where to Look**

In your Supabase dashboard:

```
Settings (⚙️)
  └── API
        ├── Configuration
        │     └── Project URL: https://dnjlvwqdzrtnrqryogpk.supabase.co ✅
        │
        └── Project API keys  ⬅️ LOOK HERE!
              ├── anon public (Click "Reveal" to see the key)
              └── service_role secret (Click "Reveal" to see the key)
```

---

## 📱 **Screenshot Guide**

The page should show:

1. **Project URL** at the top:
   ```
   https://dnjlvwqdzrtnrqryogpk.supabase.co
   ```

2. **Then "Project API keys" section** with:
   - `anon` `public` - with a "Reveal" or "Copy" button
   - `service_role` `secret` - with a "Reveal" or "Copy" button

3. **Click "Reveal"** or the eye icon (👁️) to see the full key

4. **Click "Copy"** to copy the entire key

---

## 💡 **Can't Find It?**

### **Alternative: Try the Authentication Settings**

1. Go to **Authentication** (🔐 icon in sidebar)
2. Click **"Settings"**
3. Scroll to **"JWT Settings"** or **"API Keys"**
4. You should see the keys there too

---

## 🚨 **Still Can't Find It?**

If you still don't see the API keys section, it's possible your Supabase project is using a different setup. Try:

1. **Take a screenshot** of your Settings → API page and share it
2. Or **try this direct link:**
   ```
   https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/settings/api
   ```

---

## ✅ **Once You Find Them**

Copy both keys and paste them in this format:

```
Project URL: https://dnjlvwqdzrtnrqryogpk.supabase.co

Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJz...

Service Role Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJz...
```

Then I'll configure everything for you! 🚀

---

**Need more help?** Just share a screenshot of your Settings → API page and I'll guide you!
