import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

import PageIllustration from "@/components/page-illustration";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), "docs", "Terms Conditions.md");
  const markdown = await fs.promises.readFile(filePath, "utf8");

  return (
    <>
      <Header />

      {/* Decorative illustration for consistency */}
      <PageIllustration />

      {/* Hero header */}
      <header className="relative mx-auto max-w-4xl px-4 pt-32 text-center md:pt-40">
        <h1 className="mb-6 border-y text-4xl font-bold md:text-5xl [border-image:linear-gradient(to_right,transparent,rgba(203,213,225,0.8),transparent)1]">
          Terms & Conditions
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Please read these Terms & Conditions carefully before using our services.
        </p>
      </header>

      {/* Markdown content */}
      <section className="prose prose-slate mx-auto max-w-4xl px-4 py-16 dark:prose-invert md:px-6 lg:px-8">
        <ReactMarkdown
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="mt-12 border-l-4 border-blue-500 pl-4 text-2xl font-semibold text-gray-900" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-blue-600 hover:underline" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc space-y-2 pl-6" {...props} />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </section>

      <Footer border={true} />
    </>
  );
}