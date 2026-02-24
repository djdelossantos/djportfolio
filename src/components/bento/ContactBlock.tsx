import { Mail, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

export function ContactBlock() {
  return (
    <div className="relative h-full bg-gradient-to-br from-rose-400 via-pink-400 to-fuchsia-400 rounded-[32px] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl" />
      
      <div className="relative text-center space-y-6">
        <div className="space-y-3">
          <h2 className="text-white drop-shadow-md" style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-semibold)',
            lineHeight: 'var(--leading-h2)'
          }}>
            Looking for a Senior UX/UI Designer? Let's talk.
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto" style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 'var(--font-weight-normal)',
            lineHeight: 'var(--leading-body)'
          }}>
            I'm always open to discussing new opportunities, collaborations, or just chatting about design and craft.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="rounded-full bg-white hover:bg-white/90 text-pink-700 shadow-lg hover:shadow-xl gap-2 transition-shadow"
          >
            <Mail className="w-5 h-5" />
            dan@designstudio.com
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/60 hover:bg-white/50 text-white hover:text-white gap-2 transition-all"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
}