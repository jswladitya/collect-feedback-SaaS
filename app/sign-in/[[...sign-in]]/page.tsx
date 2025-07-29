import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">

        {/* Clerk SignIn component */}
        <SignIn
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "shadow-none",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
            }
          }}
        />
      </div>
    </div>
  ) 
}