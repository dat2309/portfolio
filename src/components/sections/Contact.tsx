"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { FaEnvelope, FaLocationDot, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { GradientButton } from "@/components/ui/GradientButton";

export function Contact() {
  const iconMap: Record<string, React.ReactNode> = {
    FaGithub: <FaGithub size={20} />,
    FaLinkedin: <FaLinkedin size={20} />,
    FaEnvelope: <FaEnvelope size={20} />,
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-dark-secondary/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Contact info */}
          <motion.div variants={slideInLeft} className="flex flex-col justify-center">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-dark-primary">
              Let&apos;s build something amazing together
            </h3>
            <p className="mt-4 text-text-dark-secondary leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 text-text-dark-secondary transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaEnvelope size={18} />
                </div>
                {profile.email}
              </a>
              <a
                href="tel:0989720574"
                className="flex items-center gap-4 text-text-dark-secondary transition-colors hover:text-primary"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <FaPhone size={18} />
                </div>
                0989 720 574
              </a>
              <div className="flex items-center gap-4 text-text-dark-secondary">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <FaLocationDot size={18} />
                </div>
                {profile.location}
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              {profile.socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4, borderColor: "rgba(99,102,241,0.4)" }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-text-dark-secondary transition-all hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                  aria-label={link.name}
                >
                  {iconMap[link.icon] || link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={slideInRight}>
            <form
              action={`mailto:${profile.email}`}
              method="GET"
              className="space-y-5 rounded-xl border border-white/5 bg-bg-dark-secondary/50 p-6 backdrop-blur-sm"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-text-dark-secondary">
                  Your Name
                </label>
                <input
                  id="name"
                  name="subject"
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-text-dark-primary placeholder:text-text-dark-secondary/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-text-dark-secondary">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-text-dark-primary placeholder:text-text-dark-secondary/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-text-dark-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="body"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-bg-dark px-4 py-3 text-text-dark-primary placeholder:text-text-dark-secondary/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
              </div>
              <GradientButton variant="primary" className="w-full">
                Send Message
              </GradientButton>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
