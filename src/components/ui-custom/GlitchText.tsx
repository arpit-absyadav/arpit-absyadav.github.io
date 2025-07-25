interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  return (
    <span className={`text-glitch ${className}`} data-text={children}>
      {children}
    </span>
  );
}