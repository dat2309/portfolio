import type { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "ReactJS", icon: "FaReact", category: "frontend", proficiency: 75, color: "#61dafb" },
  { name: "React Native", icon: "TbBrandReactNative", category: "frontend", proficiency: 70, color: "#61dafb" },
  { name: "TypeScript", icon: "SiTypescript", category: "frontend", proficiency: 70, color: "#3178c6" },
  { name: "Next.js", icon: "SiNextdotjs", category: "frontend", proficiency: 55, color: "#ffffff" },

  // Backend
  { name: "NestJS", icon: "SiNestjs", category: "backend", proficiency: 72, color: "#e0234e" },
  { name: "REST API", icon: "FaNodeJs", category: "backend", proficiency: 75, color: "#339933" },
  { name: "gRPC", icon: "SiGrpc", category: "backend", proficiency: 55, color: "#244c5a" },
  { name: "Kafka", icon: "SiApachekafka", category: "backend", proficiency: 50, color: "#231f20" },
  { name: "Socket.IO", icon: "SiSocketdotio", category: "backend", proficiency: 60, color: "#010101" },

  // Mobile
  { name: "Android", icon: "FaAndroid", category: "mobile", proficiency: 68, color: "#3ddc84" },
  { name: "Kotlin", icon: "SiKotlin", category: "mobile", proficiency: 60, color: "#7f52ff" },
  { name: "Firebase", icon: "SiFirebase", category: "mobile", proficiency: 60, color: "#ffca28" },

  // Database & Tools
  { name: "PostgreSQL", icon: "SiPostgresql", category: "tools", proficiency: 62, color: "#4169e1" },
  { name: "MySQL", icon: "SiMysql", category: "tools", proficiency: 58, color: "#4479a1" },
  { name: "Redis", icon: "SiRedis", category: "tools", proficiency: 50, color: "#dc382d" },
  { name: "Git", icon: "FaGitAlt", category: "tools", proficiency: 72, color: "#f05032" },
];

export const skillCategories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "mobile", label: "Mobile" },
  { key: "tools", label: "Database & Tools" },
] as const;
