import { Target, Palette, Users } from "lucide-react";

export function SkillsBlock() {
  const skills = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "UX Strategy & Research",
      points: [
        "User research & personas",
        "Information architecture",
        "Journey mapping",
        "Usability testing"
      ]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Product & UI Design",
      points: [
        "Design systems",
        "High-fidelity prototyping",
        "Visual design & branding",
        "Responsive design"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-functional Collaboration",
      points: [
        "Agile product development",
        "Stakeholder alignment",
        "Design documentation",
        "Team mentoring"
      ]
    }
  ];

  return (
    <div className="relative h-full bg-gradient-to-br from-indigo-400 via-violet-400 to-purple-400 rounded-[32px] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-fuchsia-300/30 rounded-full blur-3xl" />
      
      <div className="relative space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-white drop-shadow-md" style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--leading-h2)'
          }}>What I Do</h2>
          <p className="text-white/90 max-w-2xl mx-auto" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: 'var(--leading-body)'
          }}>
            A holistic approach combining strategy, craft, and collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/50 hover:bg-white/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
                  {skill.icon}
                </div>
                <h3 className="text-gray-900" style={{
                  fontSize: 'var(--text-h4)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--leading-h4)'
                }}>{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-900/80" style={{
                    fontSize: 'var(--text-body-s)',
                    fontWeight: 'var(--font-weight-normal)',
                    lineHeight: 'var(--leading-body)'
                  }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}