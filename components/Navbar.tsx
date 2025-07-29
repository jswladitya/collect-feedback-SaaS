// components/Navbar.tsx
"use client";

import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
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
  );
};

export default Navbar;