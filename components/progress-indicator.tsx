"use client"

import { Check } from "lucide-react"

interface ProgressIndicatorProps {
  currentStep: number
  steps: string[]
  onStepClick?: (step: number) => void
}

export function ProgressIndicator({ currentStep, steps, onStepClick }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="relative">
        {/* Background line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-zinc-800"></div>
        
        {/* Progress line */}
        <div 
          className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-violet-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const stepNumber = index + 1
            const isActive = stepNumber === currentStep
            const isCompleted = stepNumber < currentStep
            const isClickable = stepNumber <= currentStep && onStepClick

            return (
              <div key={step} className="flex flex-col items-center group">
                <button
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-all duration-300 transform ${
                    isCompleted
                      ? "bg-gradient-to-r from-violet-500 to-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/30 scale-110"
                      : isActive
                        ? "border-violet-500 text-violet-400 bg-violet-500/10 backdrop-blur-sm scale-110 shadow-lg shadow-violet-500/20"
                        : "border-zinc-700 text-zinc-500 bg-zinc-900/50 backdrop-blur-sm"
                  } ${
                    isClickable
                      ? "hover:scale-105 hover:shadow-lg cursor-pointer"
                      : stepNumber > currentStep
                        ? "cursor-not-allowed opacity-60"
                        : ""
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <span>{stepNumber}</span>
                  )}
                  
                  {/* Pulse animation for active step */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-violet-400 animate-ping opacity-20"></div>
                  )}
                </button>

                <div className="mt-4 text-center max-w-[120px]">
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? "text-white" 
                        : isCompleted 
                          ? "text-violet-300" 
                          : "text-zinc-500"
                    }`}
                  >
                    {step}
                  </span>
                  
                  {/* Active step indicator */}
                  {isActive && (
                    <div className="mt-2 w-2 h-2 bg-violet-400 rounded-full mx-auto animate-pulse"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
