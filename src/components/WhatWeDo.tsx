import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhatWeDo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="what-we-do" className="py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side – Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-left mb-4 leading-tight max-w-xl">
                We Do the Outreach—You Close the Deals
              </h2>
              <p className="text-lg leading-relaxed mb-1">
                We'll define your ideal clients together and reach out to them using our advanced AI system.
              </p>
              <p className="text-lg leading-relaxed">
                Whenever a prospect shows genuine interest, we schedule a warm meeting on your calendar — so you can focus on delivering your product and closing deals, not prospecting.
              </p>
            </div>

            {/* Right Side – Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/images/ai-outreach.svg" 
                alt="AI Outreach Visual" 
                className="w-[500px] h-[500px] object-contain hidden md:block"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
