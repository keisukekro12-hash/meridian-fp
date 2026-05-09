# Handoff: MERIDIAN Financial Planning — Homepage

## Overview
高級感のあるダーク × ゴールドのデザイン言語を採用した、独立系ファイナンシャルプランニング会社のホームページ。資産運用・ライフプラン設計・保険見直し・住宅ローン相談など、FPサービスをトータルで紹介し、無料相談へ導線する1ページ完結型のLP/HPです。

## About the Design Files
このパッケージに含まれている `reference/index.html` は **デザインリファレンス（HTMLプロトタイプ）** です。本番コードとしてそのままコピーするためのものではなく、**ビジュアル・レイアウト・インタラクションの意図を示した仕様書**として扱ってください。

タスクは、このHTMLデザインを **対象プロジェクトの既存環境（Next.js / Nuxt / Astro / Remix など）の慣習・コンポーネントライブラリ・スタイリング方針に従って実装し直す** ことです。プロジェクトがまだ無い場合は、最適なフレームワーク（推奨：Next.js App Router + TypeScript + Tailwind CSS）で再構築してください。

`reference/original-reference.jpg` は、お客様が当初共有した参考画像です（別社のデザインのため、視覚的方向性のみ参照）。MERIDIAN ブランドはこのプロジェクト用にゼロから作成したオリジナルです。

## Fidelity
**High-fidelity (hifi)** — 色・タイポグラフィ・スペーシング・インタラクションを最終仕様で作り込んだピクセル完成度のモックです。実装時はこのHTMLを基準として、ピクセル単位で再現してください。ただし、画像（ヒーロー・About・Service カード）はすべてSVG/CSSで作ったプレースホルダーです。**本番では実写写真素材に差し替える必要があります**（後述）。

## Target Viewport
デスクトップ優先設計：**1280px 基準**。レスポンシブは未実装のため、実装時にブレイクポイントを別途設計する必要があります（推奨：≥1280 / 1024–1279 / 768–1023 / <768）。

---

## Brand & Identity

- **ブランド名**: MERIDIAN Financial Planning
- **ロゴ**: 横組み2段
  - 1段目: `MERIDIAN` — Cormorant Garamond 500, 24px, letter-spacing 0.32em
  - ゴールドの 1px ヘアライン
  - 2段目: `FINANCIAL PLANNING` — 9px, letter-spacing 0.36em, gold
- **トーン**: モダン・ミニマル・上質。装飾を削ぎ落とし、余白とタイポグラフィで品位を出す方向。

---

## Design Tokens

### Color Themes
3つのカラーテーマを切替可能（Tweaksパネルで実演）。デフォルト = Navy。

#### Navy (default)
```
--bg-deep:        #0a1628   /* 主要ダーク背景 */
--bg-deep-2:      #0d1b30   /* ダーク2 (フィーチャーストリップ) */
--bg-cream:       #f5f1e8   /* ベース明るい背景 */
--bg-cream-2:     #ede7d8   /* クリーム2 (FLOW セクション) */
--fg-cream:       #f5f1e8   /* ダーク上の文字色 */
--fg-muted:       #b9c2d1   /* ダーク上のサブ文字 */
--fg-deep:        #0a1628   /* クリーム上の文字色 */
--fg-deep-muted:  #4a5568   /* クリーム上のサブ文字 */
--gold:           #c9a961   /* メインアクセント */
--gold-soft:      #d9bd7f   /* hover時 */
--line-on-deep:   rgba(201,169,97,0.22)
--line-on-cream:  rgba(10,22,40,0.12)
```

#### 墨黒 (Sumi)
```
--bg-deep:    #141414  --bg-deep-2: #1c1c1c
--bg-cream:   #f4f2ee  --bg-cream-2: #ebe8e1
--gold:       #b8956a  --gold-soft: #ccaa83
```

#### Emerald
```
--bg-deep:    #0c2a26  --bg-deep-2: #0f3530
--bg-cream:   #f1efe6  --bg-cream-2: #e7e4d6
--gold:       #c4a875  --gold-soft: #d4bc90
```

### Typography
```
serif      : "Noto Serif JP", "Hiragino Mincho ProN", serif
sans       : "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif (body default)
latin-serif: "Cormorant Garamond" (英字・ロゴ・数字)
mono       : "JetBrains Mono" (英字メタタグ・キャプション)
```

