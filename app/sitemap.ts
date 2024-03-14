import { documents } from './source';
import { resolve } from "node:url";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const getUrl = (v: string) => resolve("", v);
  return [
    {
      url: getUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getUrl("/projects"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...documents.map<MetadataRoute.Sitemap[number]>((d) => ({
      url: getUrl(`/blog/${d.id}`),
      lastModified: d.info.date,
      changeFrequency: "weekly",
      priority: 0.5,
    })),
  ];
}
