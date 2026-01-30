'use client';

import Link from 'next/link';
import { Customer } from '@/types';
import StatusBadge from '@/components/shared/StatusBadge';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2 } from 'lucide-react';

interface CustomerCardProps {
  customer: Customer;
  index: number;
}

export default function CustomerCard({ customer, index }: CustomerCardProps) {
  const statusColorMap = {
    completed: 'border-green-500/30 shadow-green-100',
    'in-progress': 'border-rcc-blue/30 shadow-blue-100',
    available: 'border-slate-200 shadow-slate-100',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/customers/${customer.id}`}
        className={`group block p-8 glass-card border-2 ${statusColorMap[customer.overallStatus]} hover:bg-white/80 transition-all duration-300 relative overflow-hidden h-full`}
      >
        <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:scale-110 transition-transform">
          <Building2 size={120} />
        </div>

        <div className="flex flex-col h-full relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="p-3 bg-rcc-blue/10 rounded-2xl group-hover:bg-rcc-blue group-hover:text-white transition-colors duration-300">
              <Building2 size={24} />
            </div>
            <StatusBadge status={customer.overallStatus} />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-black text-rcc-navy mb-2 tracking-tight group-hover:text-rcc-blue transition-colors">
              {customer.name}
            </h3>
            <p className="text-slate-500 font-medium text-sm mb-6">{customer.industry}</p>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">
              Phase {customer.currentPhase} <span className="text-slate-200">/ 3</span>
            </span>
            <div className="p-2 rounded-full bg-slate-50 group-hover:bg-rcc-blue group-hover:text-white transition-colors duration-300">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
