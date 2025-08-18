import { ReactNode } from 'react';

interface ServerSectionProps {
  children: ReactNode;
  className?: string;
}

export default function ServerSection({ children, className = '' }: ServerSectionProps) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}
