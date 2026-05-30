import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedHover } from "./AnimatedHover";
import toolAdobeIllustrator from "../assets/tool-adobe-illustrator-cutout.png";
import toolChatgpt from "../assets/tool-chatgpt-cutout.png";
import toolClaude from "../assets/tool-claude-cutout.png";
import toolFigma from "../assets/tool-figma-cutout.png";
import heroPortrait from "../assets/hero-portrait.png";

gsap.registerPlugin(ScrollTrigger);

const backgroundTools = [
  {
    name: "Figma",
    src: toolFigma,
    className: "left-[-1rem] top-[36%] w-44 xl:left-[4%] xl:w-56",
    rotate: -11,
    entranceX: -44,
    entranceY: 28,
    delay: 0,
    floatY: -16,
    drift: 3,
    duration: 5.8
  },
  {
    name: "Adobe Illustrator",
    src: toolAdobeIllustrator,
    className: "left-[17%] top-[11%] w-36 xl:left-[22%] xl:top-[13%] xl:w-44",
    rotate: 10,
    entranceX: -18,
    entranceY: -36,
    delay: 0.18,
    floatY: -12,
    drift: -2.5,
    duration: 6.4
  },
  {
    name: "ChatGPT",
    src: toolChatgpt,
    className: "right-[18%] top-[10%] w-36 xl:right-[23%] xl:top-[12%] xl:w-44",
    rotate: -9,
    entranceX: 18,
    entranceY: -36,
    delay: 0.36,
    floatY: -14,
    drift: 2.5,
    duration: 6.1
  },
  {
    name: "Claude",
    src: toolClaude,
    className: "right-[-1rem] top-[37%] w-44 xl:right-[4%] xl:w-56",
    rotate: 12,
    entranceX: 44,
    entranceY: 28,
    delay: 0.54,
    floatY: -18,
    drift: -3,
    duration: 6.8
  }
];

const scrambleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

function scrambleTextTo(element: HTMLElement, finalText: string, delay: number) {
  const state = { progress: 0 };

  return gsap.to(state, {
    progress: 1,
    duration: 1.25,
    delay,
    ease: "power3.out",
    onUpdate: () => {
      const revealedCharacterCount = Math.floor(state.progress * finalText.length);
      const scrambledText = finalText
        .split("")
        .map((character, index) => {
          if (character === " ") {
            return " ";
          }

          if (index < revealedCharacterCount) {
            return character;
          }

          return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
        })
        .join("");

      element.textContent = scrambledText;
    },
    onComplete: () => {
      element.textContent = finalText;
    }
  });
}

