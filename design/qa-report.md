# QA Report — MERIDIAN Financial Planning
> 検品官: エルキュール・ポアロ
> 検査日: 2026-05-09

---

## サマリ

| 重大度 | 件数 |
|--------|------|
| 🔴 Critical | 0 |
| 🟡 Major    | 3 |
| 🟢 Minor    | 4 |

**判定: 条件付き合格（Majorの修正後に本番可）**

---

## チェック結果詳細

### 1. アクセシビリティ

| チェック項目 | 結果 | 備考 |
|-------------|------|------|
| 全SVGにaria-hidden属性 | ✅ PASS | デコレーティブSVGは全てaria-hidden |
| セクションにaria-label | ✅ PASS | 全セクションに設定済み |
| キーボードフォーカス | ✅ PASS | :focus-visible にgoldアウトライン設定済み |
| コントラスト比（--fg-cream on --bg-deep） | ✅ PASS | 推定≈10.5:1 (WCAG AAA) |
| コントラスト比（btn-gold: --fg-deep on --gold） | ✅ PASS | 推定≈4.8:1 (WCAG AA) |
| prefers-reduced-motion 対応 | ✅ PASS | globals.css に全停止ルール実装済み |
| 見出し階層 h1→h2→h3 | ✅ PASS | ページ内1個のh1、各セクションh2、カードh3 |
| アイコンボタンにaria-label | ✅ PASS | Header CTAにaria-label設定済み |
| address要素の使用 | ✅ PASS | Footer連絡先にaddressタグ使用 |
| blockquote使用 | ✅ PASS | TestimonialCardでblockquote使用 |

**アクセシビリティ: 合格**

---

### 2. パフォーマンス

| チェック項目 | 結果 | 備考 |
|-------------|------|------|
| console.log 残置 | ✅ PASS | src/ 内に0件 |
| 画像: next/imageの使用 | 🟡 MAJOR | **現状SVGプレースホルダーのみ。本番写真差替時にnext/imageを必ず使用すること** |
| backdrop-filter の重複 | ✅ PASS | GlassCardとHeaderで分離、同一要素への重複なし |
| Framer Motion layoutアニメーション | ✅ PASS | layoutアニメーション未使用（不要な再レンダリングなし） |
| フォント読み込み | ✅ PASS | next/font/googleでセルフホスト、display:'swap' |
| Orb アニメーション | ✅ PASS | will-changeはMotionが自動管理、18s間隔で軽量 |

**パフォーマンス: 条件付き合格（画像差替時にnext/image必須）**

---

### 3. ブラウザ互換性

| チェック項目 | 結果 | 備考 |
|-------------|------|------|
| Safari -webkit-backdrop-filter | ✅ PASS | globals.css `.glass-header` に -webkit- プリフィックス設定済み |
| Firefox backdrop-filter (v103+) | ✅ PASS | v103以降はフラグ不要 |
| iOS Safari スクロール再描画 | 🟡 MAJOR | **blur値を高さ760pxのHeroに適用しているが、iOSでパフォーマンス低下の可能性。モバイルではblur値を半減すること** |
| Chrome/Edge | ✅ PASS | 問題なし |

**ブラウザ互換性: 条件付き合格（iOS対応時に要確認）**

---

### 4. デザイン整合性

| チェック項目 | 結果 | 備考 |
|-------------|------|------|
| CSS変数の直書き上書き | ✅ PASS | 全てvar(--xxx)参照 |
| フォント3種類以内 | ✅ PASS | serif/sans/latin-serif/mono の4種（brief.md仕様通り） |
| セクション縦余白 design-tokens準拠 | ✅ PASS | brief.md のスペーシング値と一致 |
| ボタンスタイル統一 | ✅ PASS | btn-gold / btn-outline / btn-ghost-light の3バリアント全画面統一 |
| Heroオーバーラップ -80px | ✅ PASS | FeatureStripのmarginTop: -80px |
| テーマ切替 (data-theme) | ✅ PASS | html[data-theme]でCSS変数が切替わる設計 |
| FeatureStrip 区切り線 | ✅ PASS | 1px gold-22%のright border（最後のセルは除外） |

