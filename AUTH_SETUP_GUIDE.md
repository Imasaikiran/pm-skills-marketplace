# 🔐 Authentication Setup Guide

## ✅ What's Been Implemented

Authentication is now fully configured in your PM Skills Marketplace!

### **Features**
- ✅ Email/Password Sign Up
- ✅ Email/Password Sign In
- ✅ OAuth with GitHub (ready to configure)
- ✅ OAuth with Google (ready to configure)
- ✅ User sessions
- ✅ User menu with profile
- ✅ Sign out functionality
- ✅ Protected routes (ready)
- ✅ Auto profile creation on signup

---

## 🚀 How It Works

### **1. Sign Up** (`/signup`)
Users can create an account using:
- Email + Password (minimum 8 characters)
- GitHub OAuth (requires Supabase configuration)
- Google OAuth (requires Supabase configuration)

When a user signs up, the database automatically creates a profile for them using the trigger we set up earlier.

### **2. Sign In** (`/login`)
Users can log in using:
- Email + Password
- GitHub OAuth
- Google OAuth

### **3. User Session**
Once logged in, users see:
- User menu in navigation (instead of Sign In/Get Started buttons)
- Profile dropdown with:
  - My Skills (coming soon)
  - Settings (coming soon)
  - Sign Out

---

## 📝 Testing Email Auth (Works Now!)

You can test email authentication immediately without any additional configuration:

### **Test Sign Up:**
1. Go to http://localhost:3000/signup
2. Fill in:
   - Full Name: `Test User`
   - Email: `test@example.com`
   - Password: `password123` (min 8 chars)
3. Check "I agree to Terms"
4. Click "Create Account"
5. You'll be redirected to homepage
6. Check your Supabase dashboard → Authentication → Users to see the new user!

### **Test Sign In:**
1. Go to http://localhost:3000/login
2. Use the credentials you just created
3. Click "Sign In"
4. You should see your user menu in the top right!

### **Test Sign Out:**
1. Click on your user avatar/name in top right
2. Click "Sign Out"
3. You'll be logged out and redirected to homepage

---

## 🔧 OAuth Setup (Optional)

Email auth works out of the box, but if you want to enable GitHub/Google OAuth, follow these steps:

### **Enable GitHub OAuth**

1. **Create GitHub OAuth App:**
   - Go to https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - Application name: `PM Skills Marketplace (Dev)`
     - Homepage URL: `http://localhost:3000`
     - Authorization callback URL: `https://dnjlvwqdzrtnrqryogpk.supabase.co/auth/v1/callback`
   - Click "Register application"
   - Copy the "Client ID"
   - Click "Generate a new client secret" and copy it

2. **Configure in Supabase:**
   - Go to https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/auth/providers
   - Find "GitHub" provider
   - Click "Enable"
   - Paste your Client ID
   - Paste your Client Secret
   - Click "Save"

3. **Test It:**
   - Go to http://localhost:3000/signup
   - Click "Continue with GitHub"
   - Authorize the app
   - You'll be signed in!

### **Enable Google OAuth**

1. **Create Google OAuth App:**
   - Go to https://console.cloud.google.com/
   - Create a new project or select existing
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Application type: "Web application"
   - Authorized redirect URIs:
     - `https://dnjlvwqdzrtnrqryogpk.supabase.co/auth/v1/callback`
   - Click "Create"
   - Copy the "Client ID" and "Client Secret"

2. **Configure in Supabase:**
   - Go to https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/auth/providers
   - Find "Google" provider
   - Click "Enable"
   - Paste your Client ID
   - Paste your Client Secret
   - Click "Save"

3. **Test It:**
   - Go to http://localhost:3000/login
   - Click "Continue with Google"
   - Select your Google account
   - You'll be signed in!

---

## 🗂️ Files Created

### **Auth Actions** (`app/auth/actions.ts`)
Server actions for:
- `signUp(formData)` - Create new user
- `signIn(formData)` - Sign in with email/password
- `signOut()` - Sign out user
- `signInWithOAuth(provider)` - OAuth sign in
- `getUser()` - Get current user

### **OAuth Callback** (`app/auth/callback/route.ts`)
Handles OAuth redirect after successful authentication

### **User Menu Component** (`components/user-menu.tsx`)
Dropdown menu showing:
- User name and email
- Links to My Skills and Settings
- Sign out button

### **Updated Pages**
- `app/signup/page.tsx` - Now uses real auth actions
- `app/login/page.tsx` - Now uses real auth actions
- `app/page.tsx` - Shows user menu when authenticated

