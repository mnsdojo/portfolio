import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description: "My proud, high-quality treasures.",
});

export interface ProjectProps {
  name: string;
  description: string;
  href: string;
}

function Page() {
  return (
    <article className="flex flex-col gap-2">
      <h1 className="font-semibold text-xl">Projects</h1>
      <p className="text-sm text-neutral-400 mb-2">
        Nice frameworks, libraries, web apps. My proud, high-quality harvests.
      </p>
      <h1 className="font-semibold text-xl">Projects</h1>
      <p className="text-sm text-neutral-400 mb-2">
        Nice frameworks, libraries, web apps. My proud, high-quality harvests.
      </p>

      <h2 className="font-semibold text-lg">My Toys</h2>
      <p className="text-sm text-neutral-400 mb-2">Fun projects.</p>
      <div className="flex flex-col divide-y divide-neutral-800 mb-6">
        {projects
          .filter((p) => p.tag === "toy")
          .map((p) => (
            <Project key={p.href} {...p} />
          ))}
      </div>

      <h2 className="font-semibold text-lg">Experimental</h2>
      <p className="text-sm text-neutral-400 mb-2">
        Bleeding edge stuffs for testing purposes.
      </p>

      <div className="flex flex-col divide-y divide-neutral-800 mb-6">
        {projects
          .filter((p) => p.tag === "experimental")
          .map((p) => (
            <Project key={p.href} {...p} />
          ))}
      </div>
    </article>
  );
}

export default Page;
function Project(project: ProjectProps) {
  return (
    <a
      href={project.href}
      className="group px-4 py-3 -mx-4 rounded-xl text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200"
      rel="noreferrer noopener"
    >
      <p className="text-sm text-neutral-100 font-medium">{project.name}</p>
      <p className="text-sm">{project.description}</p>
    </a>
  );
}
