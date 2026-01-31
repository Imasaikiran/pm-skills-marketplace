# 💳 Razorpay Setup Guide - Connect $1 Payment

## What You Need from Razorpay

To connect the "$1 CTA" buttons to Razorpay, you need **2 keys**:

1. **RAZORPAY_KEY_ID** (Publishable key)
2. **RAZORPAY_KEY_SECRET** (Secret key)

---

## Step 1: Create Razorpay Account (5 minutes)

### Sign Up
1. Go to https://razorpay.com
2. Click "Sign Up"
3. Enter your details:
   - Business name: "Slashworks"
   - Email
   - Phone number
   - Business type: "Education/Online Services"
4. Verify email and phone

### Complete KYC (if required for live mode)
- Upload PAN card
- Upload business documents
- Bank account details

---

## Step 2: Get Your API Keys

### For Testing (Test Mode) - Start Here

1. **Login to Razorpay Dashboard**
   - Go to https://dashboard.razorpay.com

2. **Switch to Test Mode**
   - Look for toggle in top-right: "Test Mode" / "Live Mode"
   - Click to switch to **Test Mode**

3. **Get Test Keys**
   - Click "Settings" → "API Keys"
   - Or go directly to: https://dashboard.razorpay.com/app/keys
   - You'll see:
     ```
     Key Id: rzp_test_xxxxxxxxxxxxx
     Key Secret: [Click "Generate Secret"]
     ```
   - Copy both keys

### For Production (Live Mode) - After Testing

1. **Switch to Live Mode**
   - Toggle to "Live Mode" in dashboard

2. **Activate Live Account**
   - Complete KYC verification
   - Add bank account details
   - Submit required documents

3. **Get Live Keys**
   - Go to Settings → API Keys
   - Copy your live keys:
     ```
     Key Id: rzp_live_xxxxxxxxxxxxx
     Key Secret: [Generate and copy]
     ```

---

## Step 3: Add Keys to Your Project

### Update `.env.local` file

Open: `/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/website/.env.local`

Add these lines at the end:

```bash
# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_secret_key_here
```

**Example (Test Mode):**
```bash
# Razorpay Configuration - TEST MODE
RAZORPAY_KEY_ID=rzp_test_1A2B3C4D5E6F7G
RAZORPAY_KEY_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

**Example (Live Mode):**
```bash
# Razorpay Configuration - LIVE MODE
RAZORPAY_KEY_ID=rzp_live_1A2B3C4D5E6F7G
RAZORPAY_KEY_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

---

## Step 4: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
cd "/Users/saikiran/Desktop/Claud Workspace/pm-skills-marketplace/website"
npm run dev
```

---

## Step 5: Test the Payment Flow

### Test with Razorpay Test Cards

1. **Go to payment page**
   - http://localhost:3000/payment

2. **Click "Pay $1 with Razorpay →"**

3. **Use Test Card Details:**
   ```
   Card Number: 4111 1111 1111 1111
   Expiry: Any future date (e.g., 12/25)
   CVV: 123
   Name: Test User
   ```

4. **Other Test Methods:**
   - **UPI:** success@razorpay (for success)
   - **UPI:** failure@razorpay (for failure)
   - **Netbanking:** Select any bank → Success

5. **Verify:**
   - Payment completes successfully
   - You see success page
   - Check Razorpay dashboard for the test payment

---

## Step 6: Configure Webhook (For Email Notifications)

### Why You Need This
When a payment succeeds, Razorpay needs to notify your server to send the download email.

### Setup Webhook

1. **Go to Razorpay Dashboard**
   - https://dashboard.razorpay.com/app/webhooks

2. **Click "Add New Webhook"**

3. **Enter Details:**
   - **Webhook URL:** `http://localhost:3000/api/razorpay/webhook` (for testing)
   - **For Production:** `https://yourdomain.com/api/razorpay/webhook`
   - **Secret:** Generate a random string (save this!)
   - **Events to Send:**
     - ✅ payment.captured
     - ✅ payment.failed
     - ✅ order.paid

4. **Save Webhook**

5. **Add Webhook Secret to .env.local:**
   ```bash
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
   ```

---

## Current Configuration Status

