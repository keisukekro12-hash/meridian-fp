/**
 * 条件付きクラス名結合ユーティリティ
 * tailwind-mergeの代わりに軽量実装
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
