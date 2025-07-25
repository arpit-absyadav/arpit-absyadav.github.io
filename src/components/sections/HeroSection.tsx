import { Button } from '@/components/ui/button';
import GlitchText from '../ui-custom/GlitchText';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="matrix-code"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <GlitchText>Arpit Yadav</GlitchText>
          </h1>
          
          <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#00ff00] to-transparent my-4"></div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-[#00ff00] font-light tracking-widest typing-animation">
            FULLSTACK ENGINEER & DEVOPS SPECIALIST
          </h2>
          
          <p className="max-w-2xl text-muted-foreground">
            Specializing in building scalable systems and data pipelines. 
            8+ years of experience with Node.js, TypeScript, GoLang, and AWS.
            Currently spearheading Telematics systems processing 10M+ events daily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild 
              className="bg-[#00ff00] text-black hover:bg-[#00ff00]/80"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10"
            >
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#00ff00]">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
}