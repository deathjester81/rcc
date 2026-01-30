'use client';

import { Phase } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';
import ContactButton from '@/components/shared/ContactButton';
import { motion } from 'framer-motion';
import { ClipboardCheck, Layout, Wrench, Rocket } from 'lucide-react';

interface PhaseCardProps {
  phase: Phase;
  index: number;
}

const icons = [ClipboardCheck, Layout, Wrench, Rocket];

export default function PhaseCard({ phase, index }: PhaseCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card glass-card-hover p-6 relative flex flex-col h-full ${
        phase.status === 'in-progress' ? 'ring-2 ring-rcc-blue' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-2xl ${
          phase.status === 'completed' ? 'bg-green-500/10 text-green-500' : 
          phase.status === 'in-progress' ? 'bg-rcc-blue/10 text-rcc-blue' : 
          'bg-slate-100 text-slate-400'
        }`}>
          <Icon size={32} />
        </div>
        <StatusBadge status={phase.status} />
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-black text-rcc-navy mb-2">
          {phase.id}. {phase.name}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          {phase.description}
        </p>
      </div>

      {phase.status === 'available' && (
        <div className="mt-8 pt-6 border-t border-slate-100">
          <ContactButton className="w-full justify-center" />
        </div>
      )}
    </motion.div>
  );
}