#### Type Scale
| Role               | Family       | Size | Weight | Letter-spacing | Line-height |
|--------------------|--------------|------|--------|----------------|-------------|
| Hero H1            | serif        | 56px | 400    | 0.04em         | 1.4         |
| Section H2         | serif        | 38–44px | 500 | 0.04–0.05em    | 1.5–1.6     |
| About H2           | serif        | 40px | 500    | 0.03em         | 1.6         |
| Card title         | serif        | 18–20px | 500 | 0.04em         | 1.4         |
| Body               | sans         | 13–17px | 300–400 | 0.02em      | 1.85–2.1    |
| Eyebrow (英)       | latin-serif  | 14px | 500    | 0.42em UPPER   | 1           |
| Mono tag           | mono         | 10–11px | 400 | 0.20–0.32em    | 1           |
| Step number        | latin-serif  | 38px | 500    | 0              | 1           |
| Body letter-spacing default: 0.02em (palt 1)

### Spacing
セクション縦パディング: `120–160px` 上下
コンテナ: `max-width: 1200px; padding: 0 40–48px`
グリッドギャップ: `24px` (カード間), `32–48px` (中要素), `80px` (大要素)

### Lines & Rules
- **Gold rule**: width 48px, height 1px, color `var(--gold)`, margin `24–36px`
- **Eyebrow underline**: 18px width, 1px height, gold, before label

### Buttons
| Variant         | Padding      | Min-width | Border           | Background       | Color         |
|-----------------|--------------|-----------|------------------|------------------|---------------|
| `btn-gold` (CTA primary) | 22 × 32px | 320px | none | `var(--gold)`   | `var(--bg-deep)` |
| `btn-outline` (on cream) | 16 × 26px | 240px | 1px `var(--fg-deep)` | transparent | `var(--fg-deep)` |
| `btn-ghost-light` (on dark) | 16 × 26px | 240px | 1px `var(--line-on-deep)` | transparent | `var(--fg-cream)` |

すべて `display: inline-flex; align-items: center; justify-content: space-between;` で **テキスト + 右端矢印アイコン** の構成。
Hover: gold→soft、outline→塗り反転、ghost→border gold + 8% gold tint。

### Iconography
細線 SVG アイコン（stroke-width 1.2）。`viewBox=0 0 28 28`。月・チャート・盾・人・家・封筒・電話・矢印。アイコンは `currentColor` で塗るので親要素の `color` で制御。

---

## Page Structure (Top → Bottom)

### 0. Top Bar (オプション・Tweaks で切替)
- bg `#06101e`、padding 8 × 48px、文字 11px
- 左：`· INDEPENDENT FINANCIAL PLANNING ·` (gold mono)
- 右：電話番号 + 営業時間

### 1. Header (fixed, transparent → glass)
- 初期：透明背景
- スクロール 40px 超：`rgba(10,22,40,0.92)` + `backdrop-filter: blur(12px)` + 下境界線、padding が 22px → 14px に縮小
- 左：Logo
- 中央：6項ナビ (`ホーム / 私たちについて / サービス / ご相談の流れ / お客様の声 / コラム`)、13px、gap 38px、hover で gold
- 右：「無料相談を予約する」ボタン（gold ボーダー、IconMail 付き）

### 2. Hero (height 760px, dark)
- フルブリード ダーク背景 + プレースホルダー画像（実装時：ビジネスマンシルエット × 夜景写真に差替）
- スカイライン SVG + ウィンドウドット 60点（gold 微光）
- 右寄せのコピーブロック（width 620px）
  - Eyebrow `— FOR YOUR FUTURE` + ゴールドリード線
  - H1: `未来の選択肢を、／今の戦略で広げる。`（"戦略"のみ gold）
  - Gold rule
  - サブコピー 17px / 行高 2 / muted
  - 2 CTA：`btn-gold` 「無料で相談してみる」 + `btn-ghost-light` 「サービスを見る」
- 下中央：`SCROLL` インジケータ（縦線フェード）

### 3. Feature Strip (hero に -80px overlap)
- ダーク `var(--bg-deep-2)` 3列グリッド、外枠 1px gold-22%
- 各セル：左 gold アイコン + 右テキスト（タイトル serif 18px / body 13px）
- 3項目：中立的な立場 / 資産形成のプロが伴走 / 安心の長期サポート

