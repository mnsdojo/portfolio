"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];

function NavLinks() {
  const pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="flex space-x-2">
      {navItems.map((item) => {
        const isActive = item.path === pathname;
        return (
          <Link
            className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
              isActive ? "text-zinc-100" : "text-zinc-400"
            }`}
            data-active={isActive}
            onMouseOver={() => setHoveredPath(item.path)}
            onMouseLeave={() => setHoveredPath(pathname)}
            key={item.path}
            href={item.path}
          >
            <span>{item.name}</span>
            {item.path === hoveredPath && (
              <motion.div
                className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                layoutId="navbar"
                aria-hidden="true"
                style={{
                  width: "100%",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.25,
                  stiffness: 130,
                  damping: 9,
                  duration: 0.3,
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

function Navbar() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 ">
      <motion.div className="border border-stone-800/90 p-[0.4rem] rounded-lg p mb-12 z-[100] bg-stone-900/80 backdrop-blur-md">
        <NavLinks />
      </motion.div>
    </div>
  );
}

export default Navbar;
