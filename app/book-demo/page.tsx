"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function BookDemo() {
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false)
  const [countdown, setCountdown] = useState(3)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const success = searchParams.get('success')
    const booking = searchParams.get('booking')
    const event = searchParams.get('event')
    
    if (success === 'true' || booking === 'confirmed' || event === 'booking_confirmed') {
      setShowSuccessOverlay(true)
      
      let timeLeft = 3
      const timer = setInterval(() => {
        timeLeft -= 1
        setCountdown(timeLeft)
        
        if (timeLeft === 0) {
          clearInterval(timer)
          router.push('/')
        }
      }, 1000)
      
      return () => clearInterval(timer)
    }
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white flex flex-col relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Success Overlay - SLEEKER VERSION */}
      {showSuccessOverlay && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            {/* Animated Purple Circle with Checkmark */}
            <div className="relative mb-12 flex justify-center">
              {/* Outer pulsing rings */}
              <div className="absolute w-40 h-40 border border-violet-500/20 rounded-full animate-ping"></div>
              <div className="absolute w-32 h-32 border-2 border-violet-400/30 rounded-full animate-pulse"></div>
              
              {/* Main circle */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-violet-500 via-violet-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/40 transform animate-bounce">
                {/* Checkmark */}
                <Check className="w-12 h-12 text-white" strokeWidth={3} />
                
                {/* Inner glow */}
                <div className="absolute inset-1 bg-white/10 rounded-full animate-pulse"></div>
              </div>
              
              {/* Rotating outer ring */}
              <div className="absolute w-36 h-36 border-t-2 border-violet-400/40 rounded-full animate-spin" style={{animationDuration: '2s'}}></div>
            </div>

            {/* Success message */}
            <div className="mb-10 space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-violet-100 to-violet-200 bg-clip-text text-transparent leading-tight">
                Demo Scheduled!
              </h2>
              <div className="space-y-2">
                <p className="text-xl text-zinc-300 font-medium">
                  Perfect! We're all set.
                </p>
                <p className="text-lg text-zinc-400">
                  Check your email for the calendar invitation
                </p>
              </div>
              <div className="flex items-center justify-center gap-2 text-violet-300 mt-6">
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">
                  Redirecting in {countdown} seconds
                </p>
              </div>
            </div>

            {/* Sleeker progress bar */}
            <div className="relative">
              <div className="w-80 h-1 bg-zinc-800/60 rounded-full mx-auto overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 via-violet-400 to-purple-500 rounded-full transition-all duration-1000 ease-in-out shadow-lg shadow-violet-500/30"
                  style={{ width: `${100 - (countdown / 3) * 100}%` }}
                ></div>
              </div>
              {/* Progress dots */}
              <div className="flex justify-between absolute -top-2 left-0 right-0 px-1">
                {[0, 1, 2].map((i) => (
                  <div 
                    key={i}
                    className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      i <= (3 - countdown) ? 'bg-violet-400 scale-150' : 'bg-zinc-600'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <header className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
              alt="Vertex Logo"
              className="w-10 h-10 transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl">Vertex</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 flex-1 relative z-10">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Schedule a Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-zinc-300 bg-clip-text text-transparent leading-tight">
              See Vertex in Action
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to see how Vertex can transform your security operations.
            </p>
          </div>

          {/* Cal.com embed */}
          <div className="bg-zinc-900/20 border border-zinc-800/50 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl mb-8">
            <div className="p-1">
              <iframe
                src="https://cal.com/vertex-team/30min?embed=true&theme=dark"
                width="100%"
                height="700"
                frameBorder="0"
                className="rounded-2xl bg-zinc-900"
                title="Book a demo with Vertex"
              ></iframe>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center">
            <p className="text-sm text-zinc-500">
              Powered by <span className="text-zinc-300 font-medium">Cal.com</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