### 4. About (cream, 160 × 0 × 140 padding)
- 2カラム（1fr × 1.1fr、gap 80px）
- 左：Eyebrow `ABOUT` → H2「お金の不安を安心に変え、／理想の人生をデザインする。」 → gold rule → body → `btn-outline`「私たちについて」
- 右：プレースホルダー画像（4:3、ノートブック + 時計 + チャート紙のフェイク合成）
- **本番では**：マーブル/レザーデスク × 革手帳 × 時計 × 印刷物の写真に差替

### 5. Services (dark, 140 × 0 × 140)
- 中央タイトル：Eyebrow `SERVICE` + H2「お客様の目標に合わせた最適なサポートを提供します」（"最適なサポート"のみ gold）
- 4カラムグリッド（gap 24px）。各カードに：
  - 上部：5:3 アスペクトのSVG画像プレースホルダー（CITYSCAPE / FAMILY / CONTRACT / HOUSE）
  - メタ：`01 · PORTFOLIO` 等（10px gold mono）
  - アイコン → タイトル → 短文
  - Hover: `transform: translateY(-6px); border-color: gold;`
- 下部：`btn-ghost-light`「サービス一覧を見る」
- 4カード内容：
  1. 資産運用のご相談 / PORTFOLIO
  2. ライフプラン設計 / LIFE PLAN
  3. 保険の見直し・最適化 / INSURANCE
  4. 住宅購入・ローン相談 / MORTGAGE

### 6. Flow (cream-2, 160 × 0 × 140) — STEP 01-04
- 中央タイトル：Eyebrow `FLOW` + H2「ご相談の流れ」
- 4カラム、上部に gold グラデーション接続線（左8% → 右8%、top 64px）
- 各ステップ：
  - 円形 128 × 128px、cream bg、1px gold border
    - 中：`STEP` mono 10px / `01` latin-serif 38px
  - mono メタ `· CONTACT ·` 等
  - serif タイトル 20px
  - body 13px / line-height 1.9
- ステップ内容：
  1. お問い合わせ / CONTACT — ウェブまたはお電話より、無料相談をご予約ください
  2. ヒアリング / HEARING — 現在の状況・将来のご希望を丁寧にお伺いします
  3. プランご提案 / PROPOSAL — お客様だけのオリジナル資産戦略をご提案
  4. 実行と継続サポート / SUPPORT — 実行支援と定期的な見直しで、長期的に伴走

### 7. Voice / Testimonials (cream, 140 × 0 × 120)
- Eyebrow `VOICE` + H2「お客様の声」
- 3カラムカード（gap 24px、cream-2 bg、1px line border、padding 40 × 32px）
- 各カード：
  - 左上に大きな gold ダブルクオート装飾（64px、opacity 0.5）
  - アバター丸 44px（dark bg + gold アイコン） + `CASE 01` mono + 属性「30代・会社員」
  - 引用 13.5px / line-height 2
- 下部注記：「※個人の感想であり、成果を保証するものではありません。」 (11px muted)
- `btn-outline`「もっと見る」

### 8. Final CTA (dark, 120 × 0)
- 中央：Eyebrow `CONTACT` + H2 44px「資産運用の第一歩を、私たちと一緒に。」
- gold radial decoration + 30点のドット
- 2 CTA：`btn-gold`「無料相談を予約する」 + `btn-ghost-light` 電話番号 + 営業時間（IconPhone 付き）

### 9. Footer (`#06101e`, 80 × 0 × 32)
- 4カラム（1.4fr / 1fr / 1fr / 1fr、gap 48px）
  - Logo + 短い説明文
  - SERVICE リスト
  - COMPANY リスト
  - CONTACT (住所・電話・メール)
- 下部 1px gold-22 ボーダー → コピーライト + 法務リンク3本

---

## Interactions & Behavior

