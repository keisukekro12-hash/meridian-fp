# スタイルガイド — MERIDIAN Financial Planning
> アートディレクター: ジョセフィーヌ
> 哲学: 装飾を削ぎ落とし、余白とタイポグラフィで品位を出す。

---

## 1. ブランドアイデンティティ

### コアバリュー
- **信頼性**: ダーク × ゴールドの重厚な色調。荒れ相場でも揺るがない安定感。
- **知性**: セリフ体の見出し。データと物語を同居させる。
- **誠実さ**: 独立系FPとして中立。過剰な装飾は誠実さを損なう。

### ビジュアルトーン
`モダン × ミニマル × 上質` — 不要なものを削り続けた先に残るもの。

---

## 2. カラー

### テーマシステム
3テーマ切替（`html[data-theme="navy|sumi|emerald"]`）。デフォルト：`navy`。

```css
/* globals.css に記述 */
:root,
[data-theme="navy"] {
  --bg-deep:        #0a1628;
  --bg-deep-2:      #0d1b30;
  --bg-cream:       #f5f1e8;
  --bg-cream-2:     #ede7d8;
  --fg-cream:       #f5f1e8;
  --fg-muted:       #b9c2d1;
  --fg-deep:        #0a1628;
  --fg-deep-muted:  #4a5568;
  --gold:           #c9a961;
  --gold-soft:      #d9bd7f;
  --line-on-deep:   rgba(201,169,97,0.22);
  --line-on-cream:  rgba(10,22,40,0.12);
  --topbar-bg:      #06101e;
  --footer-bg:      #06101e;
}

[data-theme="sumi"] {
  --bg-deep:        #141414;
  --bg-deep-2:      #1c1c1c;
  --bg-cream:       #f4f2ee;
  --bg-cream-2:     #ebe8e1;
  --fg-cream:       #f4f2ee;
  --fg-muted:       #a8a8a8;
  --fg-deep:        #141414;
  --fg-deep-muted:  #5a5a5a;
  --gold:           #b8956a;
  --gold-soft:      #ccaa83;
  --line-on-deep:   rgba(184,149,106,0.22);
  --line-on-cream:  rgba(20,20,20,0.12);
  --topbar-bg:      #0a0a0a;
  --footer-bg:      #0a0a0a;
}

[data-theme="emerald"] {
  --bg-deep:        #0c2a26;
  --bg-deep-2:      #0f3530;
  --bg-cream:       #f1efe6;
  --bg-cream-2:     #e7e4d6;
  --fg-cream:       #f1efe6;
  --fg-muted:       #8ab4af;
  --fg-deep:        #0c2a26;
  --fg-deep-muted:  #4a6460;
  --gold:           #c4a875;
  --gold-soft:      #d4bc90;
  --line-on-deep:   rgba(196,168,117,0.22);
  --line-on-cream:  rgba(12,42,38,0.12);
  --topbar-bg:      #061812;
  --footer-bg:      #061812;
}
```

### カラー使用ルール
| 場面 | 使用色 |
|------|--------|
| ダーク背景の文字 | `--fg-cream` |
| ダーク背景のサブ文字 | `--fg-muted` |
| クリーム背景の文字 | `--fg-deep` |
| クリーム背景のサブ文字 | `--fg-deep-muted` |
| アクセント・強調 | `--gold` |
| ホバー状態 | `--gold-soft` |
| 区切り線（dark上） | `--line-on-deep` |
| 区切り線（cream上） | `--line-on-cream` |

**禁止**:
- 純白 `#ffffff` / 純黒 `#000000` の使用
- ネオン蛍光色
- 3色を超えた配色

---

## 3. タイポグラフィ

### フォントファミリー
```
serif      : "Noto Serif JP", "Hiragino Mincho ProN", serif
sans       : "Noto Sans JP", "Hiragino Kaku Gothic ProN", sans-serif
latin-serif: "Cormorant Garamond", serif  （英字・ロゴ・数字）
mono       : "JetBrains Mono", monospace  （メタタグ・キャプション）
```

### タイプスケール

| ロール | ファミリー | サイズ | ウェイト | 字間 | 行高 |
|--------|-----------|--------|---------|------|------|
| Hero H1 | serif | 56px | 400 | 0.04em | 1.4 |
| Section H2 | serif | 44px | 500 | 0.04em | 1.5 |
| About H2 | serif | 40px | 500 | 0.03em | 1.6 |
| FinalCTA H2 | serif | 44px | 500 | 0.04em | 1.5 |
| Card title | serif | 18px | 500 | 0.04em | 1.4 |
| Flow title | serif | 20px | 500 | 0.04em | 1.4 |
| Body (large) | sans | 17px | 300 | 0.02em | 2.0 |
| Body | sans | 15px | 300 | 0.02em | 1.85 |
| Body (small) | sans | 13px | 300 | 0.02em | 1.9 |
| Eyebrow | latin-serif | 14px | 500 | 0.42em | 1 |
| Mono tag | mono | 10px | 400 | 0.30em | 1 |
| Step number | latin-serif | 38px | 500 | 0 | 1 |
| Logo line 1 | latin-serif | 24px | 500 | 0.32em | 1 |
| Logo line 2 | mono | 9px | 400 | 0.36em | 1 |
| Nav | sans | 13px | 400 | 0.04em | 1 |
| TopBar | mono | 11px | 400 | 0.12em | 1 |

