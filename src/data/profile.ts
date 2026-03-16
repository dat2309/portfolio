import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Nguyen The Dat",
  title: "Developer (ReactJS | React Native | NestJS | Android)",
  subtitle:
    "Fullstack Developer passionate about clean architecture, performance optimization, and delivering business-driven solutions",
  bio: [
    "Fullstack Developer with strong experience in building scalable web and mobile applications using ReactJS, React Native, and NestJS. Hands-on experience with real-time systems, event-driven architectures (Kafka), and high-performance APIs (gRPC).",
    "Passionate about clean architecture, performance optimization, and delivering business-driven solutions. Transitioned from native Android (Java/Kotlin) to modern full-stack development, bringing a holistic approach to every project.",
  ],
  email: "thedatnguyen20@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  avatarUrl: "/images/profile.jpg",
  resumeUrl: "/resume.pdf",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/nguyenthedat",
      icon: "FaGithub",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/nguyenthedat",
      icon: "FaLinkedin",
    },
    {
      name: "Email",
      url: "mailto:thedatnguyen20@gmail.com",
      icon: "FaEnvelope",
    },
  ],
  funFacts: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "15+" },
    { label: "Coffee / Day", value: "4" },
  ],
};
