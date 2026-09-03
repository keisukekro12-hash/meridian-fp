import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '面接カンペ｜エンパワー',
  description: '買取反響営業｜二次面接準備スクリプト',
};

/** このツールはメインサイトのヘッダー/フッターを使わない独立ページ */
export default function MensetsuEmpowherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
