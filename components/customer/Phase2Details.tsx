'use client';

import Link from 'next/link';
import { Phase2Element } from '@/types';
import { motion } from 'framer-motion';
import { ClipboardList, ListChecks, Users, GraduationCap, ChevronRight } from 'lucide-react';

interface Phase2DetailsProps {
  elements: Phase2Element[];
  customerId: string;
}

const icons = {
  prozessboard: ListChecks,
  umsetzungssession: ClipboardList,
  'kernteam-review': Users,
  gruppencoaching: GraduationCap,
};

export default function Phase2Details({ elements, customerId }: Phase2DetailsProps) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-rcc-navy tracking-tight">Umsetzungs-System</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-rcc-blue/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {elements.map((element, index) => {
          const Icon = icons[element.id as keyof typeof icons] || ListChecks;
          const isLarge = index === 0 || index === 3;

          const cardContent = (
            <>
              {/* Glow Effect */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-10 transition-opacity group-hover:opacity-20 ${
                element.status === 'completed' ? 'bg-green-500' : 'bg-rcc-blue'
              }`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl ${
                    element.status === 'completed' ? 'bg-green-500 text-white' : 'bg-rcc-blue text-white'
                  }`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${
                    element.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {element.status === 'completed' ? 'Abgeschlossen' : 'In Planung'}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-rcc-navy mb-3 group-hover:text-rcc-blue transition-colors">
                  {element.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {element.description}
                </p>

                <ul className="space-y-3">
                  {element.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-3 text-xs font-medium text-slate-500">
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        element.status === 'completed' ? 'bg-green-500' : 'bg-rcc-blue'
                      }`} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {element.isLink && (
                  <div className="mt-8 flex items-center text-sm font-black text-rcc-blue group-hover:gap-2 transition-all">
                    Details anzeigen <ChevronRight size={16} />
                  </div>
                )}
              </div>
            </>
          );

          const cardWrapper = (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`h-full glass-card group relative overflow-hidden p-8 ${
                element.status === 'completed' 
                  ? 'border-green-500/20 bg-green-50/30' 
                  : 'bg-white/50'
              } ${element.isLink ? 'cursor-pointer hover:bg-white/80' : ''}`}
            >
              {cardContent}
            </motion.div>
          );

          return (
            <div 
              key={element.id} 
              className={`${
                index === 0 ? 'md:col-span-7' : 
                index === 1 ? 'md:col-span-5' : 
                index === 2 ? 'md:col-span-5' : 
                'md:col-span-7'
              }`}
            >
              {element.isLink && element.linkPath ? (
                <Link href={element.linkPath} className="h-full block">
                  {cardWrapper}
                </Link>
              ) : cardWrapper}
            </div>
          );
        })}
      </div>
    </section>
  );
}
