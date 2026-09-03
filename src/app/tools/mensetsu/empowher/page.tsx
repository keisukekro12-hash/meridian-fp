'use client';

import { useState } from 'react';

/* ───────── 型定義 ───────── */
type CardVariant = 'default' | 'updated' | 'second';
type BadgeType = 'gold' | 'second';

interface CardData {
  id: string;
  num: string;
  title: string;
  time: string;
  badge?: BadgeType;
  variant?: CardVariant;
  script?: string;
  placeholder?: string;
}

interface SectionData {
  group: string;
  label: string;
  banner?: string;
  cards: CardData[];
}

/* ───────── データ ───────── */
const SECOND_SECTION: SectionData = {
  group: 'second',
  label: '二次面接（最終）フォーカス',
  cards: [
    {
      id: 'S01',
      num: 'S01',
      title: '自分の強みと実績',
      time: '1〜2分',
      badge: 'second',
      variant: 'second',
      script: `これまでのキャリアで一番の実績は、東京エレクトロン様への常駐業務において、派遣という立場から、客先の部長様より直接請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただいたことです。

この信頼を積み上げた背景には、2点意識してきたことがあります。

1点目は、成果物の「質」です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を積極的に行ってまいりました。

2点目は「スピード」の継続的な改善です。一度経験した業務については、1回目に1時間かかった作業を2回目は50分、3回目は40分というように、常に効率化を意識して取り組んでまいりました。

また、3年目には後輩社員のOJTを、4年目にはチームリーダーとして3名のメンバーの進捗管理・育成も担い、マネジメント経験も積んでおります。

設計という分野ではありますが、この経験を通じて身についた「妥協しない姿勢」と「成長意欲」は、営業として数字を追っていく上でも根幹になると考えております。`,
    },
    {
      id: 'S02',
      num: 'S02',
      title: '志望動機',
      time: '1分〜1分40秒',
      badge: 'second',
      variant: 'second',
      script: `御社を志望した理由は、大きく3点ございます。

1点目は、成果が正当に評価される環境である点です。設計職として積んできたキャリアでは、どうしても年功序列的な制度になりやすく、収入の上限を感じておりました。27歳という年齢を考えたとき、今このタイミングで挑戦しなければキャリアチェンジの機会は失われていくと感じ、成果が直接評価に反映される営業職への転身を決意いたしました。

2点目は、御社を選んだ理由としまして、業界トップクラスのネームバリューと、結果へのコミット姿勢です。お客様が買取先を選ぶ基準として知名度と規模感は大きな安心材料になると考えており、その強みを持つ御社であれば早期に結果を出せる環境があると感じました。また、同業他社と比較した際に御社の方がより成果にコミットする社風があると感じており、キャリアチェンジという大きな挑戦をするからこそ、刺激のある環境に身を置きたいと考えました。

3点目は、リユース業界への共感と、反響営業という仕事形態への魅力です。リユース業界は、お客様は不要な品を現金に変えられ、会社はそれで利益を得て、さらにその品が別のお客様の手に届くという三方よしの構造が成立しており、大きな魅力を感じました。また、反響営業はすでにニーズを持ったお客様に最大の価値を届けられる仕事形態であり、お客様の要望に真摯に向き合えるという点が、自分の目指す働き方に合致しております。`,
    },
    {
      id: 'S03',
      num: 'S03',
      title: '内定を出したら来てもらえますか？',
      time: '即答',
      variant: 'second',
      script: `はい、ぜひよろしくお願いいたします。御社が現時点での第一志望です。

選考を通じて、成果主義の評価制度と社員の皆様のコミット力の高さをより強く感じており、ここで挑戦したいという気持ちは一次面接からさらに強まっております。`,
    },
    {
      id: 'S04',
      num: 'S04',
      title: '入社後にやりたいこと・なりたい営業像',
      time: '40〜50秒',
      variant: 'second',
      script: `入社後にまず取り組みたいことは、御社のノウハウとリユース業界のカウンター営業スキルを徹底的に習得することです。

そのために意識したいのが、結果を出されている方の成功例を徹底的に模倣することです。まず「型」を自分の中にしっかり落とし込んだ上で、その先に自分なりのアレンジを模索していくフェーズが来ると考えております。

もちろん、御社でノウハウとして「こうした方が結果に繋がる」というものがあれば、そこには柔軟に適応していく姿勢で臨みたいと思っております。入社後すぐに自己流に走るのではなく、まずは謙虚に学ぶことを大切にしながら、早期に数字で貢献できる営業へ成長していきたいと考えております。`,
    },
    {
      id: 'S05',
      num: 'S05',
      title: 'なぜ設計から営業へ？（覚悟・理由）',
      time: '50秒〜1分',
      variant: 'second',
      script: `設計職として5年間働く中で、やりがいとスキルアップは確かに感じていました。ただ、その成長が正当に評価されるかどうかは会社の仕組み次第であるという現実を、前職で強く感じました。

成果が収入や評価に反映されにくい環境では、どうしても「言われた仕事をこなすだけ」というモードに陥りやすくなります。それが自分の望む働き方ではないと感じたとき、このタイミングで変わる必要があると判断しました。

自分が最もモチベーション高く成長し続けられるのは、成果と評価が直結する世界だと確信しています。頑張れば頑張るほど収入が上がり、それがさらなる成長意欲につながる、この好循環の中に身を置きたいという思いが、営業職へのジョブチェンジを決意した根本的な理由です。

設計職でのキャリアアップという選択肢も当初は考えました。ただ、同じ努力をするなら、その努力が正当に報われる場所でするべきだという結論に至り、このタイミングで決断いたしました。`,
    },
    {
      id: 'S06',
      num: 'S06',
      title: 'どんな環境で力を発揮できるか',
      time: '30〜40秒',
      variant: 'second',
      script: `私が最も力を発揮できるのは、結果が数値として明確に可視化される環境です。

もともと負けず嫌いな性格なので、自分の成果が数字で分かると自然と高い基準を自分に課すことができます。逆に、頑張りが評価に反映されにくい環境ではモチベーションを維持することが難しいと感じており、その点でも成果主義の仕組みが整っている御社は自分に合っていると感じております。

また、周囲の社員の方も高いモチベーションで同じ方向を向いて取り組んでいる環境だと、お互いが切磋琢磨しながら高め合えると考えています。そういった意味でも、御社の社員の皆様のコミット力の高さは非常に魅力的に映っております。

一方で、営業は個人の数字が求められる場面もあると理解しています。チームとしての仕事と個人の成果、それぞれにしっかり責任を持って取り組み、両方で結果を出せるよう努めてまいります。`,
    },
    {
      id: 'S07',
      num: 'S07',
      title: 'いつから入社できますか？',
      time: '即答',
      variant: 'second',
      placeholder: '（入社可能時期を入力）',
    },
    {
      id: 'S08',
      num: 'S08',
      title: '収入目標・何のために稼ぐか',
      time: '40〜50秒',
      variant: 'second',
      script: `御社では4人に1人が年収1,000万円を達成されているとお伺いしており、まずそこを当面の目標として定めております。ただ、成果が正当に評価される環境に身を置くのであれば、そこで満足せずに1,500万、2,000万という高みを目指し続けたいというのが正直なところです。

稼いだお金の使い道について正直にお伝えすると、今は経済的な制約の中でいくつかの選択を我慢しています。本当に乗りたい車に乗ること、国内旅行ではなく海外旅行に行くこと、住まいも制限なく都市部で選べること。そういった部分で我慢してきた分を、自分の成果として享受したいという気持ちがあります。

それと同時に、自分の成長に惜しみなく投資できる状態にもなりたい。収入が上がるほど選択肢が広がり、それがさらなる仕事へのモチベーションになる、そのサイクルを御社で実現したいと考えております。`,
    },
    {
      id: 'S09',
      num: 'S09',
      title: '逆質問（2〜3個選んで使う）',
      time: '最後に必ず',
      variant: 'second',
      script: `【Q1 — 人物像の確認】
「今回の中途採用で、最終的にどのような人物像を最も重視されていましたか？」

【Q2 — 活躍者の共通点】
「反響営業でご活躍されている方に共通する特徴やマインドセットがあれば、教えていただけますか？」

【Q3 — 入社後サポート】
「入社後、最初の3ヶ月でどのような成長サポートがありますか？研修や育成体制について教えていただけますか？」`,
    },
  ],
};