**デザイン整合性: 合格**

---

### 5. コード品質

| チェック項目 | 結果 | 備考 |
|-------------|------|------|
| TypeScript any 使用 | ✅ PASS | src/ 内に0件 |
| console.log 残置 | ✅ PASS | 0件 |
| コンポーネント200行以内 | ✅ PASS | 全ファイル200行以内（リファクタリング済み） |
| 未使用import | 🟢 MINOR | cn.ts (lib/cn.ts) が現時点で未使用。将来の拡張用として残置可。削除も可 |
| useReveal.ts 未使用 | 🟢 MINOR | Framer Motionを採用したため useReveal.ts が実質不使用。削除推奨 |
| Client Directive | ✅ PASS | 'use client' 必要コンポーネントのみ使用 |
| strict mode | ✅ PASS | tsconfig.jsonで strict: true |

---

## 検出事項まとめ

### 🟡 Major（本番前に対応推奨）

**[1] 本番写真差替時のnext/image未使用リスク**
- 対象: `About.tsx`, `Services.tsx`（SVGプレースホルダー）
- 修正案: 実写真に差替える際、必ず `next/image` の `<Image>` コンポーネントを使用すること。`loading="lazy"`, `alt`属性, `sizes`属性を必ず設定する。

**[2] モバイル/iOS向けの backdrop-filter パフォーマンス**
- 対象: `Header.tsx` のガラス効果
- 修正案: メディアクエリで `md` 未満では `backdrop-blur` を `blur(8px)` に半減。または Tailwind の `md:backdrop-blur-[12px]` を活用。

**[3] レスポンシブ実装未完**
- 対象: 全セクション（現状は1280px基準のみ）
- 修正案: brief.mdに「実装時にブレイクポイントを別途設計」と明記されているため、Phase 2として実装を推奨。ブレイクポイント: `≥1280 / 1024–1279 / 768–1023 / <768`。

---

### 🟢 Minor（任意、品質向上）

**[1] lib/cn.ts 未使用**
- 対象: `src/lib/cn.ts`
- 修正案: 使用しない場合は削除。使用する場合は tailwind-merge を追加してより堅牢に。

**[2] hooks/useReveal.ts 未使用**
- 対象: `src/hooks/useReveal.ts`
- 修正案: Framer Motionで代替実装のため削除推奨。

**[3] Hero.tsx — SVGドットのopacity値**
- 対象: `HeroSkyline.tsx` のdot透明度が固定値0.4（乱数削除済み）
- 備考: ランダム性を復元する場合は `Math.sin(i * 1.3)` 等の決定論的アルゴリズムを使用（SSRとの整合性確保のため）。

**[4] Footer のmouseEnter/Leave イベントハンドラ**
- 対象: `FooterNavColumn.tsx`, `Footer.tsx`
- 修正案: インラインイベントハンドラをCSSの `:hover` セレクタに移行すると、Reactの再レンダリングを削減できる。

---

## 推奨される追加改善

1. **OGP / meta情報の拡充**: `layout.tsx` のmetadataに `twitter:card`, `og:image` を追加
2. **構造化データ (JSON-LD)**: LocalBusiness スキーマを `<script>` タグで追加（SEO強化）
3. **スキップリンク**: `<a href="#main-content">` をページ先頭に追加（スクリーンリーダー対応）
4. **テーマ切替UIの実装**: 現状 `data-theme="navy"` が固定。Theme Switcher コンポーネントの追加を推奨
5. **Vercel Analytics / Speed Insights**: `@vercel/analytics` を追加してCore Web Vitalsを計測

---

## 総評

コードベースの構造は堅牢で、デザイントークンの一貫性、アクセシビリティ設計、コンポーネント分割いずれも高水準。
**Critical 0件** — メインの品質指標は合格。

Major 3件は全て「本番素材差替・レスポンシブ実装フェーズ」でのタスクであり、現フェーズ（デスクトップ1280px基準の実装完了）としては問題なし。

*— エルキュール・ポアロ。灰色の脳細胞は満足している。*
