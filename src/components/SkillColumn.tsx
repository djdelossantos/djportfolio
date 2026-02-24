interface SkillColumnProps {
  icon: React.ReactNode;
  title: string;
  points: string[];
}

export function SkillColumn({ icon, title, points }: SkillColumnProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600">
          {icon}
        </div>
        <h3 className="text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
