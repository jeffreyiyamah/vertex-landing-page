"use client"

interface ProgressIndicatorProps {
  currentStep: number
  steps: string[]
  onStepClick?: (step: number) => void
}

export function ProgressIndicator({ currentStep, steps, onStepClick }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep
          const isClickable = stepNumber <= currentStep && onStepClick

          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <button
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                    isCompleted
                      ? "bg-violet-600 border-violet-600 text-white"
                      : isActive
                        ? "border-violet-600 text-violet-600 bg-transparent"
                        : "border-zinc-600 text-zinc-400 bg-transparent"
                  } ${
                    isClickable
                      ? "hover:bg-violet-700 hover:border-violet-700 cursor-pointer"
                      : stepNumber > currentStep
                        ? "cursor-not-allowed"
                        : ""
                  }`}
                >
                  {stepNumber}
                </button>
                <span
                  className={`mt-2 text-xs text-center ${
                    isActive ? "text-white" : isCompleted ? "text-violet-400" : "text-zinc-500"
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-4 transition-colors ${isCompleted ? "bg-violet-600" : "bg-zinc-700"}`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
