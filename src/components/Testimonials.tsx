import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with DJ has been an absolute joy! He’s a truly creative and out-of-the-box thinker, the go-to person whenever you want something fresh, and translates them into innovative, impactful solutions that often exceed expectations.",
    author: "Jen Tan",
    role: "Senior Creative Director",
    company: "Music Tribe",
    relationship: "Worked with DJ at Music Tribe"
  },
  {
    quote: "Had the pleasure of working with DJ. He consistently brings a collaborative spirit, is supportive of others, and ready to pitch in where needed. Represented our team in global meetings. His ability to communicate across regions has been a real asset.",
    author: "Dawn de Guzman",
    role: "Creative Operations Lead",
    company: "Music Tribe",
    relationship: "Worked with DJ at Music Tribe"
  },
  {
    quote: "DJ is an exceptional designer, mentor, and colleague. He has an incredible sense of design and can transform a simple idea into a fully functional prototype. He never hesitates to offer both practical and innovative solutions.",
    author: "Jane Acosta",
    role: "Senior UI/UX Designer",
    company: "CashJar",
    relationship: "Worked with DJ at CashJar"
  }
];

export function Testimonials() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm text-neutral-300">Testimonials</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl mb-6">
            What People <span className="text-neutral-500">Say</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto">
            Feedback from teammates, stakeholders, and collaborators I've worked with over the years.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-colors"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-violet-400" />
              </div>

              {/* Quote */}
              <p className="text-neutral-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-white/10">
                <div className="text-white mb-1">{testimonial.author}</div>
                <div className="text-sm text-neutral-400 mb-1">
                  {testimonial.role}, {testimonial.company}
                </div>
                <div className="text-xs text-neutral-500">{testimonial.relationship}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}