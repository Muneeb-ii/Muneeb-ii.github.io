import { ReactNode, forwardRef } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section({ children, className = '', id, fullWidth = false }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        className={`py-16 ${fullWidth ? '' : 'px-4 sm:px-6 lg:px-8'} ${className}`}
      >
        <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto'}>{children}</div>
      </section>
    );
  }
);
