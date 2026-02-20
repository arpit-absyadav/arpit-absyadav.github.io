import TerminalSection from '../ui-custom/TerminalSection';
import GlitchText from '../ui-custom/GlitchText';

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ whoami</GlitchText>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-mono text-[#00ff00] mb-4 terminal-text">Profile</h3>
            <p className="mb-4 text-muted-foreground">
              Backend-Heavy Full Stack & DevOps Engineer with 8+ years of experience building scalable distributed systems and SaaS platforms across environments.
            </p>
            <p className="mb-4 text-muted-foreground">
              Designed systems handling 500K+ requests/min and 10M+ events/day with focus on reliability and high availability.
              Experienced in leading engineering teams, driving architecture decisions, and delivering at scale.
            </p>
            <p className="text-muted-foreground">
              Skilled in Node.js, Go, React, AWS, and LLM-based automation to improve engineering efficiency.
            </p>
          </div>
          
          <div>
            <TerminalSection title="about">
              <div className="text-[#00ff00]">
                <p className="mb-2">{'>'} Location: Gurgaon, India</p> 
                <p className="mb-2">{'>'} Website: arpit-absyadav.github.io</p>
                <p className="mb-2">{'>'} GitHub: github.com/arpit-absyadav</p>
                <p>{'>'} LinkedIn: linkedin.com/in/arpitabsyadav</p>
              </div>
            </TerminalSection>
          </div>
        </div>
      </div>
    </section>
  );
}