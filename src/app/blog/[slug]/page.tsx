import { allPosts } from "@/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allPosts.paths().map((pathname) => ({ slug: pathname }));
}
type Props = { params: { slug: string[] } };

export default async function Page({ params }: Props) {
  const doc = await allPosts.get(params.slug);

  if (!doc) {
    return notFound();
  }

  const { Content, frontMatter } = doc;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  }).format(frontMatter.date);

  return <>{Content ? <Content /> : null}</>;
}
