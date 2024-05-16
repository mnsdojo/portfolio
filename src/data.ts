import { createSource } from "mdxts";

type FrontMatter = {
  title: string;
  date: Date;
  summary?: string;
  tags?: string[];
};

export const allPosts = createSource<{
  frontMatter: FrontMatter;
}>("posts/*.mdx", {
  baseDirectory: "posts",
  sort: (a, b) => b.frontMatter.date.getTime() - a.frontMatter.date.getTime(),
});
