'use client';

import { Customer } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';
import { motion } from 'framer-motion';
import { Building2, MapPin } from 'lucide-react';

interface CustomerHeaderProps {
  customer: Customer;
}

export default function CustomerHeader({ customer }: CustomerHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rcc-blue/20 to-transparent blur-3xl -z-10" />
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <Building2 className="text-rcc-blue" size={20} />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Kunden-Projekt</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-rcc-navy tracking-tighter mb-4">
            {customer.name}
          </h1>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <MapPin size={18} />
              {customer.industry}
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">Status:</span>
              <StatusBadge status={customer.overallStatus} />
            </div>
          </div>
        </div>

        <div className="glass-card px-8 py-6 rounded-3xl border-white/40">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Aktuelle Phase</div>
          <div className="text-4xl font-black text-rcc-blue">
            {customer.currentPhase} <span className="text-lg text-slate-300">/ 3</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
