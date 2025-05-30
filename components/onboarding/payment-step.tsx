"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PaymentStepProps {
  onNext: () => void
}

export function PaymentStep({ onNext }: PaymentStepProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const handlePayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setPaymentComplete(true)
    setIsProcessing(false)

    // Auto-advance after successful payment
    setTimeout(() => {
      onNext()
    }, 1500)
  }

  if (paymentComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-zinc-400">Proceeding to account creation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure Your Pilot</h2>
        <div className="text-4xl font-bold text-violet-400 mb-2">$500</div>
        <p className="text-zinc-400 mb-6">One-time pilot fee</p>
        <div className="bg-violet-500/10 border border-violet-500/20 rounded-lg p-4 mb-6">
          <p className="text-violet-300 text-sm">
            ✓ Credited toward your first month if you subscribe
            <br />✓ Fully refundable if we don't deliver measurable ROI
          </p>
        </div>
      </div>

      {/* Mock Stripe-style payment form */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>

          <div>
            <Label htmlFor="card" className="text-sm font-medium text-zinc-300">
              Card information
            </Label>
            <div className="space-y-2">
              <Input id="card" placeholder="1234 1234 1234 1234" className="bg-zinc-800 border-zinc-700 text-white" />
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="MM / YY" className="bg-zinc-800 border-zinc-700 text-white" />
                <Input placeholder="CVC" className="bg-zinc-800 border-zinc-700 text-white" />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
              Cardholder name
            </Label>
            <Input id="name" placeholder="Full name on card" className="bg-zinc-800 border-zinc-700 text-white" />
          </div>

          <div>
            <Label htmlFor="country" className="text-sm font-medium text-zinc-300">
              Country or region
            </Label>
            <select className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={handlePayment}
          disabled={isProcessing}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Complete Payment"}
        </Button>
        <p className="text-xs text-zinc-500 mt-2">
          Secured by Stripe • Your payment information is encrypted and secure
        </p>
      </div>
    </div>
  )
}
