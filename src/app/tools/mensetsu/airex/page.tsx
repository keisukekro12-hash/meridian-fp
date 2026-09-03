'use client';

import { useState } from 'react';

/* ───────── 型定義 ───────── */
type CardVariant = 'default' | 'updated' | 'new';
type BadgeType = 'update' | 'new';

interface CardData {
  id: string;
  num: string;
  title: string;
  time: string;
  badge?: BadgeType;
  variant?: CardVariant;
  script?: string;
  placeholder?: string;
  note?: string; // 参照元メモ（例: "エンパワー 07 参照"）
}

interface SectionData {
  group: string;
  label: string;
  banner?: string;
  cards: CardData[];
}

/* ─────────────────────────────────────────────────────────
   データ
   バッジ凡例:
     要更新 (update) … エンパワーから転記済み・エアレックス用に書き直しが必要
     新規   (new)    … このカードは今後書き起こす
   ───────────────────────────────────────────────────────── */

/** 一次面接フォーカス（20分・人事担当） */
const FOCUS_SECTION: SectionData = {
  group: 'focus',
  label: '一次面接フォーカス（20分｜人事担当）',
  banner: '📋 総務部 人事担当者との面接 — 20分程度 / 自己紹介・転職理由・志望動機が中心',
  cards: [
    {
      id: 'F01',
      num: 'F01',
      title: '自己紹介（冒頭の掴み）',
      time: '30〜60秒',
      variant: 'new',
      badge: 'new',
      script: `はじめまして、○○と申します。

新卒から5年間、設計専門の派遣・請負会社に在籍し、東京エレクトロン様の設計部門に常駐しながら、半導体製造装置の設計業務に従事してまいりました。

3年目からは後輩のOJT、4年目からはチームリーダーとして3名の進捗管理も担い、技術とマネジメントの両軸を経験してきました。

このたびは、私のこれまでの経験を御社のプロジェクトマネジメント職で活かせると考え、志望いたしました。どうぞよろしくお願いいたします。`,
    },
    {
      id: 'F02',
      num: 'F02',
      title: '転職理由',
      time: '50秒〜1分',
      variant: 'new',
      badge: 'new',
      script: `転職を考えた理由は、大きく2点あります。

1点目は、自分のキャリアの幅を広げたいという思いです。設計職として5年間、技術的なスキルは着実に積んできました。一方で、業務の中でお客様との仕様調整や社内の進捗管理に関わる場面が増えるにつれ、「設計の知識を持ちながらプロジェクト全体を動かす立場」への強い関心が生まれました。

2点目は、自分の経験が最も活きる環境への転換です。前職で培ったお客様との折衝経験・技術理解・スケジュール感覚を、設計者としてではなくPMという役割で発揮したいと考えるようになりました。

年齢的にも今がキャリアチェンジの適切なタイミングと判断し、転職活動を始めた次第です。`,
    },
    {
      id: 'F03',
      num: 'F03',
      title: '志望動機（なぜエアレックス？なぜPM？）',
      time: '1分〜1分30秒',
      variant: 'new',
      badge: 'new',
      script: `御社を志望した理由は3点あります。

1点目は、私のキャリア背景とPM職の内容が強く重なっている点です。前職ではTEL様の設計部門に5年間常駐し、お客様の要求仕様を理解しながら設計を行い、3名のチームリーダーとして進捗管理も担ってきました。御社のPM職で求められる「お客様からの要求仕様確認・自社エンジニアへの橋渡し・スケジュール管理」は、私がこれまで経験してきた業務と本質的に重なります。設計者の気持ちが分かるPMとして、即戦力に近い形で貢献できると確信しております。

2点目は、医療機器分野でのものづくりへの関心です。医療機器は精度・信頼性・納期の全てが厳格に求められる分野であり、PMとしてのやりがいが非常に大きいと感じております。また、社会に直接貢献できる製品に携われる点にも魅力を感じました。

3点目は、御社の事業規模と成長性です。冷凍・冷蔵・恒温設備という専門性の高い領域で長年の実績を持ちながら、医療機器メーカー向けの案件も手がけていると伺い、確固たる技術基盤のある環境で挑戦できると感じました。`,
    },
    {
      id: 'F04',
      num: 'F04',
      title: 'なぜ設計からPMへ？',
      time: '40〜50秒',
      variant: 'new',
      badge: 'new',
      script: `設計職として働く中で、お客様との仕様確認の場面やチームの進捗管理を任された際に、「人・スケジュール・要求を整理して全体を動かす仕事」が自分にとって非常にやりがいのある仕事だと気づきました。

設計者としての強みは、エンジニアの視点で仕様や工数の現実感を正確に把握できることです。これはPMとして社内エンジニアと連携する上で、大きな強みになると考えております。

「設計もできるPM」として、技術面でも信頼される立場を目指したいという思いから、PM職へのキャリアチェンジを決意いたしました。`,
    },
    {
      id: 'F05',
      num: 'F05',
      title: '一番の実績・強みのエピソード',
      time: '1〜2分',
      variant: 'updated',
      badge: 'update',
      note: 'エンパワー S01/07 参照 → 営業寄りの表現をPM視点に書き直し推奨',
      script: `これまでのキャリアで一番の実績は、東京エレクトロン様への常駐業務において、派遣という立場から、客先の部長様より直接請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただいたことです。

この信頼を積み上げた背景には、2点意識してきたことがあります。

1点目は、成果物の「質」です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を積極的に行ってまいりました。

2点目は「スピード」の継続的な改善です。一度経験した業務については、1回目に1時間かかった作業を2回目は50分、3回目は40分というように、常に効率化を意識して取り組んでまいりました。

また、3年目には後輩社員のOJTを、4年目にはチームリーダーとして3名のメンバーの進捗管理・育成も担い、マネジメント経験も積んでおります。`,
    },
    {
      id: 'F06',
      num: 'F06',
      title: '逆質問（1〜2個選んで使う）',
      time: '最後に必ず',
      variant: 'new',
      badge: 'new',
      script: `【Q1 — 業務理解の深掘り】
「PM職として、入社後まず最初にアサインされるのはどのような案件規模・フェーズが多いでしょうか？」

【Q2 — 求める人物像の確認】
「今回のPM募集において、最終的にどのような人物像・バックグラウンドを重視されていますか？」

【Q3 — サポート体制】
「入社後、PM業務を覚えるにあたってOJTや先輩PMからのフォローはどのような体制になっていますか？」`,
    },
  ],
};

