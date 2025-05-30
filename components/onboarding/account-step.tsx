"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AccountStepProps {
  onComplete: () => void
}

export function AccountStep({ onComplete }: AccountStepProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    logFile: null as File | null,
    logUrl: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate account creation
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    onComplete()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, logFile: file }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Your Account</h2>
        <p className="text-zinc-400">
          Set up your Vertex account and optionally upload your first log file to get started.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-zinc-300">
              Full Name *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="company" className="text-sm font-medium text-zinc-300">
              Company Name *
            </Label>
            <Input
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              className="bg-zinc-800 border-zinc-700 text-white"
              placeholder="Acme Corp"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-zinc-300">
            Work Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            className="bg-zinc-800 border-zinc-700 text-white"
            placeholder="john@acme.com"
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-sm font-medium text-zinc-300">
            Password *
          </Label>
          <Input
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
            className="bg-zinc-800 border-zinc-700 text-white"
            placeholder="Create a secure password"
          />
        </div>

        <div className="border-t border-zinc-800 pt-6">
          <h3 className="text-lg font-medium mb-4">Optional: Upload Your First Log</h3>
          <p className="text-sm text-zinc-400 mb-4">
            Get a head start by uploading a log file or providing a log URL. We'll analyze it during your onboarding
            call.
          </p>

          <div className="space-y-4">
            <div>
              <Label htmlFor="logFile" className="text-sm font-medium text-zinc-300">
                Upload Log File
              </Label>
              <input
                id="logFile"
                type="file"
                accept=".log,.txt,.json,.csv"
                onChange={handleFileChange}
                className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:bg-violet-600 file:text-white file:text-sm hover:file:bg-violet-700"
              />
              {formData.logFile && <p className="text-sm text-violet-400 mt-1">✓ {formData.logFile.name}</p>}
            </div>

            <div className="text-center text-zinc-500">or</div>

            <div>
              <Label htmlFor="logUrl" className="text-sm font-medium text-zinc-300">
                Log URL
              </Label>
              <Input
                id="logUrl"
                value={formData.logUrl}
                onChange={(e) => setFormData((prev) => ({ ...prev, logUrl: e.target.value }))}
                className="bg-zinc-800 border-zinc-700 text-white"
                placeholder="https://your-logs.example.com/access.log"
              />
            </div>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 disabled:opacity-50"
          >
            {isSubmitting ? "Creating Account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </div>
  )
}
