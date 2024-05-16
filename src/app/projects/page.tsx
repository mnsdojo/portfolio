import Card from "@/components/ui/card";
import { projects } from "@/data/projects";
import React from "react";

function Page() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>
      <div className="flex flex-col gap-5">
        {projects.map((project, id) => {
          return <Card key={id} {...project} />;
        })}
      </div>
    </div>
  );
}

export default Page;
