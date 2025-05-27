

import React from 'react';
import { ArrowRight } from 'lucide-react';
import WorkFLowBelow from './WorkFLowBelow';
import AnimatedSection from './WorkFlowClient';
import ScrollButton from './WorkFlowScrollButton';

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

          <div className="text-xl md:text-4xl  text-center mb-16 max-w-3xl mx-auto font-bold leading-tight">
            <h1 className="font-bold text-4xl">How It Works</h1>
          </div>

      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* STEP 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
        <AnimatedSection>
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
          </AnimatedSection>

         <AnimatedSection>
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Bismillah, Find Your Rizq & Role
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every journey begins with the Name of Allah. Whether you are a skilled Muslim seeking to serve or an aspiring founder with an idea, your rizq is written — your job is to discover and act. Let inspiration flow and begin with tawakkul.
            </p>
         <ScrollButton/>
          </AnimatedSection>
        </div>

        {/* STEP 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
         <AnimatedSection>
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Make Niyyah: Intend With Ikhlas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Make your niyyah not just to earn, but to serve — to uplift your family, the Ummah, and yourself in a halal, meaningful way. Barakah flows where intentions are sincere. Anchor your professional goals in the principles of Islam.
            </p>
              <ScrollButton/>
         </AnimatedSection>

         <AnimatedSection>
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
         </AnimatedSection>
        </div>

        {/* STEP 3 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
         <AnimatedSection>
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
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-4xl font-bold text-foregroundExtra leading-tight">
              Launch With Ihsan: Grow With Tawakkul
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With your niyyah set and support in place, now it's time to act. Whether you're offering your skill, starting your business, or hiring another Muslim, grow with ihsan (excellence), sabr (patience), and reliance on Allah. We rise together, Insha'Allah.
            </p>
             <ScrollButton/>
          </AnimatedSection>
        </div>

        <WorkFLowBelow/>
      </div>
    </section>
  );
};

export default HowItWorks;
