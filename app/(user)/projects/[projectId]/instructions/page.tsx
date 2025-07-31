
import CopyBtn from "@/components/copy-btn";

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

  const widgetCode = `<my-widget project-id="${projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">Embed the code in your site</p>

      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className="text-white whitespace-pre-line">
          {widgetCode}
        </code>
        <CopyBtn text={widgetCode} />
      </div>
    </div>
  );
};

export default ProjectInstructionsPage;
