import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '面接カンペ｜エアレックス',
  description: 'プロジェクトマネジメント職｜一次面接準備スクリプト',
};

export default function MensetsuAirexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
