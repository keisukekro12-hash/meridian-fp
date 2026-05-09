type Props = {
  className?: string;
};

export const GoldRule = ({ className = '' }: Props) => (
  <span className={`gold-rule ${className}`} aria-hidden />
);
