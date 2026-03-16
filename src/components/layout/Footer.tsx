"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { profile } from "@/data/profile";

export function Footer() {
  const iconMap: Record<string, React.ReactNode> = {
    FaGithub: <FaGithub size={20} />,
    FaLinkedin: <FaLinkedin size={20} />,
    FaEnvelope: <FaEnvelope size={20} />,
  };

  return (
    <footer className="border-t border-white/5 bg-bg-dark-secondary py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <p className="text-sm text-text-dark-secondary">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark-secondary transition-colors hover:text-primary"
                aria-label={link.name}
              >
                {iconMap[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
