import { motion } from "motion/react";
import { Mail, Linkedin, Calendar, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-32 lg:py-40 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm text-neutral-300">Get in Touch</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl mb-6">
            Let's <span className="text-neutral-500">Talk</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-12">
            Interested in working together? I'd love to hear from you.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <motion.a
              href="mailto:djdelossantos@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg text-white mb-2">Email Me</h3>
              <p className="text-sm text-neutral-400 mb-3">djdelossantos@gmail.com</p>
              <div className="flex items-center justify-center gap-2 text-sm text-violet-400">
                <span>Send a message</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/djdelossantos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg text-white mb-2">LinkedIn</h3>
              <p className="text-sm text-neutral-400 mb-3">Connect with me</p>
              <div className="flex items-center justify-center gap-2 text-sm text-blue-400">
                <span>View profile</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>

            {/* Calendar */}
            <motion.a
              href="https://calendly.com/djdelossantos"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg text-white mb-2">Schedule a Call</h3>
              <p className="text-sm text-neutral-400 mb-3">30-minute chat</p>
              <div className="flex items-center justify-center gap-2 text-sm text-green-400">
                <span>Book time</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          </div>

          {/* Footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-neutral-500 text-sm"
          >
            Based in the Philippines • Available for full-time, remote roles, and relocation
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}