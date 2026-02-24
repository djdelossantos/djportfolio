import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Sparkles } from "lucide-react";

export function HeroBlock() {
  return (
    <div className="relative h-full bg-gradient-to-br from-violet-400 via-purple-400 to-fuchsia-400 rounded-[32px] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Decorative floating shapes */}
      <div className="absolute top-8 right-8 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-12 left-12 w-24 h-24 bg-fuchsia-300/40 rounded-full blur-xl" />

      <div className="relative h-full flex flex-col justify-between">
        <div className="space-y-6">
          {/* Small decorative badge */}
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/60 shadow-lg">
            <Sparkles className="w-4 h-4 text-fuchsia-700" />
            <span className="text-body-s text-purple-900">
              Senior UX/UI Designer
            </span>
          </div>

          <div className="space-y-4">
            <h1
              className="text-white max-w-xl drop-shadow-md"
              style={{
                fontSize: "var(--text-h1)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--leading-h1)",
                letterSpacing: "var(--tracking-h1)",
              }}
            >
              Designing experiences that make products simple,
              beautiful, and human.
            </h1>
            <p
              className="text-white/90 max-w-lg"
              style={{
                fontSize: "var(--text-body-m)",
                fontWeight: "var(--font-weight-normal)",
                lineHeight: "var(--leading-body)",
              }}
            >
              I'm Dan Joseph Delos Santos; Senior UX/UI
              Designer with 17 years of experience in product
              design, visual design, and systems thinking.
            </p>
            <p
              className="text-white/90 max-w-lg"
              style={{
                fontSize: "var(--text-body-m)",
                fontWeight: "var(--font-weight-normal)",
                lineHeight: "var(--leading-body)",
              }}
            >
              I help teams turn ideas into intuitive,
              high-performing products. My work spans UX
              strategy, wireframing, UI systems, prototypes, and
              end-to-end product delivery.
            </p>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap gap-3 pt-6">
          <Button
            size="lg"
            className="rounded-full bg-white hover:bg-white/90 text-purple-700 shadow-lg hover:shadow-xl transition-shadow"
          >
            View Case Studies
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/60 hover:bg-white/50 text-white hover:text-white transition-all"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}