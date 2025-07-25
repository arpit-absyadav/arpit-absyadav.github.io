import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md shadow-md shadow-[#00ff00]/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-[#00ff00] tracking-tight terminal-text">
              A.Y<span className="blink">_</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium terminal-text hover:text-[#00ff00] transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#resume" 
              className="px-4 py-2 rounded border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 transition-colors"
            >
              Resume
            </a>
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#00ff00]">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 border-l border-[#00ff00]/30 text-white">
                <nav className="flex flex-col space-y-6 mt-10">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium terminal-text hover:text-[#00ff00] transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a 
                    href="#resume" 
                    className="px-4 py-2 rounded border border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00]/10 transition-colors w-fit"
                  >
                    Resume
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}