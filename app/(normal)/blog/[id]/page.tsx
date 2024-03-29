import { documents } from "@/app/source";

import { MDXLink } from "@/components/mdxlink";
import { cn } from "@/lib/cn";
import { notFound } from "next/navigation";
import { Date } from "./page.client";
import React from "react";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

function page({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === params.id);
  if (!document) notFound();
  return (
    <>
      <article className="prose prose-sm prose-invert text-neutral-400 prose-li:marker:text-neutral-300">
        <document.renderer
          components={{
            a: MDXLink,
            pre: ({ className, style: _style, ...props }) => (
              <pre
                className={cn(
                  "text-sm p-2 bg-neutral-900 border border-neutral-800 rounded-lg max-h-[500px] overflow-auto",
                  className
                )}
                {...props}
              >
                {props.children}
              </pre>
            ),
          }}
        />
      </article>

      <p className="mt-8 text-sm">
        <span className="font-medium mr-1">Last Updated:</span>
        <Date className="text-neutral-400" value={document.info.date} />
      </p>
      <footer className="flex flex-row items-end justify-between bg-neutral-900 border border-neutral-800 rounded-xl p-4 mt-4">
        <div>
          <p className="text-sm font-medium text">Manish Kumar</p>
          <p className="text-sm text-neutral-400">A Human Developer.</p>
        </div>
        <Link
          href="/blog"
          className="text-xs rounded-md px-2 py-1.5 border border-neutral-700 bg-neutral-800 font-medium transition-colors hover:bg-neutral-700"
        >
          Back to blog
        </Link>
      </footer>
    </>
  );
}

export default page;
export function generateStaticParams() {
  return documents.map((d) => ({
    id: d.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const document = documents.find((d) => d.id === params.id);
  if (!document) notFound();

  return createMetadata({
    title: document.info.title,
    description: document.info.description,
    openGraph: {
      type: "article",
      authors: "Fuma Nama",
      modifiedTime: document.info.date.toISOString(),
    },
  });
}
