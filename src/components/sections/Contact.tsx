"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { staggerContainer, slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";
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

      <div className="relative mx-auto max-w-4xl px-6">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <motion.h3
            variants={fadeInUp}
            className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-dark-primary md:text-3xl"
          >
            Let&apos;s build something amazing together
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="mt-4 max-w-xl text-text-dark-secondary leading-relaxed"
          >
            I&apos;m always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </motion.p>

          {/* Contact cards */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 grid w-full gap-4 sm:grid-cols-3"
          >
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaEnvelope size={22} />
              </div>
              <span className="text-xs text-text-dark-secondary">Email</span>
              <span className="text-sm font-medium text-text-dark-primary">{profile.email}</span>
            </motion.a>

            <motion.a
              href="tel:0989720574"
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FaPhone size={22} />
              </div>
              <span className="text-xs text-text-dark-secondary">Phone</span>
              <span className="text-sm font-medium text-text-dark-primary">0989 720 574</span>
            </motion.a>

            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all hover:border-secondary/20 hover:shadow-lg hover:shadow-secondary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <FaLocationDot size={22} />
              </div>
              <span className="text-xs text-text-dark-secondary">Location</span>
              <span className="text-sm font-medium text-text-dark-primary">{profile.location}</span>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
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
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-text-dark-secondary transition-all hover:border-primary/30 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                aria-label={link.name}
              >
                {iconMap[link.icon] || link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div variants={fadeInUp} className="mt-8">
            <GradientButton variant="primary" href={`mailto:${profile.email}`}>
              <FaEnvelope size={16} />
              Send Me An Email
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
