"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { SignInModal } from "@/components/sign-in-modal"

interface ScheduleStepProps {
  onNext: () => void
  isScheduled: boolean
  setIsScheduled: (scheduled: boolean) => void
}

export function ScheduleStep({ onNext, isScheduled, setIsScheduled }: ScheduleStepProps) {
  const [showSignInModal, setShowSignInModal] = useState(false)

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Schedule Your Onboarding Call</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Start your pilot with a 15-minute onboarding call. We'll help you upload your first logs and define success
            metrics.
          </p>
        </div>

        {/* Cal.com embed mockup for pilot onboarding */}
        <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 mb-8">
          <div className="aspect-[16/9] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-4xl p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2">Pilot Onboarding</h3>
                    <p className="text-zinc-400 mb-4">15 minute kickoff call</p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-zinc-700"></div>
                      <span className="text-sm text-zinc-400">Google Meet</span>
                    </div>
                    <div className="text-sm text-zinc-400">
                      <p>What we'll cover:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Connect your first log source</li>
                        <li>Define success metrics</li>
                        <li>Set up your first incident</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-medium">May 2025</h3>
                    </div>
                    <div className="grid grid-cols-7 gap-1 mb-6 text-center">
                      <div className="text-xs text-zinc-500">SUN</div>
                      <div className="text-xs text-zinc-500">MON</div>
                      <div className="text-xs text-zinc-500">TUE</div>
                      <div className="text-xs text-zinc-500">WED</div>
                      <div className="text-xs text-zinc-500">THU</div>
                      <div className="text-xs text-zinc-500">FRI</div>
                      <div className="text-xs text-zinc-500">SAT</div>
                    </div>
                    <div className="flex justify-center gap-3">
                      <div className="flex flex-col gap-3">
                        <button
                          className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md hover:bg-zinc-700 transition-colors"
                          onClick={() => setIsScheduled(true)}
                        >
                          9:00am
                        </button>
                        <button
                          className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md hover:bg-zinc-700 transition-colors"
                          onClick={() => setIsScheduled(true)}
                        >
                          2:00pm
                        </button>
                        <button
                          className="px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-md hover:bg-zinc-700 transition-colors"
                          onClick={() => setIsScheduled(true)}
                        >
                          4:30pm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isScheduled && (
          <div className="text-center mb-6 p-4 bg-violet-500/10 border border-violet-500/20 rounded-lg">
            <p className="text-violet-300">✓ Onboarding call scheduled for May 30, 2025 at 2:00pm</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={onNext}
            disabled={!isScheduled}
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </Button>

          <div className="text-center">
            <button
              onClick={() => setShowSignInModal(true)}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
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
