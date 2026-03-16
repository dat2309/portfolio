import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "OVERATE-VNTECH",
    role: "Developer (ReactJS | React Native | NestJS)",
    startDate: "Sep 2024",
    endDate: null,
    description: [
      "Developed and maintained React.js web applications and React Native mobile apps, ensuring smooth cross-platform performance and modern UI/UX",
      "Built and integrated NestJS backend services, implementing RESTful APIs, gRPC for high-performance inter-service communication, and Kafka for event-driven architecture",
      "Implemented real-time features with Socket.IO and optimized system performance for high user concurrency",
      "Integrated third-party payment gateways (VNPay, PayOS, MoMo) to support secure online transactions",
      "Collaborated with designers, developers, and project managers to deliver scalable and reliable solutions",
    ],
    techStack: ["ReactJS", "React Native", "NestJS", "gRPC", "Kafka", "Socket.IO", "PostgreSQL"],
  },
  {
    id: "2",
    company: "OVERATE-VNTECH",
    role: "Android Developer",
    startDate: "Sep 2022",
    endDate: "Sep 2024",
    description: [
      "Developed and maintained hybrid mobile applications for Android, ensuring optimal performance and user-friendly experiences",
      "Collaborated with cross-functional design and development teams to translate business requirements into functional applications",
      "Implemented code optimization techniques to reduce application size without compromising features",
      "Resolved critical technical issues, including crash fixes, leading to improved stability and higher user retention",
      "Conducted thorough testing and applied effective debugging strategies to ensure high-quality deliverables",
    ],
    techStack: ["Android", "Kotlin", "Java", "Firebase", "Push Notification"],
  },
];
