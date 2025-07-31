import CopyBtn from "@/components/copy-btn";

// Define the correct page props type for Next.js App Router
type PageProps = {
  params: { 
    projectId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Convert to a proper Next.js page component
export default function Page({ params }: PageProps) {
  if (!params.projectId) return (<div>Invalid Project ID</div>);
  if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

  const embedCode = `<my-widget project-id="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">Embed the code in your site</p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className="text-white block whitespace-pre-wrap">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          {'\n'}
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn text={embedCode} />
      </div>
    </div>
  );
}