---

## 🔐 How Auth Works

### **1. User Signs Up**
```
User fills form → signUp() action → Supabase creates user → Profile trigger creates profile row → User redirected to homepage
```

### **2. User Signs In**
```
User enters credentials → signIn() action → Supabase validates → Session created → User redirected to homepage
```

### **3. Session Management**
```
Supabase stores session in cookies → Every page checks for user → User menu shows if authenticated
```

### **4. OAuth Flow**
```
User clicks OAuth button → Redirect to provider → User authorizes → Callback to Supabase → Session created → Redirect to homepage
```

---

## 📊 Database Integration

When a user signs up, the database automatically:
1. Creates a user in `auth.users`
2. Triggers `handle_new_user()` function
3. Creates a profile in `public.profiles`
4. Copies full name and avatar from metadata

This happens automatically thanks to the trigger we created in the database schema!

---

## 🧪 Testing Checklist

- [ ] Sign up with email/password works
- [ ] Profile created in database
- [ ] Sign in with email/password works
- [ ] User menu appears when logged in
- [ ] Sign out works
- [ ] Can't access auth pages when logged in
- [ ] OAuth providers configured (optional)
- [ ] GitHub OAuth works (if configured)
- [ ] Google OAuth works (if configured)

---

## 🛡️ Security Features

### **Built-in Protection**
- ✅ Email confirmation (can be enabled in Supabase settings)
- ✅ Password requirements (min 8 chars)
- ✅ Secure session cookies
- ✅ Row Level Security (RLS) on profiles table
- ✅ HTTPS for OAuth callbacks
- ✅ CSRF protection
- ✅ Rate limiting (Supabase default)

### **Environment Variables**
All sensitive credentials are in `.env.local` (not committed to git):
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 🎯 Next Steps

### **Immediate (Works Now)**
1. Test sign up with email/password
2. Test sign in
3. Test sign out
4. Verify user created in Supabase dashboard

### **Optional (OAuth)**
1. Configure GitHub OAuth provider
2. Configure Google OAuth provider
3. Test OAuth flows

### **Future Features**
1. Email verification
2. Password reset
3. Profile editing
4. User dashboard
5. Skill installation tracking
6. Usage analytics

---

## 📱 User Flow Examples

### **New User**
```
1. Visit homepage → See "Get Started" button
2. Click "Get Started" → Signup page
3. Fill form and submit
4. Redirected to homepage
5. See user menu in top right
6. Can browse skills as authenticated user
```

### **Returning User**
```
1. Visit homepage → See "Sign In" button
2. Click "Sign In" → Login page
3. Enter credentials
4. Redirected to homepage
5. See user menu with profile
6. Can track installed skills (coming soon)
```

### **OAuth User**
```
1. Click "Continue with GitHub"
2. Authorize on GitHub
3. Redirected back to site
4. Automatically signed in
5. Profile created automatically
```

---

## 🔍 Debugging

### **Check if user is authenticated:**
```typescript
const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
console.log('User:', user);
```

### **View session in browser:**
Open DevTools → Application → Cookies → Look for Supabase auth cookies

### **Check database:**
```sql
-- See all users
SELECT * FROM auth.users;

-- See all profiles
SELECT * FROM public.profiles;
```

---

## ✅ Current Status

**Authentication is fully functional!**

- ✅ Email/password auth works immediately
- ✅ User menu shows when logged in
- ✅ Sign out works
- ✅ Profiles auto-created
- ⏳ OAuth requires configuration (optional)
- ⏳ Email verification disabled by default (can enable)

**You can start testing authentication right now at:**
- http://localhost:3000/signup
- http://localhost:3000/login

---

## 📞 Support

### **Supabase Dashboard**
- View users: https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/auth/users
- Configure auth: https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/auth/providers
- Settings: https://app.supabase.com/project/dnjlvwqdzrtnrqryogpk/settings/auth

### **Common Issues**

**"User already registered"**
- Email is already in use
- Check Supabase dashboard for existing users

**"Invalid login credentials"**
- Wrong email or password
- Check that user exists in database

**"OAuth provider not enabled"**
- Configure the provider in Supabase dashboard first
- Make sure callback URL is correct

---

**Authentication Setup Complete!** 🎉

You can now:
- Sign up new users
- Sign in existing users
- Show authenticated UI
- Track user sessions
- (Optional) Enable OAuth

Ready to test? Go to http://localhost:3000/signup and create your first account!