/** 通常セクション */
const MAIN_SECTIONS: SectionData[] = [
  {
    group: 'intro',
    label: '自己紹介・自己PR',
    cards: [
      {
        id: '01',
        num: '01',
        title: '自己紹介（詳細版）',
        time: '60〜90秒',
        badge: 'new',
        placeholder: '（新規作成 — F01 の内容を膨らませる形でも可）',
      },
      {
        id: '02',
        num: '02',
        title: '自己PR（PM職向け）',
        time: '1〜1分30秒',
        badge: 'new',
        script: `私の強みは、技術的な理解力と、関係者間の橋渡し力です。

前職では設計者として5年間、お客様の要求仕様を理解した上で設計業務を遂行してきました。お客様が「何を求めているか」を正確に把握し、それを社内に噛み砕いて伝えることが、設計の質と信頼維持に直結すると身をもって学んでまいりました。

また、チームリーダーとして3名の進捗管理を経験する中で、「誰が何をどこまでやっているか」を常に把握し、遅延の芽を早期に摘む習慣が身につきました。

PM職では、この「技術が分かった上でのコミュニケーション力」と「先を読んだスケジュール管理」を最大限に発揮できると考えております。`,
      },
      {
        id: '03',
        num: '03',
        title: '長所',
        time: '30秒前後',
        script: `私の長所は、成長意欲の高さです。

常にスキルアップや業務の効率化・改善を意識しており、「昨日より今日、今日より明日」という気持ちで仕事に取り組んでまいりました。

前職でも、周囲の社員と比較して自分が経験年数に見合ったスキルを身につけられているか、それ以上の価値を発揮できているかを常に自分自身で評価しながら業務に臨んでおりました。`,
      },
      {
        id: '04',
        num: '04',
        title: '短所',
        time: '30秒前後',
        script: `私の短所は、細部にこだわりすぎてしまう完璧主義な部分です。

精度が求められる場面では強みになる一方、スピードが求められる局面ではマイナスに働くこともあると認識しております。

そのため、仕事に取り掛かる前に「いつまでに・何を・何を参照して」の3点を必ず整理してから着手するようにしており、一定の精度を維持しつつ納期を守ることを意識して取り組んでおります。`,
      },
    ],
  },
  {
    group: 'work',
    label: '前職の実績・経験',
    banner: '💡 設計者の技術理解 × コミュニケーション力 × スケジュール管理 を軸に語る',
    cards: [
      {
        id: '05',
        num: '05',
        title: '前職の仕事内容（具体的に）',
        time: '1〜2分',
        badge: 'new',
        script: `前職では、半導体製造装置メーカーである東京エレクトロン様の設計部門に、派遣・請負という形で5年間常駐しておりました。

業務内容は主に3つです。

1つ目は、装置の機械設計です。部品図・組立図の作成から、変更設計まで幅広く担当しておりました。

2つ目は、お客様との仕様調整です。設計変更が発生した際に、担当者様と要件を確認しながら設計に落とし込むプロセスを繰り返してきました。

3つ目は、チームマネジメントです。4年目からはチームリーダーとして3名のメンバーの進捗管理・OJTを担当し、設計の品質管理とスケジュール遵守の両立を図ってまいりました。`,
      },
      {
        id: '06',
        num: '06',
        title: 'キャリアで一番の実績・成果',
        time: '1〜2分',
        badge: 'update',
        variant: 'updated',
        note: 'エンパワー S01/07 参照 → PM視点で語り直し推奨',
        script: `これまでのキャリアで一番の実績は、東京エレクトロン様への常駐業務において、派遣という立場から、客先の部長様より直接請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただいたことです。

この信頼を積み上げた背景には、2点意識してきたことがあります。

1点目は、成果物の「質」です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を積極的に行ってまいりました。

2点目は「スピード」の継続的な改善です。一度経験した業務については、1回目に1時間かかった作業を2回目は50分、3回目は40分というように、常に効率化を意識して取り組んでまいりました。

また、3年目には後輩社員のOJTを、4年目にはチームリーダーとして3名のメンバーの進捗管理・育成も担い、マネジメント経験も積んでおります。`,
      },
      {
        id: '07',
        num: '07',
        title: 'チームリーダー・マネジメント経験',
        time: '30〜40秒',
        badge: 'new',
        script: `4年目から、3名のメンバーのチームリーダーを務めました。

主な業務は、週次での進捗確認・工数の調整・品質チェックです。特に意識したのは、遅延の予兆を早めに察知して対処することで、チーム全体としての納期を守ることでした。

また、後輩へのOJTを通じて、「なぜそうするか」を言語化する習慣がつき、これがPM職でのエンジニアとのコミュニケーションにも活きると考えております。`,
      },
      {
        id: '08',
        num: '08',
        title: 'ストレスを感じる場面と対処法',
        time: '30〜40秒',
        badge: 'new',
        placeholder: '（新規作成）',
      },
    ],
  },
  {
    group: 'motivation',
    label: '転職・志望動機',
    cards: [
      {
        id: '09',
        num: '09',
        title: '転職理由（詳細版）',
        time: '50秒〜1分',
        badge: 'update',
        variant: 'updated',
        note: 'エンパワー 13/14 参照 → 「設計 → PM」の文脈に書き直し推奨',
        placeholder: '（エンパワー参照 → PM転向の文脈で書き直し / F02 を膨らませてもOK）',
      },
      {
        id: '10',
        num: '10',
        title: '志望動機（詳細版）',
        time: '1〜1分30秒',
        badge: 'update',
        variant: 'updated',
        note: 'エンパワー S02/15 参照 → エアレックス・医療機器・PM職に書き直し推奨',
        placeholder: '（エンパワー参照 → エアレックス向けに書き直し / F03 を膨らませてもOK）',
      },
      {
        id: '11',
        num: '11',
        title: '他社の選考状況・志望順位',
        time: '20〜25秒',
        badge: 'new',
        placeholder: '（新規作成）',
      },
    ],
  },
  {
    group: 'career',
    label: '挫折・将来',
    cards: [
      {
        id: '12',
        num: '12',
        title: '挫折・困難経験',
        time: '1〜1分20秒',
        badge: 'new',
        placeholder: '（新規作成）',
      },
      {
        id: '13',
        num: '13',
        title: '将来のキャリアビジョン（PM として）',
        time: '40〜50秒',
        badge: 'new',
        script: `まずは御社のPM職として、お客様との要求仕様の確認から、自社エンジニアへの橋渡し、スケジュール管理まで、PMとしての基礎をしっかり習得することを最優先に考えております。

その上で、医療機器分野の専門知識を深め、お客様から「この案件はあなたに任せたい」と言っていただけるような、信頼されるPMを目指したいと考えております。

将来的には、複数案件を並走して動かせる力をつけながら、チームや後進の育成にも関わっていきたいと思っております。`,
      },
      {
        id: '14',
        num: '14',
        title: '大切にしたい価値観・仕事観',
        time: '15〜20秒',
        badge: 'new',
        placeholder: '（新規作成）',
      },
    ],
  },
];