function BackgroundToolIcon({
  tool,
  setShellRef,
  setImageRef
}: {
  tool: (typeof backgroundTools)[number];
  setShellRef: (node: HTMLDivElement | null) => void;
  setImageRef: (node: HTMLImageElement | null) => void;
}) {
  return (
    <div
      ref={setShellRef}
      aria-hidden="true"
      className={`absolute hidden lg:block ${tool.className}`}
      style={{ opacity: 0 }}
    >
      <img
        ref={setImageRef}
        src={tool.src}
        alt=""
        className="w-full select-none drop-shadow-[0_30px_45px_rgba(0,0,0,0.45)]"
        loading="eager"
      />
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundLayerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const workArrowRef = useRef<SVGSVGElement>(null);
  const workButtonFillRef = useRef<HTMLDivElement>(null);
  const contactButtonFillRef = useRef<HTMLDivElement>(null);
  const contactButtonLabelRef = useRef<HTMLSpanElement>(null);
  const backgroundIconShellRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundIconImageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const animateWorkArrow = () => {
    const arrow = workArrowRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!arrow || prefersReducedMotion) {
      return;
    }

    gsap.killTweensOf(arrow);
    gsap.timeline()
      .to(arrow, {
        y: 18,
        autoAlpha: 0,
        duration: 0.16,
        ease: "power2.in",
      })
      .set(arrow, { y: -16 })
      .to(arrow, {
        y: 0,
        autoAlpha: 1,
        duration: 0.32,
        ease: "back.out(2)",
      });
  };

  const handleWorkButtonEnter = () => {
    const fill = workButtonFillRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    animateWorkArrow();

    if (!fill) {
      return;
    }

    gsap.to(fill, {
      scaleY: 1,
      duration: prefersReducedMotion ? 0 : 0.25,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleWorkButtonLeave = () => {
    const fill = workButtonFillRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fill) {
      return;
    }

    gsap.to(fill, {
      scaleY: 0,
      duration: prefersReducedMotion ? 0 : 0.38,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  const handleContactButtonEnter = () => {
    const fill = contactButtonFillRef.current;
    const label = contactButtonLabelRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fill) {
      return;
    }

    if (label) {
      gsap.to(label, {
        color: "#171717",
        duration: prefersReducedMotion ? 0 : 0.18,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    gsap.to(fill, {
      scaleY: 1,
      duration: prefersReducedMotion ? 0 : 0.25,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleContactButtonLeave = () => {
    const fill = contactButtonFillRef.current;
    const label = contactButtonLabelRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fill) {
      return;
    }

    if (label) {
      gsap.to(label, {
        color: "#ffffff",
        duration: prefersReducedMotion ? 0 : 0.18,
        ease: "power2.out",
        overwrite: "auto",
      });
    }

    gsap.to(fill, {
      scaleY: 0,
      duration: prefersReducedMotion ? 0 : 0.38,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  };

  useLayoutEffect(() => {
    const shells = backgroundIconShellRefs.current.filter(Boolean) as HTMLDivElement[];
    const images = backgroundIconImageRefs.current.filter(Boolean) as HTMLImageElement[];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(backgroundLayerRef.current, { y: 0, autoAlpha: 1 });

      if (prefersReducedMotion) {
        shells.forEach((shell, index) => {
          gsap.set(shell, {
            autoAlpha: 0.5,
            rotation: backgroundTools[index].rotate,
            scale: 1
          });
        });
        return;
      }

      const intro = gsap.timeline({ delay: 0.3 });

      shells.forEach((shell, index) => {
        const tool = backgroundTools[index];

        intro.fromTo(
          shell,
          {
            autoAlpha: 0,
            x: tool.entranceX,
            y: tool.entranceY,
            rotation: tool.rotate - tool.drift,
            scale: 0.86,
            filter: "blur(8px)"
          },
          {
            autoAlpha: 0.58,
            x: 0,
            y: 0,
            rotation: tool.rotate,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power3.out"
          },
          tool.delay
        );
      });

      intro.call(() => {
        images.forEach((image, index) => {
          const tool = backgroundTools[index];

          gsap.to(image, {
            y: tool.floatY,
            rotation: tool.drift,
            duration: tool.duration,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.15
          });
        });
      });

      gsap.to(backgroundLayerRef.current, {
        y: -360,
        autoAlpha: 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const firstName = firstNameRef.current;
    const lastName = lastNameRef.current;

    if (!firstName || !lastName) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      firstName.textContent = "DJ";
      lastName.textContent = "Delos Santos";
      return;
    }

    const ctx = gsap.context(() => {
      firstName.textContent = "##";
      lastName.textContent = "#### ######";

      gsap.timeline({ delay: 0.55 })
        .add(scrambleTextTo(firstName, "DJ", 0), 0)
        .add(scrambleTextTo(lastName, "Delos Santos", 0.12), 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from cursor to photo center
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Only apply effect if cursor is within 400px of the photo
        if (distance < 400) {
          const strength = Math.max(0, 1 - distance / 400);
          mouseX.set((distanceX / 6) * strength);
          mouseY.set((distanceY / 6) * strength);
        } else {
          mouseX.set(0);
          mouseY.set(0);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={sectionRef} className="relative isolate min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
      <div ref={backgroundLayerRef} className="absolute inset-0 z-[1] pointer-events-none">
        {backgroundTools.map((tool, index) => (
          <BackgroundToolIcon
            key={tool.name}
            tool={tool}
            setShellRef={(node) => {
              backgroundIconShellRefs.current[index] = node;
            }}
            setImageRef={(node) => {
              backgroundIconImageRefs.current[index] = node;
            }}
          />
        ))}
      </div>

      {/* Profile Photo - Magnetic Effect */}
      <motion.div
        ref={photoRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-8 right-8 z-20 hidden md:block lg:top-12 lg:right-12"
        style={{
          x,
          y
        }}
      >
        <div className="relative group cursor-pointer">
          {/* Animated gradient border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 animate-pulse" />
          
          {/* Photo container */}
          <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-neutral-950 bg-neutral-900 group-hover:scale-105 transition-transform duration-500">
            <img src={heroPortrait} alt="Dan Joseph Delos Santos" className="w-full h-full object-cover" />
            
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-neutral-950 flex items-center justify-center">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Mobile Photo - Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-8 md:hidden"
        >
          <div className="relative group">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 rounded-full opacity-75 blur-sm animate-pulse" />
            
            {/* Photo container */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-neutral-950 bg-neutral-900">
              <img src={heroPortrait} alt="Dan Joseph Delos Santos" className="w-full h-full object-cover" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-400 rounded-full border-4 border-neutral-950 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-neutral-300">Available for new opportunities</span>
          </div>
        </motion.div>

        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.03em'
            }}
          >
            <span ref={firstNameRef} className="block sm:inline text-white">DJ</span>{" "}
            <span ref={lastNameRef} className="block sm:inline bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
              Delos Santos
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <p className="text-2xl lg:text-3xl text-neutral-300 font-light">
              Senior Product Designer (UX/UI) | Fintech • SaaS • AI-Powered Products | End-to-End Product Design
            </p>
            <p className="text-lg lg:text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
              17+ years of experience designing clear, scalable product experiences across fintech, marketplaces, SaaS, and AI-assisted workflows.
              Turning complex requirements into intuitive, production-ready interfaces.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          <AnimatedHover className="rounded-full">
            <a
              href="#work"
              onPointerEnter={handleWorkButtonEnter}
              onPointerLeave={handleWorkButtonLeave}
              className="group relative block px-6 sm:px-8 py-3 sm:py-4 bg-white text-neutral-950 rounded-full overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-[2] flex items-center gap-2 whitespace-nowrap">
                View My Work
                <ArrowDown ref={workArrowRef} className="w-4 h-4" />
              </span>
              <div
                ref={workButtonFillRef}
                className="absolute inset-0 z-[1] origin-bottom bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"
                style={{ transform: "scaleY(0)" }}
              />
            </a>
          </AnimatedHover>
          
          <AnimatedHover className="rounded-full">
            <a
              href="#contact"
              onPointerEnter={handleContactButtonEnter}
              onPointerLeave={handleContactButtonLeave}
              className="group relative block overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white backdrop-blur-sm text-sm sm:text-base whitespace-nowrap"
            >
              <span ref={contactButtonLabelRef} className="relative z-[2]">
                Get in Touch
              </span>
              <div
                ref={contactButtonFillRef}
                className="absolute inset-0 z-[1] origin-bottom bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"
                style={{ transform: "scaleY(0)" }}
              />
            </a>
          </AnimatedHover>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
