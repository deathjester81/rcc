'use client';

import { Document } from '@/types';
import { motion } from 'framer-motion';
import { FileText, ClipboardList, BookOpen, BarChart3, Download } from 'lucide-react';

interface DownloadListProps {
  documents: Document[];
}

const icons = {
  pdf: FileText,
  worksheet: ClipboardList,
  template: BookOpen,
  summary: BarChart3,
};

export default function DownloadList({ documents }: DownloadListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {documents.map((doc, index) => {
        const Icon = icons[doc.type] || FileText;
        return (
          <motion.a
            key={doc.id}
            href={doc.downloadUrl}
            download
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group flex items-center gap-5 p-6 glass-card bg-white/40 rounded-2xl hover:bg-white/80 transition-all duration-300"
          >
            <div className="p-4 bg-rcc-blue text-white rounded-xl shadow-lg shadow-rcc-blue/20 group-hover:scale-110 transition-transform">
              <Icon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-rcc-navy group-hover:text-rcc-blue transition-colors leading-tight">
                {doc.name}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                {doc.type}
              </p>
            </div>
            <div className="p-3 rounded-full bg-slate-50 text-slate-400 group-hover:bg-rcc-blue group-hover:text-white transition-all duration-300">
              <Download size={20} />
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}
