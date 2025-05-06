
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CounterProps {
  end: number;
  title: string;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, title, suffix = '', duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const counter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(counter);
      }
    };
    
    animationFrame = requestAnimationFrame(counter);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary animate-counter">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-2">{title}</div>
    </div>
  );
};

const statsData = [
  { value: 3, title: 'Years of Experience', suffix: '+' },
  { value: 20, title: 'Projects Completed', suffix: '+' },
  { value: 4, title: 'Research Publications', suffix: '' }
];

const Stats = () => {
  return (
    <div className="section-container py-12">
      <div className="glass-card p-8">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8"
        )}>
          {statsData.map((stat, index) => (
            <Counter 
              key={index}
              end={stat.value}
              title={stat.title}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
