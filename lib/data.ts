import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Problem",
    hash: "#problem",
  },
  {
    name: "Reason",
    hash: "#reason",
  },
  {
    name: "Technologies",
    hash: "#technologies",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Demo",
    hash: "#demo",
  },
] as const;

export const experiencesData = [
  {
    title: "Checking The Potential Of Leaking Information",
    location: "",
    description:
      "Developer may forget snippet of code that lead to vulnerability",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "Checking Source Code Before Running It",
    location: "",
    description:
      "Developer download a lot of codes which is risky",
    icon: React.createElement(CgWorkAlt),
    date: "",
  },
  {
    title: "Checking Whether That Line Of Source Code Is Used To Debugged Or Have The Syntax That Damage The System",
    location: "",
    description:
      "Developer may be mistaken",
    icon: React.createElement(FaReact),
    date: "",
  },
] as const;

export const projectsData = [
  {
    title: "Frontend",
    description:
      "We worled on this project for 2 days. Users can see well-designed UI",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Bankend",
    description:
      "We work hard to bring a smooth and reliable platform for users to use",
    tags: ["Flask", "Python"],
    imageUrl: rmtdevImg,
  },
  {
    title: "A.I",
    description:
      "In the process, we tried a lot of different method and using which is best.",
    tags: ["Scikit", "Python"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "Python",
  "Framer Motion",
] as const;
