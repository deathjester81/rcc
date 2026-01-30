'use client';

import { Phase } from '@/types';
import PhaseCard from './PhaseCard';
import { motion } from 'framer-motion';

interface RoadmapTimelineProps {
  phases: Phase[];
}

export default function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-rcc-navy tracking-tight">Die Roadmap</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-rcc-blue/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-12 z-0">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originX: 0 }}
            className="h-full bg-gradient-to-r from-green-500 via-rcc-blue to-slate-200"
          />
        </div>

        {phases.map((phase, index) => (
          <div key={phase.id} className="relative z-10">
            <PhaseCard phase={phase} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
