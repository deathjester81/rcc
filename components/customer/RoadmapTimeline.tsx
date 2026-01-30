import { Phase } from '@/types';
import PhaseCard from './PhaseCard';

interface RoadmapTimelineProps {
  phases: Phase[];
}

export default function RoadmapTimeline({ phases }: RoadmapTimelineProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">RCC Roadmap</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
}