### タイポグラフィ原則
- 日本語本文: `font-feature-settings: 'palt' 1` を必ず指定（プロポーショナル字形）
- 行間: 本文は1.85以上、見出しは1.4以上
- 字間: 本文は0.02em以上、英語eyebrowは0.42emで「広々と」
- **フォントは4種類まで**（serif / sans / latin-serif / mono）

---

## 4. スペーシング

### セクション縦余白
```
特大 (xl): 160px（About / Flow）
大   (lg): 140px（Services / Voice）
中   (md): 120px（FinalCTA）
小   (sm):  80px（Footer）
```

### コンテナ
```
max-width: 1200px
padding:   0 48px（デスクトップ）/ 0 24px（モバイル）
```

### グリッドギャップ
```
カード間: 24px
中要素:   48px
大要素:   80px（About 2カラム間）
```

---

## 5. ボタン

すべてのボタンは `display: inline-flex; align-items: center; justify-content: space-between;`
右端に矢印アイコン（または Phone アイコン）を配置。

### btn-gold（プライマリ）
```css
padding: 22px 32px;
min-width: 320px;
background: var(--gold);
color: var(--bg-deep);
border: none;
font: 13px var(--font-sans), letter-spacing: 0.08em;
```
- Hover: `background → var(--gold-soft)`

### btn-outline（クリーム背景用）
```css
padding: 16px 26px;
min-width: 240px;
background: transparent;
color: var(--fg-deep);
border: 1px solid var(--fg-deep);
```
- Hover: `background → var(--fg-deep)`, `color → var(--fg-cream)`

### btn-ghost-light（ダーク背景用）
```css
padding: 16px 26px;
min-width: 240px;
background: transparent;
color: var(--fg-cream);
border: 1px solid var(--line-on-deep);
```
- Hover: `border-color → var(--gold)`, `background → rgba(201,169,97,0.08)`

### 共通ルール
- Transition: すべてのボタンに `transition: all 0.4s ease`
- テキスト + 右端矢印の構成（`justify-content: space-between`）
- ボーダー: 1px のみ（2px以上は禁止）
- 角丸: `border-radius: 0`（MERIDIANはスクエアエッジ）

---

## 6. 装飾要素

### Gold Rule（水平線）
```css
width: 48px;
height: 1px;
background: var(--gold);
margin: 28px 0;
```

### Eyebrow（ラベル）
```
英字: Cormorant Garamond 14px 500 / 大文字 / letter-spacing 0.42em
色:  var(--gold)
位置: H2の上、Gold ruleの上
```

### セクション区切り
- ダーク ↔ クリームのコントラストで自然な区切りを作る
- 明示的なボーダーは極力使わない

### Heroオーバーラップ
FeatureStrip は Hero に `-80px` のネガティブマージンで重なる。
`z-index` 管理: FeatureStrip > Hero背景

### Gold装飾ライン（Flow）
```css
background: linear-gradient(
  to right,
  transparent 8%,
  var(--gold) 8%,
  var(--gold) 92%,
  transparent 92%
);
height: 1px;
position: absolute;
top: 64px; /* 円の中心に合わせる */
```

---

## 7. アイコン

- SVG / `stroke-width: 1.2` / `viewBox: 0 0 28 28`
- `color: currentColor`（親要素の color で制御）
- 推奨ライブラリ: `lucide-react`（stroke-based、サイズ調整容易）
- **カラフルアイコン禁止** / **太い線（2px以上）禁止**

---

## 8. アニメーション

### 基本原則
エレガンスは「躊躇い」から生まれる。1ミリ秒でも速すぎると品が消える。

### Reveal（スクロール出現）
```typescript
const fadeUp = {
  initial:    { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
```

### Stagger（連続出現）
```typescript
const container = {
  whileInView: { transition: { staggerChildren: 0.10, delayChildren: 0.2 } }
};
```

### Header スクロール変化
```typescript
// scrollY > 40 で切替
// Transition: 0.4s ease
// paddingY: 22px → 14px
// bg: transparent → rgba(10,22,40,0.92) + blur(12px)
```

### Card Hover
```css
transition: transform 0.4s ease, border-color 0.4s ease;
hover: translateY(-6px);
hover: border-color → var(--gold);
```

### Nav Hover
```css
transition: color 0.3s ease;
hover: color → var(--gold);
```

### Orb（背景光源）
```typescript
animate: { scale: [1, 1.08, 1], rotate: [0, 30, 0] }
transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' }
```

### 禁止アニメーション
- `scale > 1.02`（1.05は下品）
- パララックス 0.5倍超え
- 画面全体のフラッシュ系
- `prefers-reduced-motion` 無視

---

## 9. レスポンシブ方針

| ブレイクポイント | 幅 | 対応 |
|----------------|-----|------|
| Desktop (xl)   | ≥1280px | デザイン基準 |
| Desktop (lg)   | 1024–1279px | カラム数維持・フォント縮小 |
| Tablet (md)    | 768–1023px | 2カラム化（4→2, 3→2） |
| Mobile (sm)    | <768px | 1カラム化、Hero高さ縮小 |

---

## 10. アクセシビリティ

- コントラスト比: WCAG AA 以上（本文4.5:1 / 大文字3:1）
- `--fg-cream` on `--bg-deep`: ≈ 10.5:1 ✓
- `--fg-deep` on `--gold`: ≈ 4.8:1 ✓（btn-gold の文字）
- `prefers-reduced-motion: reduce` でアニメーション全停止
- フォーカスリング: `outline: 2px solid var(--gold); outline-offset: 4px`

---

*— ジョセフィーヌ。美しくないものは認めない。でもMERIDIANは美しい。*
