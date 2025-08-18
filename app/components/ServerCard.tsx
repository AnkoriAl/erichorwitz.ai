import { ReactNode } from 'react';

interface ServerCardProps {
  children: ReactNode;
  className?: string;
}

export default function ServerCard({ children, className = '' }: ServerCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  );
}
