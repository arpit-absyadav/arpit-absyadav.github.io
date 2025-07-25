import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';
import GlitchText from '../ui-custom/GlitchText';
import TerminalSection from '../ui-custom/TerminalSection';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ cat resume.pdf</GlitchText>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <TerminalSection title="resume">
            <div className="space-y-6">
              <div className="font-mono text-[#00ff00] text-sm">
                <p className="mb-2">{'>'} ACCESSING FILE: resume.pdf</p>
                <p className="mb-2">{'>'} RENDERING PREVIEW...</p>
                <p>{'>'} FILE READY FOR DOWNLOAD ✓</p>
              </div>
              
              <div className="flex justify-center mt-6">
                <Button 
                  asChild 
                  className="bg-[#00ff00] text-black hover:bg-[#00ff00]/80 flex items-center gap-2"
                >
                  <a href="#" onClick={(e) => {
                    e.preventDefault(); 
                    alert("In a real site, this would download the resume PDF");
                  }}>
                    <FileDown className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </TerminalSection>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Want to discuss a project or job opportunity? Get in touch!
            </p>
            <div className="mt-4">
              <Button 
                asChild 
                variant="outline" 
                className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}