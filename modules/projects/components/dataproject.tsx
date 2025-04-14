import { ProjectItem } from "@/common/types/projects";

export const projectData: ProjectItem[] = [
  {
    id: 1,
    title: "Chatbot AI",
    slug: "https://facebook.com",
    description: "Chatbot AI built with Next.js and OpenAI API integration.",
    image: "/images/projects/chatbot-ai.png",
    link_demo: "https://facebook.com",
    link_github: "https://github.com/username/chatbot-ai",
    stacks: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API"],
    content: null,
    is_show: true,
    is_featured: true,
  },
  {
    id: 2,
    title: "E-Commerce UI",
    slug: "ecommerce-ui",
    description: "Frontend e-commerce layout with Tailwind CSS and animations.",
    image: "/images/projects/ecommerce-ui.png",
    link_demo: "https://ecommerce.example.com",
    link_github: "https://github.com/username/ecommerce-ui",
    stacks: ["React", "TailwindCSS", "Framer Motion"],
    content: null,
    is_show: true,
    is_featured: false,
  },
  // tambahkan proyek lain sesuai kebutuhan
];
