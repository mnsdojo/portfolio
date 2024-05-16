import React from "react";

import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from "@icons-pack/react-simple-icons";

const links: { icon: IconType; href: string }[] = [
  {
    icon: SiGmail,
    href: "mailto:johndoe@gmail.com",
  },
  {
    icon: SiGithub,
    href: "https://github.com/mnsdojo",
  },
  {
    icon: SiLinkedin,
    href: "https://github.com/mnsdojo",
  },
  {
    icon: SiMedium,
    href: "https://github.com/mnsdojo",
  },
];

function Links() {
  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        );
      })}
    </div>
  );
}

export default Links;
