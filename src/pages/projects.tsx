import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with Next.js and Stripe",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "MongoDB"],
    link: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and user-friendly mobile banking application",
    image: "/projects/banking.jpg",
    tags: ["React Native", "Node.js", "AWS", "Firebase"],
    link: "#"
  },
  {
    title: "AI-Powered Analytics",
    description: "Business analytics platform with machine learning capabilities",
    image: "/projects/analytics.jpg",
    tags: ["Python", "TensorFlow", "React", "Docker"],
    link: "#"
  },
  {
    title: "Smart Home System",
    description: "IoT-based home automation system with mobile app control",
    image: "/projects/smarthome.jpg",
    tags: ["IoT", "React", "Node.js", "MongoDB"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-mesh opacity-100"></div>
      
      <Head>
        <title>Projects - NGC Next Generation Code</title>
        <meta name="description" content="Our portfolio of successful projects" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Our Projects</h1>
          <p className="text-xl text-secondary-light/80 dark:text-secondary-dark/80 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary-light/20 dark:bg-primary-dark/20"></div>
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-gradient-to-br from-primary-light/20 to-accent-purple/20"></div>
              </div>
              <h2 className="text-2xl font-bold text-secondary-light dark:text-secondary-dark mb-2 group-hover:text-primary-light dark:group-hover:text-primary-dark transition-colors">
                {project.title}
              </h2>
              <p className="text-secondary-light/80 dark:text-secondary-dark/80 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/10 dark:bg-black/10 rounded-full text-secondary-light/70 dark:text-secondary-dark/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </main>
    </div>
  )
}
