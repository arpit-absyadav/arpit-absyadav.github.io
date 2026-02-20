import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import GlitchText from '../ui-custom/GlitchText';
import TerminalSection from '../ui-custom/TerminalSection';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ ssh contact@arpit-yadav.dev</GlitchText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono text-[#00ff00] mb-6 terminal-text">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:arpit.abs.ydv94@gmail.com" className="hover:text-[#00ff00] transition-colors">
                      arpit.abs.ydv94@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">
                    <a href="https://linkedin.com/in/arpitabsyadav" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors">
                      linkedin.com/in/arpitabsyadav
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">GitHub</h4>
                  <p className="text-muted-foreground">
                    <a href="https://github.com/arpit-absyadav" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ff00] transition-colors">
                      github.com/arpit-absyadav
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-muted-foreground">Gurgaon, India</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <TerminalSection title="ping">
                <div className="font-mono text-[#00ff00] text-sm">
                  <p className="mb-2">{'>'} INITIATING CONNECTION...</p>
                  <p className="mb-2">{'>'} PING arpit-yadav.dev: ICMP echo_request</p>
                  <p className="mb-2">{'>'} 64 bytes from arpit-yadav.dev: icmp_seq=1 ttl=64 time=0.045 ms</p>
                  <p className="mb-2">{'>'} 64 bytes from arpit-yadav.dev: icmp_seq=2 ttl=64 time=0.038 ms</p>
                  <p className="mb-2">{'>'} 64 bytes from arpit-yadav.dev: icmp_seq=3 ttl=64 time=0.041 ms</p>
                  <p>{'>'} CONNECTION ESTABLISHED ✓</p>
                </div>
              </TerminalSection>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="space-y-4">
              <div className="h-20 w-20 rounded-full bg-[#00ff00]/10 flex items-center justify-center text-[#00ff00] mx-auto">
                <Linkedin className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-mono text-[#00ff00] terminal-text">Let's Connect</h3>
              <p className="text-muted-foreground max-w-sm">
                The best way to reach me is via LinkedIn. I'm open to new opportunities, collaborations, and conversations.
              </p>
            </div>

            <Button
              asChild
              className="bg-[#00ff00] text-black hover:bg-[#00ff00]/80 px-8 py-6 text-lg font-mono"
            >
              <a href="https://linkedin.com/in/arpitabsyadav" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>

            <p className="text-xs text-muted-foreground font-mono">
              {'>'} linkedin.com/in/arpitabsyadav
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
