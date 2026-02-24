import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef, useEffect } from "react";

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Profile Photo - Magnetic Effect */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-8 right-8 lg:top-12 lg:right-12 hidden md:block"
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
              <ImageWithFallback
                src="https://i.ibb.co/3mNyKqC6/DJ-2x2.png"
                alt="Dan Joseph Delos Santos"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-neutral-950 flex items-center justify-center">
              <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

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
              <ImageWithFallback
                src="https://i.ibb.co/3mNyKqC6/DJ-2x2.png"
                alt="Dan Joseph Delos Santos"
                className="w-full h-full object-cover"
              />
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
            <span className="block sm:inline text-white">DJ </span>
            <span className="block sm:inline bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 text-transparent bg-clip-text">
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
              Product Designer / Senior UIUX Designer
            </p>
            <p className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto">
              I design systems that reduce uncertainty and build confidence.
              17 years turning complex challenges into clarity.
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
          <a
            href="#work"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-neutral-950 rounded-full overflow-hidden transition-transform hover:scale-105 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors backdrop-blur-sm text-sm sm:text-base whitespace-nowrap"
          >
            Get in Touch
          </a>
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