type Tab = { key: string; label: string; isFocus?: boolean };
const TABS: Tab[] = [
  { key: 'all',        label: 'すべて' },
  { key: 'focus',      label: '▶ 一次面接', isFocus: true },
  { key: 'intro',      label: '自己紹介・強み' },
  { key: 'work',       label: '実績' },
  { key: 'motivation', label: '転職・志望動機' },
  { key: 'career',     label: '挫折・将来' },
];

/* ───────── コンポーネント ───────── */
function Card({ data, isOpen, onToggle }: { data: CardData; isOpen: boolean; onToggle: () => void }) {
  const variantClass =
    data.variant === 'updated' ? 'card updated' :
    data.variant === 'new'     ? 'card new-card' :
    'card';

  return (
    <div className={isOpen ? `${variantClass} open` : variantClass}>
      <div
        className="card-header"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); }
        }}
      >
        <span className="card-num">{data.num}</span>
        <span className="card-title">
          {data.title}
          {data.badge === 'update' && <span className="badge badge-update">要更新</span>}
          {data.badge === 'new'    && <span className="badge badge-new">新規</span>}
        </span>
        <span className="card-time">{data.time}</span>
        <span className="card-arrow">▶</span>
      </div>
      {isOpen && (
        <div className="card-body">
          {data.note && <div className="note-bar">📌 {data.note}</div>}
          {data.script ? (
            <div className="script">{data.script}</div>
          ) : (
            <div className="script">
              <span className="placeholder">{data.placeholder}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Section({
  section,
  visible,
  openCards,
  onToggle,
}: {
  section: SectionData;
  visible: boolean;
  openCards: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  return (
    <div style={{ display: visible ? 'block' : 'none' }} data-group={section.group}>
      <div className="section-label">{section.label}</div>
      {section.banner && <div className="focus-banner">{section.banner}</div>}
      {section.cards.map((card) => (
        <Card
          key={card.id}
          data={card}
          isOpen={!!openCards[card.id]}
          onToggle={() => onToggle(card.id)}
        />
      ))}
    </div>
  );
}

export default function AirexPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setOpenCards((prev: Record<string, boolean>) => ({ ...prev, [id]: !prev[id] }));

  const isVisible = (group: string) =>
    activeTab === 'all' || activeTab === group;

  return (
    <>
      <style>{`
        :root {
          --bg:            #f0f4f8;
          --surface:       #ffffff;
          --surface-hover: #edf2f7;
          --border-card:   #d0dce8;

          --text-primary:   #1a2332;
          --text-secondary: #5a7080;
          --text-dim:       #94a8b8;

          --accent:        #1d6fa4;

          --tab-bg:        #dde8f0;
          --tab-active-bg: #ccdae8;

          --time-bg:       #dbeafe;
          --time-text:     #1e4fa0;

          /* 要更新（ゴールドレール） */
          --updated-rail:  #c9a14a;
          --updated-bg:    rgba(160,120,48,0.05);
          --updated-badge-bg:   rgba(160,120,48,0.15);
          --updated-badge-text: #856028;

          /* 新規（グリーンレール） */
          --new-rail:      #22a06b;
          --new-bg:        rgba(34,160,107,0.05);
          --new-badge-bg:  rgba(34,160,107,0.14);
          --new-badge-text:#1a7a50;

          --banner-bg:     rgba(29,111,164,0.07);
          --banner-border: rgba(29,111,164,0.22);
          --banner-text:   #1a5080;

          --script-bg:     #f7fafc;
          --script-rail:   #1d6fa4;

          --note-bg:       rgba(201,161,74,0.08);
          --note-border:   rgba(201,161,74,0.30);
          --note-text:     #705020;

          --num-color:     #94a8b8;
          --num-updated:   #c9a14a;
          --num-new:       #22a06b;
          --arrow-color:   #b0c4d4;
          --section-label: #94a8b8;
        }

        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --bg:            #0f1923;
            --surface:       #182433;
            --surface-hover: #1f3044;
            --border-card:   #2a3f54;

            --text-primary:   #e0ecf8;
            --text-secondary: #6080a0;
            --text-dim:       #3a5070;

            --accent:        #4da6d8;

            --tab-bg:        #1a2e40;
            --tab-active-bg: #1e3a50;

            --time-bg:       #12233a;
            --time-text:     #60b0e0;

            --updated-rail:  #c9a14a;
            --updated-bg:    rgba(201,161,74,0.07);
            --updated-badge-bg:   rgba(201,161,74,0.18);
            --updated-badge-text: #e0b860;

            --new-rail:      #2ecf88;
            --new-bg:        rgba(46,207,136,0.06);
            --new-badge-bg:  rgba(46,207,136,0.16);
            --new-badge-text:#50e0a0;

            --banner-bg:     rgba(77,166,216,0.07);
            --banner-border: rgba(77,166,216,0.22);
            --banner-text:   #4da6d8;

            --script-bg:     #101e2c;
            --script-rail:   #4da6d8;

            --note-bg:       rgba(201,161,74,0.08);
            --note-border:   rgba(201,161,74,0.28);
            --note-text:     #e0b860;

            --num-color:     #3a5070;
            --num-updated:   #c9a14a;
            --num-new:       #2ecf88;
            --arrow-color:   #2a4060;
            --section-label: #3a5070;
          }
        }

        :root[data-theme="dark"] {
          --bg:            #0f1923;
          --surface:       #182433;
          --surface-hover: #1f3044;
          --border-card:   #2a3f54;
          --text-primary:   #e0ecf8;
          --text-secondary: #6080a0;
          --text-dim:       #3a5070;
          --accent:        #4da6d8;
          --tab-bg:        #1a2e40;
          --tab-active-bg: #1e3a50;
          --time-bg:       #12233a;
          --time-text:     #60b0e0;
          --updated-rail:  #c9a14a;
          --updated-bg:    rgba(201,161,74,0.07);
          --updated-badge-bg:   rgba(201,161,74,0.18);
          --updated-badge-text: #e0b860;
          --new-rail:      #2ecf88;
          --new-bg:        rgba(46,207,136,0.06);
          --new-badge-bg:  rgba(46,207,136,0.16);
          --new-badge-text:#50e0a0;
          --banner-bg:     rgba(77,166,216,0.07);
          --banner-border: rgba(77,166,216,0.22);
          --banner-text:   #4da6d8;
          --script-bg:     #101e2c;
          --script-rail:   #4da6d8;
          --note-bg:       rgba(201,161,74,0.08);
          --note-border:   rgba(201,161,74,0.28);
          --note-text:     #e0b860;
          --num-color:     #3a5070;
          --num-updated:   #c9a14a;
          --num-new:       #2ecf88;
          --arrow-color:   #2a4060;
          --section-label: #3a5070;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--bg);
          color: var(--text-primary);
          font-family: 'Noto Sans JP', -apple-system, 'Hiragino Sans',
            'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
          font-size: 14px;
          line-height: 1.6;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        .header { padding: 22px 16px 4px; margin-bottom: 12px; }
        .header-eyebrow {
          font-size: 10px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 5px;
        }
        .header-title {
          font-size: 20px; font-weight: 700; letter-spacing: -0.02em;
          color: var(--text-primary); line-height: 1.2; margin-bottom: 3px;
        }
        .header-sub { font-size: 11.5px; color: var(--text-secondary); }

        .legend {
          display: flex; gap: 12px; padding: 0 16px 12px; flex-wrap: wrap;
        }
        .legend-item {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; color: var(--text-secondary);
        }
        .legend-dot {
          width: 8px; height: 8px; border-radius: 2px; flex-shrink: 0;
        }
        .legend-dot.update { background: var(--updated-rail); }
        .legend-dot.new    { background: var(--new-rail); }

        .tabs {
          display: flex; gap: 5px; padding: 0 16px 14px;
          overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch;
        }
        .tabs::-webkit-scrollbar { display: none; }

        .tab {
          flex-shrink: 0; padding: 5px 13px; border-radius: 20px;
          background: var(--tab-bg); color: var(--text-secondary);
          font-family: inherit; font-size: 12px; font-weight: 500;
          border: none; cursor: pointer; transition: background 0.15s, color 0.15s;
          white-space: nowrap; -webkit-tap-highlight-color: transparent;
        }
        .tab.active { background: var(--tab-active-bg); color: var(--text-primary); }
        .tab.tab-focus.active { background: var(--accent); color: #fff; }
        .tab:hover:not(.active) { background: var(--surface-hover); color: var(--text-primary); }
        .tab:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

        .content { padding: 0 12px 56px; }

        .section-label {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--section-label); padding: 18px 4px 8px;
        }

        .focus-banner {
          background: var(--banner-bg); border: 1px solid var(--banner-border);
          border-radius: 8px; padding: 9px 12px; margin-bottom: 10px;
          font-size: 11px; color: var(--banner-text); font-weight: 500;
        }

        .card {
          background: var(--surface); border-radius: 10px; margin-bottom: 5px;
          border: 1px solid var(--border-card); overflow: hidden;
        }
        /* 要更新 — ゴールドレール */
        .card.updated {
          border-left: 3px solid var(--updated-rail);
          border-radius: 0 10px 10px 0; background: var(--updated-bg);
        }
        /* 新規 — グリーンレール */
        .card.new-card {
          border-left: 3px solid var(--new-rail);
          border-radius: 0 10px 10px 0; background: var(--new-bg);
        }

        .card-header {
          display: flex; align-items: center; gap: 10px; padding: 12px 13px;
          cursor: pointer; user-select: none; -webkit-tap-highlight-color: transparent;
          transition: background 0.12s;
        }
        .card-header:hover { background: var(--surface-hover); }
        .card-header:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }

        .card-num {
          font-size: 10px; font-weight: 700; color: var(--num-color);
          font-variant-numeric: tabular-nums; min-width: 20px; flex-shrink: 0;
        }
        .card.updated .card-num  { color: var(--num-updated); }
        .card.new-card .card-num { color: var(--num-new); }

        .card-title { flex: 1; font-size: 13.5px; font-weight: 500; color: var(--text-primary); line-height: 1.4; }

        .card-time {
          font-size: 10px; font-weight: 700; color: var(--time-text);
          background: var(--time-bg); padding: 2px 8px; border-radius: 10px;
          white-space: nowrap; font-variant-numeric: tabular-nums; flex-shrink: 0;
        }

        .badge {
          display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: 0.06em;
          padding: 1px 6px; border-radius: 4px; margin-left: 6px; vertical-align: middle;
        }
        .badge-update { background: var(--updated-badge-bg); color: var(--updated-badge-text); }
        .badge-new    { background: var(--new-badge-bg);     color: var(--new-badge-text);     }

        .card-arrow {
          font-size: 9px; color: var(--arrow-color);
          transition: transform 0.18s ease; flex-shrink: 0;
        }
        .card.open .card-arrow { transform: rotate(90deg); }

        .card-body { padding: 0 13px 13px; }

        .note-bar {
          font-size: 11px; color: var(--note-text);
          background: var(--note-bg); border: 1px solid var(--note-border);
          border-radius: 6px; padding: 6px 10px; margin-bottom: 8px;
        }

        .script {
          background: var(--script-bg); border-left: 3px solid var(--script-rail);
          border-radius: 0 7px 7px 0; padding: 11px 13px; font-size: 13.5px;
          line-height: 1.9; color: var(--text-primary); white-space: pre-wrap; word-break: break-all;
        }
        .card.updated  .script { border-left-color: var(--updated-rail); }
        .card.new-card .script { border-left-color: var(--new-rail); }

        .placeholder { color: var(--text-dim); font-style: italic; font-size: 12px; }
      `}</style>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
      />

      <div className="header">
        <div className="header-eyebrow">Interview Script</div>
        <div className="header-title">株式会社エアレックス</div>
        <div className="header-sub">プロジェクトマネジメント職｜一次面接（人事担当・20分）</div>
      </div>

      {/* 凡例 */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-dot new" />
          <span>新規 — 新しく書いたスクリプト</span>
        </div>
        <div className="legend-item">
          <div className="legend-dot update" />
          <span>要更新 — エンパワー参照・エアレックス用に書き直し推奨</span>
        </div>
      </div>

      <div className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab${tab.isFocus ? ' tab-focus' : ''}${activeTab === tab.key ? ' active' : ''}`}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="content">
        {/* 一次面接フォーカスセクション */}
        <Section
          section={FOCUS_SECTION}
          visible={isVisible('focus')}
          openCards={openCards}
          onToggle={toggle}
        />

        {/* 通常セクション */}
        {MAIN_SECTIONS.map((section) => (
          <Section
            key={section.group}
            section={section}
            visible={isVisible(section.group)}
            openCards={openCards}
            onToggle={toggle}
          />
        ))}
      </div>
    </>
  );
}
