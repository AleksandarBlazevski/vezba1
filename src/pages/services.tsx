import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaCloud, FaRocket } from 'react-icons/fa'
import Navbar from '../components/Navbar'

const services = [
  {
    icon: <FaCode className="w-12 h-12" />,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Tailwind CSS. We focus on performance, SEO, and exceptional user experience.",
    features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "SEO Optimization"]
  },
  {
    icon: <FaMobile className="w-12 h-12" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices. We use React Native and Flutter for efficient development.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Optimization"]
  },
  {
    icon: <FaCloud className="w-12 h-12" />,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure designed to grow with your business. We leverage AWS, Azure, and Google Cloud for reliable hosting solutions.",
    features: ["Cloud Migration", "Server Management", "Database Solutions", "Security Implementation"]
  },
  {
    icon: <FaRocket className="w-12 h-12" />,
    title: "Digital Innovation",
    description: "Cutting-edge solutions that keep you ahead of the competition. We implement AI, ML, and IoT technologies to drive business growth.",
    features: ["AI Integration", "Machine Learning", "IoT Solutions", "Blockchain Development"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-mesh opacity-100"></div>
      
      <Head>
        <title>Services - NGC Next Generation Code</title>
        <meta name="description" content="Professional software development services" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Our Services</h1>
          <p className="text-xl text-secondary-light/80 dark:text-secondary-dark/80 max-w-3xl mx-auto">
            We offer comprehensive software solutions to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="text-primary-light dark:text-primary-dark mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-secondary-light dark:text-secondary-dark mb-4">
                {service.title}
              </h2>
              <p className="text-secondary-light/80 dark:text-secondary-dark/80 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-secondary-light/70 dark:text-secondary-dark/70">
                    <span className="w-2 h-2 bg-primary-light dark:bg-primary-dark rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
