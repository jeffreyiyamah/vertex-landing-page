import Link from "next/link"
import { Shield, Clock, Database, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white flex flex-col">
      {/* Header Navigation - Truly Centered Version */}
<header className="container mx-auto px-4 py-6 relative">
  <div className="flex items-center justify-between">
    {/* Logo - Left Side */}
    <div className="flex items-center gap-3 flex-1">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
        alt="Vertex Logo"
        className="w-10 h-10"
      />
      <span className="text-xl">Vertex</span>
    </div>

    {/* Navigation - Absolutely Centered */}
    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
      <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
        Platform
      </Link>
      <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
        Integrations
      </Link>
      <Link href="/pricing" className="text-sm text-zinc-300 hover:text-white transition-colors">
        Pricing
      </Link>
      <Link href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
        Resources
      </Link>
    </nav>

    {/* Buttons - Right Side */}
    <div className="flex items-center gap-4 flex-1 justify-end">
      <Link href="/book-demo">
        <Button
          variant="outline"
          className="hidden sm:flex text-sm bg-black border-white text-white hover:bg-zinc-800"
        >
          Book Demo
        </Button>
      </Link>
      <Link href="/sign-in">
        <Button variant="ghost" className="text-sm text-zinc-300 hover:text-white">
          Get Started <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
</header>

      <div className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              NEW: Integration with CloudTrail Event Logs →
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Security Brain for Incident Response
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 mb-6">
              Intelligence that grows smarter with every incident
            </p>
            <p className="text-zinc-400 mb-10 max-w-2xl mx-auto">
              Instantly know what happened, when, and why — without a SOC or SIEM. Your logs. Our brain. Real answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-pilot">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6">Start Pilot</Button>
              </Link>
              <Link href="/book-demo">
                <Button
                  variant="outline"
                  className="bg-black border-white text-white hover:bg-zinc-800 hover:text-white px-8 py-6"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Built for modern security teams</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-violet-400" />
                </div>
                <p className="text-zinc-300">Human Readable Incident timelines</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-violet-400" />
                </div>
                <p className="text-zinc-300">Context Aware summaries in Plain English</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-violet-400" />
                </div>
                <p className="text-zinc-300">Works with your existing stack</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Using direct URL instead of local image reference */}
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0SajKarUkqgGKibpvUhfTijbmr05XL.png"
                alt="Vertex Dashboard Preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 border-t border-zinc-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-white">
                  How does Vertex detect security incidents?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Vertex uses advanced AI models to analyze your logs and security data in real-time. Our system
                  identifies patterns, anomalies, and known attack signatures to detect incidents as they happen,
                  providing immediate alerts and detailed analysis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-white">
                  What integrations does Vertex support?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Vertex integrates with most common cloud platforms (AWS, Azure, GCP), security tools (Crowdstrike,
                  SentinelOne, CarbonBlack), and log sources (CloudTrail, Cloudflare, Okta, etc). We also offer an API
                  for custom integrations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-white">
                  How long does it take to set up Vertex?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Most customers are up and running in less than 30 minutes. Our onboarding process guides you through
                  connecting your log sources, and our system begins analyzing data immediately. You'll start receiving
                  insights within the first hour.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-white">
                  Is Vertex suitable for small teams?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Vertex is specifically designed for lean teams without dedicated security operations centers. Our
                  AI-powered analysis provides enterprise-grade security insights without requiring a large security
                  team to interpret the data.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-zinc-800">
                <AccordionTrigger className="text-left hover:text-white">How does pricing work?</AccordionTrigger>
                <AccordionContent className="text-zinc-400">
                  Vertex offers simple, transparent pricing based on the volume of data analyzed. We provide a Pilot
                  plan to get started, followed by Starter and Growth plans as your needs expand. Visit our{" "}
                  <Link href="/pricing" className="text-violet-400 hover:underline">
                    pricing page
                  </Link>{" "}
                  for details.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Social Proof */}
        <section className="container mx-auto px-4 py-16 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-12">Trusted by security teams at</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
              {/* Twitch Logo */}
              <div className="flex items-center justify-center">
                <svg className="h-8 w-auto text-zinc-400" viewBox="0 0 256 268" fill="currentColor">
                  <path d="M17.458 0L0 46.556v186.201h63.983v34.934h34.931l34.898-34.934h52.36L256 162.954V0H17.458zm23.259 23.263H232.73v128.029l-40.739 40.741H128L93.113 226.92v-34.887H40.717V23.263zm64.008 116.405H128V69.844h-23.275v69.824zm63.997 0h23.27V69.844h-23.27v69.824z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your security operations?</h2>
            <p className="text-zinc-400 mb-8">
              Join forward-thinking security teams who are detecting and responding to incidents in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-pilot">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6">Start Pilot</Button>
              </Link>
              <Link href="/book-demo">
                <Button
                  variant="outline"
                  className="bg-black border-white text-white hover:bg-zinc-800 hover:text-white px-8 py-6"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 py-16 border-t border-zinc-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-zinc-400 mb-8">Dealing with slow security incident response? Let me show you how Vertex can help.</p>
            <a
              href="mailto:jeff@tryvertex.dev"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              jeff@tryvertex.dev
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-zinc-800 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertex-icon-j5X4RMgAhp4DxGgsa5lfsrm2gWKCZ2.png"
        alt="Vertex Logo"
        className="w-10 h-10"
      />
      <span className=" text-xl">Vertex</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/book-demo" className="hover:text-white transition-colors">
              Book A Demo
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
