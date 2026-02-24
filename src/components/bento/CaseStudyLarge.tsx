import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { CaseStudyCarousel } from "./CaseStudyCarousel";

interface CaseStudyLargeProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  images: string[];
}

export function CaseStudyLarge({ title, description, tags, color, images }: CaseStudyLargeProps) {
  return (
    <div className={`relative h-full ${color} rounded-[32px] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer`}>
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full blur-3xl" />
      
      <div className="relative h-full flex flex-col gap-6">
        {/* Image Carousel - Square aspect ratio */}
        <div className="aspect-square rounded-3xl overflow-hidden bg-white/20 backdrop-blur-sm ring-1 ring-white/40 shadow-2xl">
          <CaseStudyCarousel images={images} alt={title} />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index}
                className="bg-white/60 backdrop-blur-sm text-gray-900 border-white/60 rounded-full shadow-sm"
                style={{
                  fontSize: 'var(--text-body-s)',
                  fontWeight: 'var(--font-weight-medium)',
                  lineHeight: 'var(--leading-body)'
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-white drop-shadow-md" style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--leading-h2)'
          }}>{title}</h2>
          <p className="text-white/90" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: 'var(--leading-body)'
          }}>{description}</p>
          <button className="flex items-center gap-2 text-white hover:gap-3 transition-all group/link drop-shadow-sm" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-medium)',
            lineHeight: 'var(--leading-body)'
          }}>
            <span>Read Case Study</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}