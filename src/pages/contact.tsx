import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-mesh opacity-100"></div>
      
      <Head>
        <title>Contact - NGC Next Generation Code</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Get In Touch</h1>
          <p className="text-xl text-secondary-light/80 dark:text-secondary-dark/80 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary-light/80 dark:text-secondary-dark/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/5 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 text-secondary-light dark:text-secondary-dark outline-none transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-secondary-light/80 dark:text-secondary-dark/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/5 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 text-secondary-light dark:text-secondary-dark outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-secondary-light/80 dark:text-secondary-dark/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/10 border border-white/10 dark:border-white/5 focus:border-primary-light dark:focus:border-primary-dark focus:ring-2 focus:ring-primary-light/20 dark:focus:ring-primary-dark/20 text-secondary-light dark:text-secondary-dark outline-none transition-all duration-200"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 button-glow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gradient mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-primary-light dark:text-primary-dark mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">Email</h3>
                    <p className="text-secondary-light/80 dark:text-secondary-dark/80">contact@NGC.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="w-6 h-6 text-primary-light dark:text-primary-dark mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">Phone</h3>
                    <p className="text-secondary-light/80 dark:text-secondary-dark/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-primary-light dark:text-primary-dark mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-light dark:text-secondary-dark">Address</h3>
                    <p className="text-secondary-light/80 dark:text-secondary-dark/80">
                      123 Tech Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gradient mb-6">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-secondary-light/80 dark:text-secondary-dark/80">Monday - Friday</span>
                  <span className="text-secondary-light dark:text-secondary-dark">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-light/80 dark:text-secondary-dark/80">Saturday</span>
                  <span className="text-secondary-light dark:text-secondary-dark">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-light/80 dark:text-secondary-dark/80">Sunday</span>
                  <span className="text-secondary-light dark:text-secondary-dark">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
