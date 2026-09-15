import React from 'react';
import { 
  Activity, 
  CircleDot, 
  Waves, 
  Shield, 
  Flame, 
  Sparkles, 
  Zap, 
  Trophy,
  LucideProps
} from 'lucide-react';

interface SportIconProps extends LucideProps {
  sportId: string;
  className?: string;
}

export const SportIcon: React.FC<SportIconProps> = ({ sportId, className = '', ...props }) => {
  const normalizedId = (sportId || '').toLowerCase().replace(/^sport-/, '');
  switch (normalizedId) {
    case 'football':
      return <Activity className={className} {...props} />;
    case 'basketball':
      return <CircleDot className={className} {...props} />;
    case 'swimming':
      return <Waves className={className} {...props} />;
    case 'karate':
      return <Shield className={className} {...props} />;
    case 'kickboxing':
      return <Flame className={className} {...props} />;
    case 'gymnastics':
      return <Sparkles className={className} {...props} />;
    case 'roller-skating':
    case 'skating':
      return <Zap className={className} {...props} />;
    default:
      return <Trophy className={className} {...props} />;
  }
};

export default SportIcon;
