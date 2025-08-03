import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="p-4 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Skeleton className="h-8 w-48 rounded-md" />
        </div>
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 m-1 p-2 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-card text-card-foreground shadow p-2">
            <div className="flex flex-col space-y-3 p-4">
              <Skeleton className="h-5 w-3/5 rounded-md" />
              <Skeleton className="h-4 w-4/5 rounded-md" />
              <Skeleton className="h-48 md:h-64 w-full rounded-xl mt-4" />
              <div className="flex justify-between items-center mt-6">
                <Skeleton className="h-9 w-24 rounded-md" />
                <Skeleton className="h-9 w-24 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}