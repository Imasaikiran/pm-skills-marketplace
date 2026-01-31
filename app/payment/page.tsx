'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function PaymentPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRazorpayPayment = async () => {
    setIsProcessing(true);
    window.location.href = '/api/razorpay/checkout';
  };

  return (
    <div className="min-h-screen bg-[#0E0E11] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 py-4 px-6 sticky top-0 bg-[#0E0E11]/95 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">slashworks</Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Back</Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto py-16 px-6">
        {/* Product Summary */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get all 150+ frameworks</h1>
          <p className="text-gray-400 mb-6">
            Proven product frameworks as slash commands
          </p>
          <div className="text-6xl font-bold mb-2 text-[#3B82F6]">$1</div>
          <p className="text-sm text-gray-500">One-time payment. Lifetime access. No subscription.</p>
        </div>

        {/* What's Included */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-8">
          <h2 className="font-bold text-xl mb-6 text-white">What you'll get:</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">150+ Proven Frameworks</p>
                <p className="text-sm text-gray-400">
                  RICE, AARRR, User Interviews, AI Evals, Sprint Planning, and more
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Instant Download</p>
                <p className="text-sm text-gray-400">
                  Get ZIP file with all frameworks immediately via email
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Installation Guide</p>
                <p className="text-sm text-gray-400">
                  Step-by-step instructions for Claude Code, Cursor, and any AI agent
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3B82F6] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Lifetime Access</p>
                <p className="text-sm text-gray-400">
                  No subscription. Pay once, use forever. Free updates included.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Payment Button */}
        <button
          onClick={handleRazorpayPayment}
          disabled={isProcessing}
          className={`w-full py-5 rounded-xl font-bold text-xl transition-all ${
            isProcessing
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
          }`}
        >
          {isProcessing ? 'Redirecting to payment...' : 'Pay $1 with Razorpay →'}
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Supports UPI, Cards, Netbanking (India) and International Cards
        </p>

        {/* Trust Badges */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            🔒 Secure payment processing via Razorpay. We don't store your payment information.
          </p>
        </div>

        {/* Guarantee */}
        <div className="mt-8 p-6 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl text-center">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Not satisfied?</strong> Email us within 7 days for a full refund. No questions asked.
          </p>
        </div>

        {/* What You Get Section */}
        <div className="mt-12 p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-white">After payment:</h3>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-[#3B82F6] font-bold">1.</span>
              <p>Instant email with download link for ZIP file containing all 150+ frameworks</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#3B82F6] font-bold">2.</span>
              <p>Installation instructions for Claude Code (~/.claude/skills/)</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#3B82F6] font-bold">3.</span>
              <p>Quick start guide to use frameworks with /command</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#3B82F6] font-bold">4.</span>
              <p>Free lifetime updates as we add more frameworks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
