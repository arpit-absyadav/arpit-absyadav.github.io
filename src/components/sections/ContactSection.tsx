import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import GlitchText from '../ui-custom/GlitchText';
import TerminalSection from '../ui-custom/TerminalSection';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, you would send this data to a backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submitted state after showing success message
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
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
                  <p className="text-muted-foreground">
                    Gurgaon, India
                  </p>
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
          
          <div>
            <h3 className="text-xl font-mono text-[#00ff00] mb-6 terminal-text">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-[#00ff00]/30 focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-[#00ff00]/30 focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-black/50 border-[#00ff00]/30 focus:border-[#00ff00] focus:ring-[#00ff00]/20"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[#00ff00] text-black hover:bg-[#00ff00]/80"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitted && (
                <div className="p-3 bg-[#00ff00]/10 border border-[#00ff00] text-[#00ff00] rounded text-sm">
                  Message sent successfully! I'll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}