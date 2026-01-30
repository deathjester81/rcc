'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCustomerById } from '@/data/customers';
import DownloadList from '@/components/shared/DownloadList';
import { Document } from '@/types';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowLeft } from 'lucide-react';

interface GruppencoachingPageProps {
  params: {
    customerId: string;
  };
}

const mockDocuments: Document[] = [
  { id: '1', name: 'Coaching Session 1 - Einführung', type: 'pdf', downloadUrl: '#' },
  { id: '2', name: 'Arbeitsblatt - Reflexion', type: 'worksheet', downloadUrl: '#' },
  { id: '3', name: 'Template - Zielsetzung', type: 'template', downloadUrl: '#' },
  { id: '4', name: 'Zusammenfassung Session 1', type: 'summary', downloadUrl: '#' },
  { id: '5', name: 'Coaching Session 2 - Vertiefung', type: 'pdf', downloadUrl: '#' },
];

export default function GruppencoachingPage({ params }: GruppencoachingPageProps) {
  const customer = getCustomerById(params.customerId);

  if (!customer) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href={`/customers/${customer.id}`}
            className="group inline-flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-rcc-blue transition-colors mb-12"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zu {customer.name}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card bg-white/60 p-10 md:p-16 rounded-[3rem] border-white/50"
        >
          <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
            <div className="p-6 bg-rcc-navy text-white rounded-[2rem] shadow-2xl shadow-rcc-navy/20">
              <GraduationCap size={48} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-rcc-navy tracking-tighter mb-4">
                Gruppencoaching
              </h1>
              <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
                Ihre persönliche Dokumenten-Bibliothek aus den Coaching-Sessions mit RCC. Exklusiv für Teilnehmer.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-black text-rcc-navy uppercase tracking-widest">Dokumente</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
            </div>
            <DownloadList documents={mockDocuments} />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
