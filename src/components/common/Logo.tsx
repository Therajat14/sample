import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`text-primary ${className}`}>
      <GraduationCap strokeWidth={1.5} />
    </div>
  );
};

export default Logo;