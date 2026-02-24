import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AboutBlock() {
  return (
    <div className="relative h-full bg-gradient-to-br from-cyan-300 via-sky-300 to-blue-300 rounded-[32px] p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/30 rounded-full blur-2xl" />

      <div className="relative h-full flex flex-col gap-4">
        {/* Portrait */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-white/60 shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761522002071-67755dc6c820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzczNDgxNHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About Dan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h2 className="text-white drop-shadow-sm" style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--leading-h2)'
          }}>About Me</h2>
          <p className="text-blue-900/80" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: 'var(--leading-body)'
          }}>
            Nearly two decades designing for startups,
            scale-ups, and Fortune 500 companies. I believe
            great design comes from empathy and collaboration.
          </p>
          <button className="flex items-center gap-2 text-white hover:gap-3 transition-all group/link drop-shadow-sm" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: 'var(--leading-body)'
          }}>
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}