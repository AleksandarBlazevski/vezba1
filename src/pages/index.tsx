import Head from 'next/head'
import Image from 'next/image'
import { FaCode, FaMobile, FaCloud, FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ThemeToggle'

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay: number;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Modern gradient background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-100"></div>
      
      {/* Animated shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent-blue/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-pink/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <Head>
        <title>NGC Next Generation Code - Modern Software Solutions</title>
        <meta name="description" content="Professional software development services" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <Navbar />
      <ThemeToggle />

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Building The Future
          </h1>
          <p className="text-xl md:text-2xl text-secondary-light/80 dark:text-secondary-dark/80 mb-8 md:mb-12 max-w-2xl mx-auto">
            We craft exceptional digital experiences through innovative software solutions
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 button-glow"
          >
            Get Started
          </motion.button>
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="relative py-20 bg-white/40 dark:bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center text-gradient mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaCode className="w-8 h-8" />}
              title="Web Development"
              description="Modern, responsive websites built with the latest technologies"
              delay={0.2}
            />
            <ServiceCard
              icon={<FaMobile className="w-8 h-8" />}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications"
              delay={0.4}
            />
            <ServiceCard
              icon={<FaCloud className="w-8 h-8" />}
              title="Cloud Solutions"
              description="Scalable and secure cloud infrastructure"
              delay={0.6}
            />
            <ServiceCard
              icon={<FaRocket className="w-8 h-8" />}
              title="Digital Innovation"
              description="Cutting-edge solutions for modern businesses"
              delay={0.8}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center text-gradient mb-12"
          >
            Our Projects
          </motion.h2>
          <div className="text-center text-secondary-light/80 dark:text-secondary-dark/80">
            Coming Soon
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-white/40 dark:bg-black/40 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-center text-gradient mb-12"
          >
            Get In Touch
          </motion.h2>
          <div className="text-center text-secondary-light/80 dark:text-secondary-dark/80">
            Contact form coming soon
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-6 md:mb-0 text-gradient">
            NGC Next Generation Code
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-light/80 dark:text-secondary-dark/80 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" className="text-secondary-light/80 dark:text-secondary-dark/80 hover:text-primary-light dark:hover:text-primary-dark transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-secondary-light/60 dark:text-secondary-dark/60">
            &copy; 2025 NGC <span className="text-sm">next generation code</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover-lift"
    >
      <div className="text-primary-light dark:text-primary-dark mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-secondary-light dark:text-secondary-dark mb-2">
        {title}
      </h3>
      <p className="text-secondary-light/70 dark:text-secondary-dark/70">
        {description}
      </p>
    </motion.div>
  )
}
