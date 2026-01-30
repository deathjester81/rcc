interface AchievementsProps {
  achievements: string[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  if (achievements.length === 0) return null;

  return (
    <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Gemeinsam erreicht</h2>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
