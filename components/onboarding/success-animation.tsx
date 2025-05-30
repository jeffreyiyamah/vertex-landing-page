"use client"

import { useEffect, useState } from "react"

interface SuccessAnimationProps {
  onComplete: () => void
}

export function SuccessAnimation({ onComplete }: SuccessAnimationProps) {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 500)
    const timer2 = setTimeout(() => onComplete(), 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        {/* Animated checkmark */}
        <div className="w-24 h-24 bg-violet-500/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <svg className="w-12 h-12 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {showMessage && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">You're in!</h2>
            <p className="text-xl text-zinc-400 mb-6">We'll see you at your onboarding session.</p>
            <p className="text-zinc-500">Until then, you can explore the product or upload more logs.</p>

            <div className="mt-8 text-sm text-zinc-400">Redirecting you to the dashboard in a few seconds...</div>
          </div>
        )}
      </div>
    </div>
  )
}
