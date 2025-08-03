"use client";

import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

const ProjectsList = (props: Props) => {
  if (props.projects.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold">No Projects Yet</h2>
        <p className="text-muted-foreground">
          Click on the &quot;New Project&quot; button to get started.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 m-1 p-2 gap-2">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-2 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="30" className="w-full mt-4">
                  <iframe
                    src={project.url!}
                    className="h-48 md:h-64 w-[20rem] md:w-full rounded-xl group-hover/card:shadow-xl"
                    title={project.name!}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-6">
                  <CardItem
                    translateZ={10}
                    as={Link}
                    href={`/projects/${project.id}`}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    View Project
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.url!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Visit Site
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;