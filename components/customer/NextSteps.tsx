'use client';

import ContactButton from '@/components/shared/ContactButton';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface NextStepsProps {
  nextSteps: string;
  showContactButton?: boolean;
}

export default function NextSteps({ nextSteps, showContactButton = false }: NextStepsProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <div className="glass-card bg-rcc-navy p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden group">
        {/* Decorative elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-rcc-blue rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity" />
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-white rounded-full blur-[100px] opacity-5" />

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md">
            <Lightbulb className="text-white" size={48} />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
              Der nächste sinnvolle Schritt
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">
              {nextSteps}
            </p>
            {showContactButton && (
              <ContactButton className="bg-white text-rcc-navy hover:bg-rcc-blue hover:text-white" />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
