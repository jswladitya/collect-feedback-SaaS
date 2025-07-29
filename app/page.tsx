import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-medium tracking-tight text-zinc-900">
            Get Feedbacks
          </Link>

          {/* Desktop links only */}
          <nav className="flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition">
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-white bg-zinc-900 px-5 py-2 rounded-full hover:bg-zinc-800 transition"
            >
              <SignedOut>
                <SignInButton>
                  Sign In
                </SignInButton>
              </SignedOut>

              <SignedIn>
                Dashboard
              </SignedIn>
            </Link>
          </nav>
        </div>
      </div>
    </header>
    <main className="relative isolate bg-white px-4 md:px-6 lg:px-8 py-20 md:py-26">
      {/* Subtle watermark */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] opacity-[0.03]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0C100 55.2 144.8 100 200 100C144.8 100 100 144.8 100 200C100 144.8 55.2 100 0 100C55.2 100 100 55.2 100 0Z"
            fill="#A78BFA"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-5">
          {/* Customer Stats */}
          <div className="hidden items-center gap-3 text-sm font-medium text-zinc-500">
            <div className="flex -space-x-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-zinc-200 to-zinc-300 backdrop-blur-sm shadow-sm"
                />
              ))}
            </div>
            <span>
              <span className="font-semibold text-zinc-900">1K+</span> Happy clients
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-zinc-900 max-w-3xl">
          Collect feedbacks directly from your visitors
          </h1>

          {/* CTA Button */}
          <Link
            href="#"
            className="group inline-flex items-center justify-center rounded-full bg-amber-500 text-white font-semibold py-1 px-4 text-lg shadow-lg shadow-amber-500/20 transition-all duration-300 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-600/30 active:scale-95"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="ml-2 w-3 md:w-5 h-3 md:h-3 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}