import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, tag, imageUrl }: ProjectCardProps) {
  return (
    <div className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <Badge variant="secondary" className="rounded-full">
          {tag}
        </Badge>
        <h3 className="text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group/link">
          <span>Read case study</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