const MAIN_SECTIONS: SectionData[] = [
  {
    group: 'intro',
    label: '自己紹介・自己PR',
    cards: [
      { id: '01', num: '01', title: '自己紹介',     time: '30〜60秒',   placeholder: '（元のカンペから転記）' },
      { id: '02', num: '02', title: '自己PR',       time: '1分前後',    placeholder: '（元のカンペから転記）' },
      { id: '03', num: '03', title: '長所',          time: '30秒前後',   placeholder: '（元のカンペから転記）' },
      { id: '04', num: '04', title: '短所',          time: '30秒前後',   placeholder: '（元のカンペから転記）' },
      { id: '05', num: '05', title: 'ストレスを感じる場面と対処法', time: '50秒〜1分', placeholder: '（元のカンペから転記）' },
    ],
  },
  {
    group: 'work',
    label: '前職の実績',
    banner: '⬆︎ 二次面接フィードバック対応：実績の具体性を強化済み',
    cards: [
      { id: '06', num: '06', title: '前職で力を入れたこと', time: '1〜2分', placeholder: '（元のカンペから転記）' },
      {
        id: '07',
        num: '07',
        title: 'キャリアで一番の実績・成果',
        time: '1〜2分',
        badge: 'gold',
        variant: 'updated',
        script: `これまでのキャリアで一番の実績は、東京エレクトロン様への常駐業務において、派遣という立場から、客先の部長様より直接請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただいたことです。

この信頼を積み上げた背景には、2点意識してきたことがあります。

1点目は、成果物の「質」です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を積極的に行ってまいりました。

2点目は「スピード」の継続的な改善です。一度経験した業務については、1回目に1時間かかった作業を2回目は50分、3回目は40分というように、常に効率化を意識して取り組んでまいりました。

また、3年目には後輩社員のOJTを、4年目にはチームリーダーとして3名のメンバーの進捗管理・育成も担い、マネジメント経験も積んでおります。

設計という分野ではありますが、この経験を通じて身についた「妥協しない姿勢」と「成長意欲」は、営業として数字を追っていく上でも根幹になると考えております。`,
      },
      { id: '08', num: '08', title: '深掘り① なぜその課題に取り組んだか', time: '15〜20秒', placeholder: '（元のカンペから転記）' },
      { id: '09', num: '09', title: '深掘り② 一番大変だったこと',         time: '25〜30秒', placeholder: '（元のカンペから転記）' },
      { id: '10', num: '10', title: '深掘り③ 周囲を巻き込んだ経験',       time: '25〜30秒', placeholder: '（元のカンペから転記）' },
      { id: '11', num: '11', title: '深掘り④ 今回の仕事への活かし方',      time: '35〜40秒', placeholder: '（元のカンペから転記）' },
      { id: '12', num: '12', title: '学生時代に力を入れたこと（念のため）', time: '20秒',    placeholder: '（元のカンペから転記）' },
    ],
  },
  {
    group: 'motivation',
    label: '転職・志望動機',
    banner: '⬆︎ 二次面接フィードバック対応：志望動機を3点に整理・強化済み',
    cards: [
      { id: '13', num: '13', title: '転職理由',           time: '50秒〜1分',   placeholder: '（元のカンペから転記）' },
      { id: '14', num: '14', title: '前職を辞める（辞めた）理由', time: '50秒〜1分', placeholder: '（元のカンペから転記）' },
      {
        id: '15',
        num: '15',
        title: '志望動機',
        time: '1分〜1分40秒',
        badge: 'gold',
        variant: 'updated',
        script: `御社を志望した理由は、大きく3点ございます。

1点目は、成果が正当に評価される環境である点です。設計職として積んできたキャリアでは、どうしても年功序列的な制度になりやすく、収入の上限を感じておりました。27歳という年齢を考えたとき、今このタイミングで挑戦しなければキャリアチェンジの機会は失われていくと感じ、成果が直接評価に反映される営業職への転身を決意いたしました。

2点目は、御社を選んだ理由としまして、業界トップクラスのネームバリューと、結果へのコミット姿勢です。お客様が買取先を選ぶ基準として知名度と規模感は大きな安心材料になると考えており、その強みを持つ御社であれば早期に結果を出せる環境があると感じました。また、同業他社と比較した際に御社の方がより成果にコミットする社風があると感じており、キャリアチェンジという大きな挑戦をするからこそ、刺激のある環境に身を置きたいと考えました。

3点目は、リユース業界への共感と、反響営業という仕事形態への魅力です。リユース業界は、お客様は不要な品を現金に変えられ、会社はそれで利益を得て、さらにその品が別のお客様の手に届くという三方よしの構造が成立しており、大きな魅力を感じました。また、反響営業はすでにニーズを持ったお客様に最大の価値を届けられる仕事形態であり、お客様の要望に真摯に向き合えるという点が、自分の目指す働き方に合致しております。`,
      },
      { id: '16', num: '16', title: '他社比較・志望順位', time: '20〜25秒', placeholder: '（元のカンペから転記）' },
    ],
  },
  {
    group: 'career',
    label: '挫折・将来',
    cards: [
      { id: '17', num: '17', title: '挫折・困難経験',          time: '1分〜1分20秒', placeholder: '（元のカンペから転記）' },
      { id: '18', num: '18', title: 'マネジメント・育成経験',   time: '20〜25秒',    placeholder: '（元のカンペから転記）' },
      { id: '19', num: '19', title: '将来のキャリアビジョン',   time: '50秒〜1分',   placeholder: '（元のカンペから転記）' },
      { id: '20', num: '20', title: '即戦力性（すぐに何ができるか）', time: '30〜40秒', placeholder: '（元のカンペから転記）' },
      { id: '21', num: '21', title: '大切にしたい価値観',       time: '15〜20秒',    placeholder: '（元のカンペから転記）' },
    ],
  },
];

