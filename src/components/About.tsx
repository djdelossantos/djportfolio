import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40">
      <div className="max-w-6xl mx-auto">
        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative p-6 sm:p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 border border-white/10 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <Quote className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-violet-400/10" />
              <p className="text-lg sm:text-xl lg:text-3xl text-neutral-300 leading-relaxed italic relative z-10 px-8 sm:px-12" style={{ fontStyle: 'italic' }}>
                After 17 years, I've learned design is about trust, not just usability. I solve for why 
                people hesitate, not just what they need.
              </p>
              <Quote className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-violet-400/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}