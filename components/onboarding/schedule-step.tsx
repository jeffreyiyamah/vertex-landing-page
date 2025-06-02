"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SignInModal } from "@/components/sign-in-modal"
import { Check } from "lucide-react"

interface ScheduleStepProps {
  onNext: () => void
  isScheduled: boolean
  setIsScheduled: (scheduled: boolean) => void
}

export function ScheduleStep({ onNext, isScheduled, setIsScheduled }: ScheduleStepProps) {
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Schedule Your Onboarding Call
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Start your pilot with a 15-minute onboarding call. We'll help you upload your first logs and define success metrics.
          </p>
        </div>

        {/* Success indicator when scheduled */}
        {isScheduled && (
          <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/30 rounded-2xl p-6 backdrop-blur-sm shadow-xl mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-violet-300">Successfully Scheduled!</span>
            </div>
            <p className="text-sm text-violet-200/80 leading-relaxed">
              Your onboarding call is confirmed. Check your email for the calendar invite and meeting details.
            </p>
          </div>
        )}

        {/* Cal.com Embed - Full Width */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="p-1">
              <iframe
                src="https://cal.com/vertex-team/15min?embed=true&theme=dark"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-xl bg-zinc-900"
                title="Schedule Vertex Onboarding Call"
                onLoad={() => {
                  // Simple way to detect if user scheduled
                  const checkScheduled = () => {
                    const urlParams = new URLSearchParams(window.location.search);
                    if (urlParams.get('booking') === 'success') {
                      setIsScheduled(true);
                    }
                  };
                  
                  setTimeout(checkScheduled, 2000);
                }}
              ></iframe>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-6">
          <Button
            onClick={onNext}
            disabled={!isScheduled}
            className="relative bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-violet-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 border border-violet-500/30"
          >
            <span className="relative z-10">
              {isScheduled ? "Continue to Payment" : "Schedule Call to Continue"}
            </span>
            {!isScheduled && (
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-violet-700/50 rounded-xl animate-pulse"></div>
            )}
          </Button>

          {/* Sign in option */}
          <div className="text-center">
            <button
              onClick={() => setShowSignInModal(true)}
              className="text-sm text-zinc-400 hover:text-violet-300 transition-colors underline underline-offset-4 decoration-zinc-600 hover:decoration-violet-400"
            >
              Already have an account? Sign in
            </button>
          </div>
        </div>
      </div>

      <SignInModal isOpen={showSignInModal} onClose={() => setShowSignInModal(false)} />
    </>
  )
}