type Tab = { key: string; label: string; isSecond?: boolean };
const TABS: Tab[] = [
  { key: 'all',        label: 'すべて' },
  { key: 'second',     label: '▶ 二次面接', isSecond: true },
  { key: 'intro',      label: '自己紹介・強み' },
  { key: 'work',       label: '実績' },
  { key: 'motivation', label: '転職・志望動機' },
  { key: 'career',     label: '挫折・将来' },
];

/* ───────── コンポーネント ───────── */
function Card({ data, isOpen, onToggle }: { data: CardData; isOpen: boolean; onToggle: () => void }) {
  const variantClass = data.variant === 'updated' ? 'card updated' : data.variant === 'second' ? 'card second' : 'card';

  return (
    <div className={isOpen ? `${variantClass} open` : variantClass}>
      <div
        className="card-header"
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
      >
        <span className="card-num">{data.num}</span>
        <span className="card-title">
          {data.title}
          {data.badge === 'gold'   && <span className="badge badge-gold">強化済み</span>}
          {data.badge === 'second' && <span className="badge badge-second">要確認</span>}
        </span>
        <span className="card-time">{data.time}</span>
        <span className="card-arrow">▶</span>
      </div>
      {isOpen && (
        <div className="card-body">
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
    <div className="section-group" style={{ display: visible ? 'block' : 'none' }} data-group={section.group}>
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

export default function EmpowherPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));

  const isVisible = (group: string) =>
    activeTab === 'all' || activeTab === group;

  return (
    <>
      <style>{`
        :root {
          --bg:            #f4efe6;
          --surface:       #fdfaf4;
          --surface-hover: #f6f1e8;
          --border-card:   #ded4c2;
          --text-primary:   #1a1510;
          --text-secondary: #7a6a58;
          --text-dim:       #b0a090;
          --accent:        #a07830;
          --tab-bg:        #ece7de;
          --tab-active-bg: #e0d8ca;
          --time-bg:       #fef3d4;
          --time-text:     #906820;
          --updated-rail:  #c9a14a;
          --updated-bg:    rgba(160,120,48,0.06);
          --updated-badge-bg:   rgba(160,120,48,0.16);
          --updated-badge-text: #856028;
          --second-rail:   #d4763a;
          --second-bg:     rgba(212,118,58,0.05);
          --second-badge-bg:    rgba(212,118,58,0.14);
          --second-badge-text:  #a04818;
          --banner-bg:     rgba(160,120,48,0.07);
          --banner-border: rgba(160,120,48,0.25);
          --banner-text:   #7a5c1e;
          --script-bg:     #f8f5ee;
          --script-rail:   #c9a14a;
          --num-color:     #b0a090;
          --num-updated:   #c9a14a;
          --num-second:    #d4763a;
          --arrow-color:   #c4b8a8;
          --section-label: #b0a090;
        }
        @media (prefers-color-scheme: dark) {
          :root:not([data-theme="light"]) {
            --bg:            #1c1a14;
            --surface:       #262118;
            --surface-hover: #302a1e;
            --border-card:   #3e3428;
            --text-primary:   #f0ead8;
            --text-secondary: #85786a;
            --text-dim:       #4a4038;
            --accent:        #c9a14a;
            --tab-bg:        #2a241a;
            --tab-active-bg: #38311f;
            --time-bg:       #2b2415;
            --time-text:     #c49840;
            --updated-rail:  #c9a14a;
            --updated-bg:    rgba(201,161,74,0.07);
            --updated-badge-bg:   rgba(201,161,74,0.18);
            --updated-badge-text: #e0b860;
            --second-rail:   #e08040;
            --second-bg:     rgba(224,128,64,0.07);
            --second-badge-bg:    rgba(224,128,64,0.18);
            --second-badge-text:  #f0a060;
            --banner-bg:     rgba(201,161,74,0.07);
            --banner-border: rgba(201,161,74,0.22);
            --banner-text:   #c9a14a;
            --script-bg:     #1f1c14;
            --script-rail:   #c9a14a;
            --num-color:     #5a5040;
            --num-updated:   #c9a14a;
            --num-second:    #e08040;
            --arrow-color:   #4a4030;
            --section-label: #4a4030;
          }
        }
        :root[data-theme="dark"] {
          --bg:            #1c1a14;
          --surface:       #262118;
          --surface-hover: #302a1e;
          --border-card:   #3e3428;
          --text-primary:   #f0ead8;
          --text-secondary: #85786a;
          --text-dim:       #4a4038;
          --accent:        #c9a14a;
          --tab-bg:        #2a241a;
          --tab-active-bg: #38311f;
          --time-bg:       #2b2415;
          --time-text:     #c49840;
          --updated-rail:  #c9a14a;
          --updated-bg:    rgba(201,161,74,0.07);
          --updated-badge-bg:   rgba(201,161,74,0.18);
          --updated-badge-text: #e0b860;
          --second-rail:   #e08040;
          --second-bg:     rgba(224,128,64,0.07);
          --second-badge-bg:    rgba(224,128,64,0.18);
          --second-badge-text:  #f0a060;
          --banner-bg:     rgba(201,161,74,0.07);
          --banner-border: rgba(201,161,74,0.22);
          --banner-text:   #c9a14a;
          --script-bg:     #1f1c14;
          --script-rail:   #c9a14a;
          --num-color:     #5a5040;
          --num-updated:   #c9a14a;
          --num-second:    #e08040;
          --arrow-color:   #4a4030;
          --section-label: #4a4030;
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
        .tab.tab-second.active { background: var(--second-rail); color: #fff; }
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
        .card.updated {
          border-left: 3px solid var(--updated-rail);
          border-radius: 0 10px 10px 0; background: var(--updated-bg);
        }
        .card.second {
          border-left: 3px solid var(--second-rail);
          border-radius: 0 10px 10px 0; background: var(--second-bg);
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
          font-variant-numeric: tabular-nums; min-width: 18px; flex-shrink: 0;
        }
        .card.updated .card-num { color: var(--num-updated); }
        .card.second  .card-num { color: var(--num-second);  }

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
        .badge-gold   { background: var(--updated-badge-bg); color: var(--updated-badge-text); }
        .badge-second { background: var(--second-badge-bg);  color: var(--second-badge-text);  }

        .card-arrow {
          font-size: 9px; color: var(--arrow-color);
          transition: transform 0.18s ease; flex-shrink: 0;
        }
        .card.open .card-arrow { transform: rotate(90deg); }

        .card-body { padding: 0 13px 13px; }

        .script {
          background: var(--script-bg); border-left: 3px solid var(--script-rail);
          border-radius: 0 7px 7px 0; padding: 11px 13px; font-size: 13.5px;
          line-height: 1.9; color: var(--text-primary); white-space: pre-wrap; word-break: break-all;
        }
        .card.updated .script { border-left-color: var(--updated-rail); }
        .card.second  .script { border-left-color: var(--second-rail);  }

        .placeholder { color: var(--text-dim); font-style: italic; font-size: 12px; }
      `}</style>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"
      />

      <div className="header">
        <div className="header-eyebrow">Interview Script</div>
        <div className="header-title">エンパワー</div>
        <div className="header-sub">買取反響営業｜二次面接準備</div>
      </div>

      <div className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`tab${tab.isSecond ? ' tab-second' : ''}${activeTab === tab.key ? ' active' : ''}`}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="content">
        {/* 二次面接セクション */}
        <Section
          section={SECOND_SECTION}
          visible={isVisible('second')}
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
