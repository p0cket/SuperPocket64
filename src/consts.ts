import { Project } from "./types";

// Sample project data
export const projects: Project[] = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A modern e-commerce site built with React",
        imageUrl: "/images/project1.jpg",
        link: "https://example.com/project1",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "Responsive portfolio site using Next.js",
        imageUrl: "/images/project2.jpg",
        link: "https://example.com/project2",
        technologies: ["Next.js", "TailwindCSS", "Framer Motion"]
    },
    {
        id: 3,
        title: "Mobile App",
        description: "Cross-platform mobile application",
        imageUrl: "/images/project3.jpg",
        link: "https://example.com/project3",
        technologies: ["React Native", "Firebase", "Redux"]
    }
];

export const myProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of your first project",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of your second project",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of your third project",
      link: "https://example.com/project3",
    },
  ]