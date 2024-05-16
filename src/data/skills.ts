import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: "Frontend",
      skills: [
        { skill: "html", icon: SiHtml5 },
        { skill: "css", icon: SiCss3 },
        { skill: "javascript", icon: SiJavascript },
        { skill: "react", icon: SiReact },
        { skill: "sass", icon: SiSass },
        { skill: "tailwind", icon: SiTailwindcss },
        { skill: "nextjs", icon: SiNextdotjs },
        { skill: "astro", icon: SiAstro },
        {
          skill: "bootstrap",
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: "Backend",
      skills: [
        {
          skill: "nodejs",
          icon: SiNodedotjs,
        },

        {
          skill: "postgresql",
          icon: SiPostgresql,
        },
        {
          skill: "mongodb",
          icon: SiMongodb,
        },
        {
          skill: "docker",
          icon: SiDocker,
        },
      ],
    },
  ];

export default SKILLS;
