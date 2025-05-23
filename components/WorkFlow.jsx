'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  },
});

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <nav className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          className="flex items-center justify-center"
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-4xl">How It Works</h1>
        </motion.div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* STEP 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="order-1"
            variants={fadeUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/carousel/pexels-mloky96-36704.jpg"
                alt="Muslim professional working"
                className="w-full h-96 object-cover object-top rounded-3xl shadow-lg"
              />
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  01
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-2 space-y-6"
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Bismillah, Find Your Rizq & Role
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every journey begins with the Name of Allah. Whether you are a skilled Muslim seeking to serve or an aspiring founder with an idea, your rizq is written — your job is to discover and act. Let inspiration flow and begin with tawakkul.
            </p>
            <button
              onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold group transition-colors"
            >
              Discover More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* STEP 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="order-2 lg:order-1 space-y-6"
            variants={fadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Make Niyyah: Intend With Ikhlas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Make your niyyah not just to earn, but to serve — to uplift your family, the Ummah, and yourself in a halal, meaningful way. Barakah flows where intentions are sincere. Anchor your professional goals in the principles of Islam.
            </p>
            <button
              onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold group transition-colors"
            >
              Discover More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            variants={fadeUp(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/carousel/thirdWorkflow.jpg"
                alt="Muslim woman in consultation"
                className="w-full h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  02
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* STEP 3 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="order-1"
            variants={fadeUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/carousel/secondWorkFlow.png"
                alt="Muslim team collaboration"
                className="w-full h-96 object-cover rounded-3xl shadow-lg"
              />
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  03
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-2 space-y-6"
            variants={fadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Launch With Ihsan: Grow With Tawakkul
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With your niyyah set and support in place, now it's time to act. Whether you're offering your skill, starting your business, or hiring another Muslim, grow with ihsan (excellence), sabr (patience), and reliance on Allah. We rise together, Insha'Allah.
            </p>
            <button
              onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold group transition-colors"
            >
              Discover More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center bg-white rounded-3xl p-12 shadow-lg"
          variants={fadeUp(1.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foregroundExtra mb-4">
            Join thousands of Muslims building careers and companies that please Allah
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Start with Bismillah and grow with barakah.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
