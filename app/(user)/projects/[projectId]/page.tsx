import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { ChevronLeft, Code } from 'lucide-react';
import Table from "@/components/table";


const page = async ({ params }: {
  params: {
    projectId: string
  }
}) => {
  if (!params.projectId) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg text-gray-500">Invalid Project ID</p>
    </div>
  );

  const projects = await db.query.projects.findMany({
    where: (eq(dbProjects.id, parseInt(params.projectId))),
    with: {
      feedbacks: true
    }
  });

  const project = projects[0];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Project not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to projects
        </Link>
      </div>

      <div className="md:flex md:items-center md:justify-between pb-6 border-b border-gray-200">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.name}</h1>
          <p className="mt-2 text-xl text-gray-500">{project.description}</p>
        </div>
        <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <Link href={`/projects/${params.projectId}/instructions`} className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Code className="h-5 w-5 mr-2" />
            Embed Code
          </Link>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback Received</h2>
        <div className="overflow-hidden sm:rounded-lg">
          {project.feedbacks && project.feedbacks.length > 0 ? (
            <Table data={project.feedbacks} />
          ) : (
            <div className="p-6 text-center text-gray-500">
              <p>No feedback has been collected for this project yet.</p>
              <p className="mt-2 text-sm">Embed the widget on your site to start collecting feedback.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default page;