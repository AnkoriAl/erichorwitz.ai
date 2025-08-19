import { ReactNode } from 'react';

interface ServerCardProps {
  children: ReactNode;
  className?: string;
}

export default function ServerCard({ children, className = '' }: ServerCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
