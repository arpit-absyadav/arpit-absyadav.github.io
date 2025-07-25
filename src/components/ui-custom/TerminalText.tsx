import { ReactNode, useState, useEffect } from 'react';

interface TerminalTextProps {
  children: string;
  typingSpeed?: number;
  startDelay?: number;
  className?: string;
}

export default function TerminalText({ 
  children, 
  typingSpeed = 50, 
  startDelay = 0,
  className = "" 
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      
      let currentText = '';
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < children.length) {
          currentText += children.charAt(currentIndex);
          setDisplayedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [children, typingSpeed, startDelay]);

  return (
    <div className={`terminal-text ${className}`}>
      {displayedText}
      {isTyping && <span className="animate-pulse">_</span>}
    </div>
  );
}