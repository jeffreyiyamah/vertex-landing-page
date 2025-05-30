"use client"

import type React from "react"

import { useState } from "react"
import { X, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sign in
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    onClose()
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)

    // Simulate Google sign in
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    onClose()
  }

  const handleGitHubSignIn = async () => {
    setIsLoading(true)

    // Simulate GitHub sign in
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-8 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
              alt="Vertex Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg text-white">Vertex</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back</h2>
          <p className="text-zinc-400">Sign in to your account</p>
        </div>

        {/* Social Sign In Options */}
        <div className="space-y-3 mb-6">
          <Button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            variant="outline"
            className="w-full bg-white hover:bg-gray-100 text-black border-gray-300 py-3"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          <Button
            onClick={handleGitHubSignIn}
            disabled={isLoading}
            variant="outline"
            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-600 py-3"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Continue with GitHub
          </Button>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-zinc-900 text-zinc-400">Or continue with email</span>
          </div>
        </div>

        {/* Email Sign In Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="modal-email" className="text-sm font-medium text-zinc-300">
              Email
            </Label>
            <Input
              id="modal-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="bg-zinc-800 border-zinc-700 text-white mt-1"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <Label htmlFor="modal-password" className="text-sm font-medium text-zinc-300">
              Password
            </Label>
            <div className="relative mt-1">
              <Input
                id="modal-password"
                type={showPassword ? "text" : "password"}
                required
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                className="bg-zinc-800 border-zinc-700 text-white pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-zinc-600 bg-zinc-800 text-violet-600 focus:ring-violet-500"
              />
              <span className="ml-2 text-sm text-zinc-400">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm text-violet-400 hover:text-violet-300">
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-zinc-400">
            Don't have an account?{" "}
            <button
              onClick={() => {
                onClose()
                // Navigate to sign up
                window.location.href = "/start-pilot"
              }}
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              Start your pilot
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
