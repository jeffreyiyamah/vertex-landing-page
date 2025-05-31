import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white flex flex-col">
      {/* Header Navigation */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
                alt="Vertex Logo"
                className="w-10 h-10"
              />
              <span className="font-bold text-xl">Vertex</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
            Platform
          </Link>
          <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
            Integrations
          </Link>
          <Link href="/pricing" className="text-sm text-white hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
            Resources
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/book-demo">
            <Button
              variant="outline"
              className="hidden sm:flex text-sm bg-black border-white text-white hover:bg-zinc-800"
            >
              Book Demo
            </Button>
          </Link>
          <Link href="/start-pilot">
            <Button variant="ghost" className="text-sm text-zinc-300 hover:text-white">
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <div className="flex-1">
        {/* Pricing Header */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h1>
            <p className="text-xl text-zinc-400 mb-4">Choose the plan that's right for your security needs</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pilot Plan */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2">Pilot Plan</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-bold">$500</span>
                  <span className="text-zinc-400 mb-1">one-time</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6">
                  Try Vertex with your own data and see the value before committing to a subscription.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>10 incidents</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Kickoff call</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Success review</span>
                  </div>
                </div>
                <div className="text-sm text-zinc-400 mb-6">
                  Credited toward first month if you subscribe. Refundable if no ROI.
                </div>
                <Link href="/start-pilot" className="block">
                  <Button className="w-full bg-black border border-white text-white hover:bg-zinc-800">
                    Start Pilot
                  </Button>
                </Link>
              </div>
            </div>

            {/* Starter Plan */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2">Starter Plan</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-bold">$199</span>
                  <span className="text-zinc-400 mb-1">/month</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6">
                  Perfect for small teams getting started with security incident response.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>25 incidents/month</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>RCA timeline</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Slack alerts</span>
                  </div>
                </div>
                <div className="text-sm text-zinc-400 mb-6">&nbsp;</div>
                <Button className="w-full bg-zinc-800 text-zinc-400 cursor-not-allowed" disabled>
                  Upgrade
                  <span className="text-xs ml-2">(after pilot)</span>
                </Button>
              </div>
            </div>

            {/* Growth Plan */}
            <div className="bg-zinc-900 border-2 border-violet-500 rounded-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-violet-500 text-xs font-medium py-1 px-3 rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-medium mb-2">Growth Plan</h3>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-zinc-400 mb-1">/month</span>
                </div>
                <p className="text-zinc-400 text-sm mb-6">
                  For growing teams that need more capacity and advanced features.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>150 incidents/month</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>CSV export</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>API access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-violet-400 mt-0.5 shrink-0" />
                    <span>Priority support</span>
                  </div>
                </div>
                <Link href="/book-demo" className="block">
                  <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Book Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Strip */}
        <section className="container mx-auto px-4 py-16 border-t border-zinc-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to try it?</h2>
            <div className="mb-8">
              <Link href="/start-pilot">
                <Button className="bg-black border border-white text-white hover:bg-zinc-800 px-8 py-6">
                  Start Pilot
                </Button>
              </Link>
            </div>
            <p className="text-zinc-400">
              Still have questions?{" "}
              <Link href="/book-demo" className="text-violet-400 hover:text-violet-300 underline">
                Book a call
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 border-t border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-2">What counts as an "incident"?</h3>
                <p className="text-zinc-400">
                  An incident is any security event that Vertex analyzes and provides insights on. This could be a
                  failed login attempt, unusual API activity, or any other security-related event that requires
                  investigation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-zinc-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your
                  next billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What happens if I exceed my incident limit?</h3>
                <p className="text-zinc-400">
                  If you exceed your monthly incident limit, you'll be notified and have the option to upgrade to a
                  higher tier or purchase additional incidents at a per-incident rate.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Is there a contract or commitment?</h3>
                <p className="text-zinc-400">
                  No long-term contracts required. All plans are month-to-month and you can cancel anytime. The Pilot
                  plan is a one-time payment with no recurring charges.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-zinc-800 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-bold text-lg">Vertex</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
