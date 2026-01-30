'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface AchievementsProps {
  achievements: string[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  if (achievements.length === 0) return null;

  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-rcc-navy tracking-tight">Gemeinsam erreicht</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-rcc-blue/50 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-4 p-5 glass-card bg-white/40 rounded-2xl group hover:bg-white/80 transition-colors"
          >
            <div className="text-green-500 group-hover:scale-110 transition-transform">
              <CheckCircle2 size={24} />
            </div>
            <span className="text-slate-700 font-medium">{achievement}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
