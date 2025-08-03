
import { CodeBlock } from "@/components/ui/code-block";


// ✅ Next.js App Router compatible props
interface PageProps {
  params: { projectId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const ProjectInstructionsPage = async ({ params }: PageProps) => {
  const { projectId } = params;

  if (!projectId) {
    return <div>Invalid Project ID</div>;
  }

  if (!process.env.WIDGET_URL) {
    return <div>Missing WIDGET_URL</div>;
  }



  const code = `
  import Script from "next/script";

  return (
      <html lang="en">
        <body>
        <Script
          src="${process.env.WIDGET_URL}/widget.umd.js"
          strategy="afterInteractive"
        />
         <my-widget project-id="${projectId}"></my-widget>
          {children}
        </body>
      </html>
  );
`;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Embed the highlighted code in your site</h1>

      <div className="rounded-md mt-6 relative">
        <CodeBlock
          language="jsx"
          filename="layout/page.tsx"
          highlightLines={[7, 8, 9, 10, 11]}
          code={code}
        />
      </div>
    </div>
  );
};

export default ProjectInstructionsPage;