### Scroll-triggered Fade-in
すべての `.reveal` 要素に IntersectionObserver でクラス `.in` を付与：
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1);
}
.reveal.in { opacity: 1; transform: none; }
.reveal.delay-1 { transition-delay: 0.08s; } /* 〜 delay-4: 0.32s */
```
Observer設定：`threshold: 0.12, rootMargin: '0px 0px -80px 0px'`

### Header Scroll State
window.scrollY > 40 でヘッダー背景・blur・ボーダー切替（0.4s ease）。

### Card Hover
Service カード：`translateY(-6px)` + border gold。0.4s ease。
Nav リンク：色 → gold（0.3s）。
ボタン：背景 / borderの transition。

### Theme Switching
`html[data-theme="navy|sumi|emerald"]` を root に付与すると CSS 変数が一括差し替わる。

---

## State Management

ステートはほぼ不要（ほぼ静的LP）。React で実装する場合：
- `scrolled: boolean` — ヘッダー用
- `theme: 'navy' | 'sumi' | 'emerald'` — テーマ切替（必要なら）
- IntersectionObserver は useEffect 内でセットアップ＆クリーンアップ

データ取得：なし（コラム一覧などを追加する場合は CMS / MDX 検討）。

---

## Assets — 本番差替リスト

実装時に **必ず差し替えるプレースホルダー**：

| 場所 | 現在 | 推奨素材 |
|------|------|----------|
| Hero 背景 | グラデ + SVG スカイライン | フルブリード写真：ビジネスマンの後ろ姿シルエット + 夜景・夕景の都市 + 暖色のインテリア光（横長 1920×760+） |
| About 右側 | フェイクのデスクトップ合成 | マーブル/レザーデスクに革製手帳・万年筆・腕時計・印刷物の俯瞰写真（4:3） |
| Service カード × 4 | SVG プレースホルダー | 都市夜景 / 家族（後ろ姿）/ 契約書とペン / モダン住宅 の写真（5:3） |
| 顧客アバター × 3 | 単色 + アイコン | 線画イラスト or イニシャル文字（実名は使わない） |

写真選定指針：
- 全体のトーンを **暖色寄りのダーク（茶金混じり）** に統一
- 人物は顔が映らないシルエット / 後ろ姿を推奨（プライバシー & 普遍性）
- ロイヤリティフリー素材（Unsplash / Adobe Stock 等）から選定

---

## Files

- `reference/index.html` — 完成形プロトタイプ（単一ファイル、CSS / React / JSX 全インライン）
- `reference/original-reference.jpg` — お客様提供のオリジナル参考画像（別社デザイン、視覚的方向性のみ参照）

`index.html` 内のセクションコメント（`// ============ HERO ============` 等）でブロックを区切ってあるので、コンポーネント分割の参考にしてください。

---

## Recommended Implementation Stack

提案：
- **Next.js 14+ (App Router) + TypeScript**
- **Tailwind CSS** ＋ CSS変数（テーマ切替用）
- **Framer Motion** — Scroll fade-in 用（IntersectionObserver の代替）
- **next/font** で `Noto Serif JP` / `Noto Sans JP` / `Cormorant Garamond` / `JetBrains Mono` をセルフホスト
- **next/image** ですべての画像最適化
- アイコンは `lucide-react` か独自 SVG コンポーネント

コンポーネント分割例：
```
app/
  page.tsx
  layout.tsx
components/
  TopBar.tsx
  Header.tsx
  Hero.tsx
  FeatureStrip.tsx
  About.tsx
  Services.tsx
  ServiceCard.tsx
  Flow.tsx
  Voice.tsx
  TestimonialCard.tsx
  FinalCTA.tsx
  Footer.tsx
  ui/
    Button.tsx        // gold / outline / ghost-light
    Eyebrow.tsx
    GoldRule.tsx
    Logo.tsx
hooks/
  useScrolled.ts
  useReveal.ts
styles/
  globals.css         // CSS変数 + フォント
  themes.css          // navy / sumi / emerald
```

---

## Open Questions for the Developer

実装に入る前に確認したい点：
1. レスポンシブ要件（モバイル含むか？ ブレイクポイント設計）
2. CMS統合（コラム・お客様の声を後から増やせるようにするか？）
3. 問い合わせフォーム（無料相談の予約フローはどう実装？ メール送信 / カレンダー連携 / フォームエンジン）
4. アクセシビリティ目標（WCAG AA か AAA か）
5. 本番ブランド名 / 連絡先 / 住所の確定値
6. SEO 要件（OGP / 構造化データ / sitemap）
7. アナリティクス（GA4 / 計測設計）
