import { ReactNode } from 'react';

interface TerminalSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalSection({ 
  title, 
  children,
  className = "" 
}: TerminalSectionProps) {
  return (
    <div className={`rounded-md hacker-border hacker-bg p-4 ${className}`}>
      <div className="flex items-center space-x-2 border-b border-[#00ff00]/20 pb-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <div className="flex-1 text-center text-sm font-mono text-[#00ff00]">{title}.sh</div>
      </div>
      <div className="font-mono">
        {children}
      </div>
    </div>
  );
}