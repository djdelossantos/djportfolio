import { ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface CaseStudyMediumProps {
  title: string;
  tags: string[];
  color: string;
  imageUrl: string;
}

export function CaseStudyMedium({ title, tags, color, imageUrl }: CaseStudyMediumProps) {
  return (
    <div className={`relative h-full ${color} rounded-[32px] p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer`}>
      {/* Decorative blur */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
      
      <div className="relative h-full flex flex-col gap-4">
        {/* Image */}
        <div className="aspect-video rounded-2xl overflow-hidden bg-white/20 backdrop-blur-sm ring-1 ring-white/30 shadow-lg">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge 
                key={index}
                className="bg-white/50 backdrop-blur-sm text-gray-800 border-white/50 rounded-full"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-gray-900">{title}</h3>
          <button className="flex items-center gap-2 text-gray-900 hover:gap-3 transition-all group/link">
            <span>Read Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}