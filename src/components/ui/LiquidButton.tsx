import React from 'react';

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
}) => {
  const buttonContent = (
    <span className="relative z-10 transition-colors duration-500 ease-luxury group-hover:text-zinc-100">
      {children}
    </span>
  );

  const buttonClasses = `
    group relative overflow-hidden
    flex items-center justify-center
    bg-transparent border border-zinc-950
    transition-all duration-500 ease-luxury
    ${className}
  `;

  const waveClasses = `
    absolute inset-0 bg-zinc-950
    transform translate-y-full
    transition-transform duration-500 ease-luxury
    group-hover:translate-y-0
  `;

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        <span className={waveClasses} />
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={waveClasses} />
      {buttonContent}
    </button>
  );
};
