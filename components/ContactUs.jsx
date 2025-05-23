'use client'
import { motion } from 'framer-motion';
import { Instagram, Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
 
 
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialIcons = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Phone, href: 'tel:07716534984', label: 'Phone' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v2.44a4.83 4.83 0 01-3.77 4.25 4.83 4.83 0 01-3.77-4.25V2H4.12v.44a4.83 4.83 0 01-3.77 4.25v1.75a4.83 4.83 0 013.77 4.25V2.44h2.08v9.81a4.83 4.83 0 013.77-4.25V6.25a4.83 4.83 0 013.77 4.25v1.75z"/>
        </svg>
      ),
      href: '#',
      label: 'TikTok'
    }
  ];

  return (
    <div className="min-h-screen bg-foreground text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Contact Info */}
          <motion.div className="space-y-12" variants={itemVariants}>
            <div>
              <motion.span 
                className="text-gray-400 text-sm font-medium tracking-wider uppercase"
                variants={itemVariants}
              >
                Contact
              </motion.span>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mt-4 leading-tight"
                variants={itemVariants}
              >
                Get in touch
              </motion.h1>
              <motion.p 
                className="text-gray-300 text-lg mt-6 leading-relaxed max-w-lg text-justify"
                variants={itemVariants}
              >
                We're here to support Muslim business owners, service seekers, and community builders.

Reach out to connect, grow, and strengthen our shared values — together, we build a stronger ummah.
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div 
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-foregroundBold rounded-lg group-hover:bg-foregroundSemiBold transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office</h3>
                  <p className="text-gray-300">150 Old Park Ln, London W1K 1QZ</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-foregroundBold rounded-lg group-hover:bg-foregroundSemiBold transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">hello@refit.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start space-x-4 group cursor-pointer"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-3 bg-foregroundBold rounded-lg group-hover:bg-foregroundSemiBold  transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telephone</h3>
                  <p className="text-gray-300">07716 534984</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">Follow us</h3>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 bg-foregroundBold rounded-lg group-hover:bg-foregroundSemiBold transition-colors duration-300"
                    whileHover={{ scale: 1.1,  }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
        <motion.div
            className=" rounded-2xl p-8 "
            variants={itemVariants}
            // whileHover={{ y: -5 }}
            // transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='flex flex-col justify-center items-center'>
                <img src="/logos/whiteLogo.svg" alt="Muslim directory" />
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <h1  className='font-FMBoylar font-light text-3xl md:text-4xl'>Muslim directory</h1>
                  <p className='font-FMBoylar'>themuslimdirectory.ca</p>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;