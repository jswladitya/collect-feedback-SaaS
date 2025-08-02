"use client";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { VideoHero } from "@/components/VideoHero";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white text-neutral-800 antialiased">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-5 backdrop-blur-lg border-white/100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-serif tracking-tight text-neutral-900"
            >
              Get Feedback
            </Link>

            {/* Main CTA Button */}
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-900 text-white hover:bg-neutral-700 hover:text-slate-100 active:bg-neutral-800 active:text-slate-300 focus-visible:outline-neutral-900 transition-colors duration-200"
              >
                <SignedOut>
                  <SignInButton>Get Started</SignInButton>
                </SignedOut>
                <SignedIn>
                  <span>Dashboard</span>
                  <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </SignedIn>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative isolate overflow-hidden">
        {/* Subtle background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square"
            style={{
              clipPath: "circle(50% at 50% 0)",
            }}
          />
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="py-18 sm:py-32">
          <div className="max-w-6xl mx-auto px-3 lg:px-12 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tight text-neutral-900 leading-tight font-serif font-medium">
              Collect Feedback,
              <br />
              <span className="text-orange-700">
                Directly from your visitors.
              </span>
            </h1>
            <div className="mt-5 flex items-center justify-center">
              <Link href="/dashboard">
                <Button className="flex items-center gap-2 group">
                  Get started
                  <ArrowRight className="inline-block w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== VIDEO HERO SECTION ===== */}
        <section className="pb-12 sm:pb-24 mt-10">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            {/* The negative margin pulls the video up for a more dynamic layout */}
            <div className="mt-[-4rem] sm:mt-[-8rem] p-1.5 bg-gradient-to-br from-orange-200 via-orange-200 to-orange-200 rounded-2xl shadow-2xl shadow-neutral-900/10">
              <div className="bg-neutral-800 rounded-xl overflow-hidden">
                {/* Your VideoHero component will be rendered here */}
                <VideoHero />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== MINIMAL FOOTER ===== */}
      <footer className="bg-neutral-50 border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Get Feedback Inc. All rights
              reserved.
            </p>
            <div className="flex items-center gap-x-6">
              <Link
                href="/pricing"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
