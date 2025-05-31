import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BookDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-zinc-900 text-white flex flex-col">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
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
      </header>

      <main className="container mx-auto px-4 py-12 flex-1">
        <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Book a Demo</h1>
          <p className="text-zinc-400 mb-8">
            Schedule a personalized demo with our team to see how Vertex can transform your security operations.
          </p>

          {/* Cal.com embed */}
          <div className="rounded-lg overflow-hidden border border-zinc-800 bg-black">
            <div className="aspect-[16/9] relative">
              {/* Cal.com mockup UI */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-4xl p-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-2">Quick chat</h3>
                      <p className="text-zinc-400 mb-4">30 minute meeting</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-zinc-700"></div>
                        <span className="text-sm text-zinc-400">Google Meet</span>
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
                          <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors">
                            9:00am
                          </button>
                          <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors">
                            9:30am
                          </button>
                          <button className="px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors">
                            12:00pm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actual Cal.com embed code would go here */}
              {/* 
              <div 
                className="w-full h-full"
                data-cal-link="vertex/demo"
                data-cal-config='{"layout":"month_view"}'
              ></div>
              <script src="https://cal.com/embed.js" async></script>
              */}
            </div>
          </div>

          <div className="mt-6 text-center text-zinc-500 text-sm">
            <p>
              Powered by <span className="text-zinc-300">Cal.com</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
