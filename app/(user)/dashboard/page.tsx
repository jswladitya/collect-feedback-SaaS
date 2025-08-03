import NewProjBtn from "@/components/new-proj"
import { db } from "@/db";
import { projects } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ProjectsList from "./project-list";

export default async function Page() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const userProjects = await db.select().from(projects).where(eq(projects.userId, userId));

  return (
    <main className="p-4">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">My Projects</h1>
        </div>
        <NewProjBtn />
      </div>
      <ProjectsList projects={userProjects} />
    </main>
  )
}