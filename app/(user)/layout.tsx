import Loading from "./Loading";
import { Suspense } from "react";
import Link from "next/link";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="bg-white backdrop-blur-lg border-b border-gray-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-medium tracking-tight text-zinc-900"
            >
              Get Feedbacks
            </Link>

            {/* Desktop links only */}
            <nav className="flex items-center space-x-3">
              <Link
                href="/pricing"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition"
              >
                Pricing
              </Link>
              <UserButton />
          
                <SignOutButton>
                  <Button className="text-sm font-semibold">
                    Sign Out
                  </Button>
                </SignOutButton>
          
            </nav>
          </div>
        </div>
      </header>
      <Suspense fallback={<Loading />}>
      <div className="p-3 md:p-15">
      {children}
      </div>
      </Suspense>
    </div>
  );
}
