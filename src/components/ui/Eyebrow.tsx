import { CSSProperties } from 'react';

type Props = {
  children: string;
  className?: string;
  style?: CSSProperties;
};

export const Eyebrow = ({ children, className = '', style }: Props) => (
  <p className={`eyebrow ${className}`} style={style}>
    {children}
  </p>
);
