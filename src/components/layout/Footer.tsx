import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#00ff00]/20 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              <span className="terminal-text">
                © {new Date().getFullYear()} Arpit Yadav
              </span>
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/arpit-absyadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00ff00] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/arpitabsyadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#00ff00] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:arpit.abs.ydv94@gmail.com"
              className="text-muted-foreground hover:text-[#00ff00] transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-muted-foreground terminal-text">
              &lt;/&gt; with &hearts; in React + TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}