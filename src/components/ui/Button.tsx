'use client';

import { ReactNode } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

type Variant = 'gold' | 'outline' | 'ghost-light';
type IconType = 'arrow' | 'phone' | 'mail' | 'none';

type Props = {
  children: ReactNode;
  variant?: Variant;
  icon?: IconType;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
};

const iconComponents: Record<Exclude<IconType, 'none'>, ReactNode> = {
  arrow: <ArrowRight size={16} strokeWidth={1.2} />,
  phone: <Phone size={16} strokeWidth={1.2} />,
  mail:  <Mail size={16} strokeWidth={1.2} />,
};

export const Button = ({
  children,
  variant = 'gold',
  icon = 'arrow',
  onClick,
  href,
  className = '',
  type = 'button',
}: Props) => {
  const variantClass = `btn btn-${variant}`;
  const iconNode = icon !== 'none' ? iconComponents[icon] : null;

  const content = (
    <>
      <span>{children}</span>
      {iconNode && <span aria-hidden>{iconNode}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${variantClass} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${variantClass} ${className}`}>
      {content}
    </button>
  );
};
