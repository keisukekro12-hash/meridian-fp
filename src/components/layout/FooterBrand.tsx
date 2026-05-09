import { Logo } from '@/components/ui/Logo';

export const FooterBrand = () => (
  <div>
    <Logo />
    <p
      style={{
        marginTop: '24px',
        fontSize: '13px',
        lineHeight: '1.9',
        color: 'var(--fg-muted)',
        letterSpacing: '0.02em',
      }}
    >
      中立の立場からお客様の資産形成・
      ライフプラン設計・保険見直し・
      住宅購入をトータルサポートする
      独立系ファイナンシャルプランナー事務所です。
    </p>
  </div>
);
