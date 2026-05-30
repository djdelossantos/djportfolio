import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { AnimatedHover } from "./AnimatedHover";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef<SVGSVGElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 640);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animateArrow = () => {
    const arrow = arrowRef.current;

    if (!arrow || prefersReducedMotion()) {
      return;
    }

    gsap.killTweensOf(arrow);
    gsap.timeline()
      .to(arrow, {
        y: -14,
        autoAlpha: 0,
        duration: 0.16,
        ease: "power2.in",
      })
      .set(arrow, { y: 14 })
      .to(arrow, {
        y: 0,
        autoAlpha: 1,
        duration: 0.32,
        ease: "back.out(2)",
      });
  };

  const handlePointerEnter = () => {
    const fill = fillRef.current;

    animateArrow();

    if (!fill) {
      return;
    }

    gsap.to(fill, {
      scaleY: 1,
      duration: prefersReducedMotion() ? 0 : 0.25,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handlePointerLeave = () => {
    const fill = fillRef.current;

    if (!fill) {
      return;
    }

    gsap.to(fill, {
      scaleY: 0,
      duration: prefersReducedMotion() ? 0 : 0.38,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8"
        >
          <AnimatedHover className="rounded-full" scaleOnHover={false}>
            <button
              type="button"
              onClick={scrollToTop}
              onPointerEnter={handlePointerEnter}
              onPointerLeave={handlePointerLeave}
              aria-label="Back to top"
              className="group flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 text-white shadow-2xl shadow-black/30 backdrop-blur-md transition-colors hover:border-white/25 sm:h-14 sm:w-14"
            >
              <span
                ref={fillRef}
                className="absolute inset-0 z-[1] origin-bottom bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"
                style={{ transform: "scaleY(0)" }}
              />
              <ArrowUp ref={arrowRef} className="relative z-[2] h-5 w-5 transition-colors group-hover:text-neutral-950" />
            </button>
          </AnimatedHover>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
