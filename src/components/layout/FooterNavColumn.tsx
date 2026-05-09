type Props = {
  heading: string;
  items: { label: string; href: string }[];
};

export const FooterNavColumn = ({ heading, items }: Props) => (
  <div>
    <h3
      style={{
        fontFamily: 'var(--font-mono), monospace',
        fontSize: '10px',
        letterSpacing: '0.30em',
        color: 'var(--gold)',
        textTransform: 'uppercase',
        marginBottom: '20px',
      }}
    >
      {heading}
    </h3>
    <ul style={{ listStyle: 'none' }}>
      {items.map((item) => (
        <li key={item.label} style={{ marginBottom: '12px' }}>
          <a
            href={item.href}
            style={{
              fontSize: '13px',
              color: 'var(--fg-muted)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-cream)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)';
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
