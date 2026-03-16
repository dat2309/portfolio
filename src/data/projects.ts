import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "CRM System",
    description:
      "Customer management system supporting workflows to help businesses track and manage customer information effectively. Full-stack solution with web and mobile interfaces.",
    imageUrl: "/images/projects/project-1.jpg",
    techStack: ["NestJS", "ReactJS", "React Native", "PostgreSQL"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "2",
    title: "Internet Management System",
    description:
      "System managing member accounts, session tracking, billing, and real-time monitoring for internet cafes. Built with real-time features and comprehensive admin dashboard.",
    imageUrl: "/images/projects/project-2.jpg",
    techStack: ["NestJS", "ReactJS", "React Native", "Socket.IO"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Clinic Management System",
    description:
      "Healthcare platform enabling doctors and staff to manage appointments, electronic medical records, prescriptions, and treatments. Includes Zalo Mini App integration.",
    imageUrl: "/images/projects/project-3.jpg",
    techStack: ["NestJS", "ReactJS", "Zalo Mini App", "PostgreSQL"],
    featured: true,
    category: "fullstack",
  },
  {
    id: "4",
    title: "TTL ERP System",
    description:
      "Internal ERP system for HR and order management, streamlining business operations with web and mobile interfaces.",
    imageUrl: "/images/projects/project-4.jpg",
    techStack: ["NestJS", "ReactJS", "React Native", "PostgreSQL"],
    featured: false,
    category: "fullstack",
  },
  {
    id: "5",
    title: "Techres Order & CCB",
    description:
      "Ordering and management apps for restaurant staff including waiters, cashiers, and chefs. Features order handling and business performance reports.",
    imageUrl: "/images/projects/project-5.jpg",
    techStack: ["Android", "Kotlin", "Firebase"],
    featured: false,
    category: "mobile",
  },
  {
    id: "6",
    title: "SEEMT - Operations Management",
    description:
      "Operations management app enabling managers to oversee employees, warehouses, and restaurant business reports, with communication and task management features.",
    imageUrl: "/images/projects/project-6.jpg",
    techStack: ["Android", "Kotlin", "Firebase"],
    featured: false,
    category: "mobile",
  },
  {
    id: "7",
    title: "Aloline - Social Food Network",
    description:
      "Social networking app for food lovers with newsfeed, chat, and restaurant review functionalities.",
    imageUrl: "/images/projects/project-7.jpg",
    techStack: ["Android", "Kotlin", "Firebase", "Socket.IO"],
    featured: false,
    category: "mobile",
  },
  {
    id: "8",
    title: "Techres - Supplier Management",
    description:
      "Supplier management app for handling orders, customers, inventory, employee management, reporting, and customer communication.",
    imageUrl: "/images/projects/project-8.jpg",
    techStack: ["Android", "Kotlin", "Firebase"],
    featured: false,
    category: "mobile",
  },
];
