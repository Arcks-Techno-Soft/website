import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.03] active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-brand text-white hover:bg-brand-hover shadow-sm',
      secondary: 'bg-card text-foreground hover:bg-border border border-border shadow-sm',
      outline: 'border-2 border-brand bg-transparent text-brand hover:bg-brand/5',
      ghost: 'bg-transparent hover:bg-black/5 text-foreground'
    };

    const sizes = {
      sm: 'h-10 px-5 text-sm',
      md: 'h-12 px-7 text-base',
      lg: 'h-14 px-8 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