### ✅ What's Already Done
- Razorpay SDK installed (`razorpay` package)
- Payment API endpoint created: `/api/razorpay/checkout`
- Webhook endpoint created: `/api/razorpay/webhook`
- Payment page configured
- Amount set to ₹85 (approximately $1 USD)

### ⚠️ What You Need to Add
- RAZORPAY_KEY_ID (from dashboard)
- RAZORPAY_KEY_SECRET (from dashboard)
- RAZORPAY_WEBHOOK_SECRET (when you create webhook)

---

## Payment Amount Configuration

Currently set to **₹85** (approximately $1 USD)

**To change the amount**, edit:
`website/app/api/razorpay/checkout/route.ts`

```typescript
const order = await razorpay.orders.create({
  amount: 8500, // ₹85 in paise (100 paise = ₹1)
  currency: 'INR',
  // ...
});
```

**Examples:**
- ₹1 = 100 paise
- ₹10 = 1000 paise
- ₹100 = 10000 paise
- ₹85 = 8500 paise

---

## Testing Checklist

### Test Mode Testing
- [ ] Added RAZORPAY_KEY_ID (test) to .env.local
- [ ] Added RAZORPAY_KEY_SECRET (test) to .env.local
- [ ] Restarted development server
- [ ] Clicked "Pay $1 with Razorpay" button
- [ ] Razorpay checkout modal opens
- [ ] Used test card: 4111 1111 1111 1111
- [ ] Payment completes successfully
- [ ] Checked Razorpay dashboard for payment

### Webhook Testing (Optional for now)
- [ ] Created webhook in Razorpay dashboard
- [ ] Added RAZORPAY_WEBHOOK_SECRET to .env.local
- [ ] Test payment triggers webhook
- [ ] Email sent with download link

---

## Common Issues

### Issue: "Razorpay order creation error"
**Cause:** Missing or invalid API keys

**Solution:**
1. Check `.env.local` has both keys
2. Verify keys are correct (no extra spaces)
3. Make sure you're using test keys in test mode
4. Restart dev server after adding keys

### Issue: Payment modal doesn't open
**Cause:** Missing RAZORPAY_KEY_ID

**Solution:**
1. Add `RAZORPAY_KEY_ID` to `.env.local`
2. Restart server
3. Clear browser cache

### Issue: Webhook not triggering
**Cause:** Webhook URL incorrect or not set

**Solution:**
1. Use ngrok for local testing: `ngrok http 3000`
2. Update webhook URL to ngrok URL
3. Verify webhook secret matches

---

## Production Deployment

### Before Going Live

1. **Switch to Live Keys**
   ```bash
   # In production .env
   RAZORPAY_KEY_ID=rzp_live_xxxxx
   RAZORPAY_KEY_SECRET=your_live_secret
   ```

2. **Update Webhook URL**
   - Change to: `https://yourdomain.com/api/razorpay/webhook`

3. **Test with Real Payment**
   - Use real card with small amount
   - Verify email received
   - Check payment appears in dashboard

4. **Enable Automatic Settlements**
   - Go to Razorpay Settings
   - Enable auto-settlement to your bank

---

## Quick Start (Copy-Paste)

1. **Get your Razorpay test keys from:**
   https://dashboard.razorpay.com/app/keys

2. **Add to `.env.local`:**
   ```bash
   RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_HERE
   RAZORPAY_KEY_SECRET=YOUR_SECRET_HERE
   ```

3. **Restart server:**
   ```bash
   cd website && npm run dev
   ```

4. **Test payment:**
   - Go to: http://localhost:3000/payment
   - Click "Pay $1 with Razorpay"
   - Use card: 4111 1111 1111 1111

---

## Support

**Razorpay Documentation:**
- https://razorpay.com/docs/payments/payment-gateway/
- https://razorpay.com/docs/webhooks/

**Razorpay Support:**
- Email: support@razorpay.com
- Dashboard: https://dashboard.razorpay.com

---

## Summary

**What you need RIGHT NOW to test:**
1. Sign up at https://razorpay.com (if not done)
2. Get test keys from dashboard
3. Add to `.env.local`:
   ```
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=your_secret
   ```
4. Restart server
5. Test payment!

**After payment works, you need:**
- Webhook setup (for email notifications)
- Live keys (for real money)
- KYC completion (for withdrawal)

---

**Current Status:** Razorpay integration code is complete. You just need to add your keys! 🎉
