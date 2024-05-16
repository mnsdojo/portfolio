"use client";
import { Link } from "next-view-transitions";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface Props {
  id:string;
  title: string;
}
export default function Card({ title,id }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <Link
      href={`/blog/${id}`}
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group relative w-full overflow-hidden rounded-xl border-stone-800/90"
    >
      <div className="absolute right-5 top-0 h-px w-80 bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent" />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)
					`,
        }}
      />
      <div className="relative flex flex-col gap-3 rounded-xl border border-white/10 px-4 py-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
          <p className="text-sm leading-[1.5] text-neutral-400">{title}</p>
        </div>
      </div>
    </Link>
  );
}