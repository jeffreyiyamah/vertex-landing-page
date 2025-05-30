"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProgressIndicator } from "@/components/progress-indicator"
import { ScheduleStep } from "@/components/onboarding/schedule-step"
import { PaymentStep } from "@/components/onboarding/payment-step"
import { AccountStep } from "@/components/onboarding/account-step"
import { SuccessAnimation } from "@/components/onboarding/success-animation"
import { useRouter } from "next/navigation"

const STEPS = ["Schedule Onboarding", "Payment", "Create Account"]

export default function StartPilot() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isScheduled, setIsScheduled] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Load saved progress from localStorage
  useEffect(() => {
    const savedStep = localStorage.getItem("vertex-pilot-step")
    const savedScheduled = localStorage.getItem("vertex-pilot-scheduled")

    if (savedStep) {
      setCurrentStep(Number.parseInt(savedStep))
    }
    if (savedScheduled) {
      setIsScheduled(JSON.parse(savedScheduled))
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("vertex-pilot-step", currentStep.toString())
    localStorage.setItem("vertex-pilot-scheduled", JSON.stringify(isScheduled))
  }, [currentStep, isScheduled])

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (step: number) => {
    // Only allow clicking on current step or previous steps
    if (step <= currentStep) {
      setCurrentStep(step)
    }
  }

  const handleComplete = () => {
    setShowSuccess(true)
  }

  const handleSuccessComplete = () => {
    // Clear saved progress
    localStorage.removeItem("vertex-pilot-step")
    localStorage.removeItem("vertex-pilot-scheduled")

    // Redirect to homepage or dashboard
    router.push("/")
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <SuccessAnimation onComplete={handleSuccessComplete} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
              alt="Vertex Logo"
              className="w-10 h-10"
            />
            <span className="font-bold text-xl">Vertex</span>
          </Link>

          <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Start Your Vertex Pilot</h1>
            <p className="text-zinc-400">Get up and running with Vertex in just a few simple steps.</p>
          </div>

          <div className="flex justify-center mb-8">
            <ProgressIndicator currentStep={currentStep} steps={STEPS} onStepClick={handleStepClick} />
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 md:p-12">
            {currentStep === 1 && (
              <ScheduleStep onNext={handleNext} isScheduled={isScheduled} setIsScheduled={setIsScheduled} />
            )}

            {currentStep === 2 && <PaymentStep onNext={handleNext} />}

            {currentStep === 3 && <AccountStep onComplete={handleComplete} />}

            {/* Back Button */}
            {currentStep > 1 && (
              <div className="flex justify-center mt-8 pt-6 border-t border-zinc-800">
                <Button onClick={handleBack} variant="ghost" className="text-zinc-400 hover:text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {STEPS[currentStep - 2]}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
