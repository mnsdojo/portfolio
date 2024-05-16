import React from "react";
import { allPosts } from "@/data";
import Card from "./card";
function Page() {
  return (
    <main className="font-base">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Blog</h1>
      <p className="text-base mb-4">Idk why I created this</p>
      <div className="flex flex-col gap-2">
        {allPosts.paths().map((d, id) => (
          <Card key={id} title={d as string} id={d as string} />
        ))}
      </div>
    </main>
  );
}

export default Page;
