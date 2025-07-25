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
              I'm a seasoned Full Stack Engineer and DevOps Specialist with 8+ years of experience in building scalable applications, 
              real-time data pipelines, and cloud infrastructure.
            </p>
            <p className="mb-4 text-muted-foreground">
              Currently at Zemoso, I lead the Telematics module that processes 10M+ sensor events daily from over 15,000 connected vehicles, 
              handling time-series data, fault alerts, and analytics.
            </p>
            <p className="text-muted-foreground">
              I excel at designing and maintaining infrastructure that handles high throughput, ensuring reliability and performance under scale.
            </p>
          </div>
          
          <div>
            <TerminalSection title="about">
              <div className="text-[#00ff00]">
                <p className="mb-2">{'>'} Location: Gurgaon, India</p>
                <p className="mb-2">{'>'} Email: arpit.absyadav@gmail.com</p>
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