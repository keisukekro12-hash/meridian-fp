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
      id: 'F00',
      num: '📌',
      title: '会社理解メモ（面接前に確認）',
      time: '読むだけ',
      script: `【主力製品】
アイソレーター（無菌クリーン化装置）・滅菌装置
→ 医薬品製造工程向け無菌・クリーン化設備の国内トップシェア企業

【顧客】
製薬会社・再生医療研究機関・ワクチン・抗がん剤メーカーなど

【会社の強み】
・国内外90件以上の特許。競合はほぼ存在しない
・ノーベル生理学・医学賞に関わる研究にも製品が使われている
・1年半先まで受注が埋まっている（急成長中）
・5年で売上・従業員ともに倍増

【PM職の業務フロー】
①引き合い・展示会 → プレゼン・提案
②空調設計と見積・仕様書・外形図の作成
③受注後キックオフ → 機械・電気設計と詳細仕様＆スケジュール調整
④試作・操作確認 → 仕様書・図面修正
⑤製作・搬入・据付・検査 → 引渡し

【組織】
配属部門：10数名（20代〜60代、平均年齢30代半ば）
中途入社50%以上・20代の管理職登用実績あり

【待遇】
年収500〜850万円 / 27歳4年目で530万円実績
完全週休2日・年間休日124日・離職率5%以下
入社後：愛知で1〜3ヶ月研修あり`,
    },
    {
      id: 'F01',
      num: 'F01',
      title: '自己紹介（冒頭の掴み）',
      time: '30〜60秒',
      variant: 'new',
      badge: 'new',
      script: `はじめまして、成田圭助と申します。

2021年度に愛知工業大学を卒業後、株式会社テクノプロに入社いたしました。前職はエンジニアの派遣・請負事業を行っている会社で、新卒から約3年間、東北の東京エレクトロンテクノロジーソリューション様のメカ設計部門に派遣として常駐し、半導体製造装置の設計業務に従事しており、3D CADを使用したモデリングや製図、解析、数値計算などをメインに行なっていました。

本日はどうぞよろしくお願いいたします。`,
    },
    {
      id: 'F02',
      num: 'F02',
      title: '転職理由',
      time: '50秒〜1分',
      variant: 'new',
      badge: 'new',
      script: `転職を考えた理由は、大きく2点あります。

1点目は、キャリアの幅を広げたいという思いです。設計職として5年間、技術的なスキルを積み上げてきましたが、業務をする中で、設計部門だけでなく前後の工程や他部門が担う仕事、部門間の連携の部分にも自然と目が向くようになりました。「もっとこうすればいいのに」と感じる機会が多々あり、そういった改善に直接関われる仕事への興味がどんどん強くなっていきました。

2点目は、個人がモチベーションや責任感・成長意欲を持ちながら、自分のスキルアップを図っていける環境に身を置き、キャリアアップに繋げていきたいという思いです。

27歳という、キャリアチェンジが現実的なこのタイミングで、転職を決断いたしました。`,
    },
    {
      id: 'F03',
      num: 'F03',
      title: '志望動機（なぜエアレックス？なぜPM？）',
      time: '1分〜1分30秒',
      variant: 'new',
      badge: 'new',
      script: `御社を志望した理由は、大きく2点あります。

1点目は、PM職が自分のやりたいこととの合致度が非常に高かったからです。前職でエンジニアとして5年間従事する中で、他部門との連携の部分や会社の仕組み・バックエンドの部分など、改善すべき点がたくさんあると感じており、そういったところに関われる仕事に強い興味を持っていました。設計職のキャリアアップとは別の選択肢として、経営企画やプロジェクト企画といった企画職も検討していた中で、PMという職があることを知り、これまでの技術経験を活かすことができて、かつ自身のやりたい前後の工程も含めた広い範囲での改善・効率化を、自身の裁量を持って行うことができるという部分でのマッチ度が非常に高いと感じ、強く惹かれました。

2点目は、御社の社風への共感です。実情を伺った際に、会社のチャレンジ精神や状況に応じた臨機応変な柔軟さ、また個人が高い責任感を持って動く文化に、強く魅力を感じました。高いモチベーションを持って成長していける環境だと確信し、ぜひ御社で挑戦させていただきたいと思っております。`,
    },
    {
      id: 'F04',
      num: 'F04',
      title: 'なぜ設計からPMへ？',
      time: '40〜50秒',
      variant: 'new',
      badge: 'new',
      script: `もともとの転職候補としては、設計職でのキャリアアップを考えておりました。また、27歳でのキャリアチェンジはタイミング的に最後のチャンスになるかもしれないという意識もあり、選択肢を幅広く考えておりました。

前職のエンジニアとして働く中で、「もっとこうすれば会社として良くなるのに」「部署としてこうするべきなのに」という場面が多々あっても、裁量がなく手が届かないという歯がゆさを感じておりました。そういった部分を担えるような、幅の広い仕事に強い魅力を感じておりました。

技術職でのやりがいも感じながらどちらを選ぶか検討していた中で、御社の担当者様とお話しする機会をいただき、プロジェクトマネジメントという職種について知ることができました。技術経験も活かせて、かつ自分が感じていた歯がゆさの部分にも関われるということに強く魅力を感じ、応募に至りました。`,
    },
    {
      id: 'F05',
      num: 'F05',
      title: '一番の実績・強みのエピソード',
      time: '1〜2分',
      variant: 'updated',
      badge: 'update',
      note: 'エンパワー S01/07 参照 → PM視点で語り直し済み',
      script: `これまでで最も誇りに思う実績は、東京エレクトロン様への常駐業務において、派遣という立場から客先の部長様より直接、請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただけたことです。

この信頼を積み上げてこられた背景には、2点意識し続けてきたことがあります。

1点目は、成果物の「質」への姿勢です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を、積極的に行ってまいりました。

2点目は、「スピード」の継続的な改善です。同じ業務であれば、1回目に1時間かかった作業を2回目は50分・3回目は40分という形で、常に効率化を意識して取り組んでまいりました。

3年目には後輩のOJT、4年目からはチームリーダーとして3名の進捗管理・育成も担い、技術とマネジメントの両方を積み上げることができました。`,
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
        script: `はじめまして、成田圭助と申します。

2021年度に愛知工業大学を卒業後、株式会社テクノプロに入社いたしました。前職はエンジニアの派遣・請負事業を行っている会社で、新卒から約3年間、東北の東京エレクトロンテクノロジーソリューション様のメカ設計部門に派遣として常駐し、半導体製造装置の設計業務に従事しており、3D CADを使用したモデリングや製図、解析、数値計算などをメインに行なっていました。

設計業務を通じてお客様との仕様調整や部門間の連携に関わる中で、プロジェクト全体を動かす仕事への関心が高まり、このたびPM職へのキャリアチェンジを志望しております。本日はどうぞよろしくお願いいたします。`,
      },
      {
        id: '02',
        num: '02',
        title: '自己PR（PM職向け）',
        time: '1〜1分30秒',
        badge: 'new',
        script: `私の強みは、「技術的な理解力」と「関係者をつなぐコミュニケーション力」の2点です。

前職では設計者として5年間、お客様の要求仕様を正確に理解した上で設計に落とし込む業務を繰り返してきました。お客様が求めていることを的確につかみ、それを社内に噛み砕いて伝えることが、設計の質と信頼を守る上で最も大切だと、身をもって学んでまいりました。

また、チームリーダーとして3名の進捗管理を担う中で、「誰が何をどこまでやっているか」を常に把握し、遅延の予兆を早めに察知して動く習慣が身につきました。

PM職では、この「技術がわかった上でのコミュニケーション力」と「先を読んだスケジュール管理」を、最大限に発揮できると確信しております。`,
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
      {
        id: '04b',
        num: '04b',
        title: 'リーダーか支えるタイプか',
        time: '30〜40秒',
        script: `どちらかといえば、支えるタイプだと自己理解しています。

精度や網羅性を重視する性格から、抜け漏れやリスクがないかを徹底的に確認し、完璧な状態を作り上げることに強みを発揮できるタイプです。「前を向いて引っ張る」よりも「後ろをしっかりカバーする」役割が得意だと感じております。

ただ、前線で活躍したい・自分が中心になって動きたいという思いも強く持っていますので、完全なサポート役というよりはナンバーツーとして組織を支えながら存在感を出していくポジションが最も自分らしいと考えています。`,
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
        script: `前職では、半導体製造装置メーカーである東京エレクトロン様の機械設計部門に、派遣で3年間、請負で2年間、計5年間お世話になりました。

業務のメインは、SolidWorksを使った3Dモデリングおよび製図です。設計変更・新規設計問わず、部品図から組立図まで幅広く担当しておりました。

解析面では、SolidWorksを用いた構造解析（静的解析）をメインに、必要に応じて熱解析・流体解析も担当しておりました。また、装置内の部品干渉の計算や、手計算が必要な数値計算なども業務の中で行っておりました。

請負に移行した後半2年間は、自身の設計業務と並行して、3名のメンバーのチームリーダーとしてのマネジメント業務も担当しておりました。`,
      },
      {
        id: '06',
        num: '06',
        title: 'キャリアで一番の実績・成果',
        time: '1〜2分',
        badge: 'update',
        variant: 'updated',
        note: 'エンパワー S01/07 参照 → PM視点で語り直し済み',
        script: `これまでで最も誇りに思う実績は、東京エレクトロン様への常駐業務において、派遣という立場から客先の部長様より直接、請負への移管をご依頼いただき、約5年間、一貫して同じ部署の仕事を任せていただけたことです。

この信頼を積み上げてこられた背景には、2点意識し続けてきたことがあります。

1点目は、成果物の「質」への姿勢です。依頼された設計をこなすだけでなく、周辺部品への影響を先読みし、「この変更に合わせてここも改善するとより効果的です」というプラスアルファの提案を、積極的に行ってまいりました。

2点目は、「スピード」の継続的な改善です。同じ業務であれば、1回目に1時間かかった作業を2回目は50分・3回目は40分という形で、常に効率化を意識して取り組んでまいりました。

3年目には後輩のOJT、4年目からはチームリーダーとして3名の進捗管理・育成も担い、技術とマネジメントの両方を積み上げることができました。`,
      },
      {
        id: '07',
        num: '07',
        title: 'チームリーダー・マネジメント経験',
        time: '30〜40秒',
        badge: 'new',
        script: `4年目、請負に移行したタイミングから、3名のメンバーのチームリーダーを務めておりました。

主な業務は、週次での進捗確認・リソースの調整・成果物のレビュー・逐一の業務フォローです。特に意識していたのは、課せられた設計納期に対してタイム管理がしっかり行われているかどうかという点と、検討すべき内容に漏れや不備がないかという点でした。

検討内容の漏れについては、本人では判断が難しい部分も多いため、自身の知見でカバーできる範囲はフォローし、それが行き届かない部分については、お客様の有識者やベテラン社員にコネクトする役割を担うことで、成果物の質をしっかりと担保できるようマネジメントを心がけておりました。`,
      },
      {
        id: '08',
        num: '08',
        title: 'トラブルの対応方法',
        time: '30〜40秒',
        script: `トラブルが発生した際は、まず状況の全体像と詳細をしっかり把握することを最初に行います。

その上で原因を明確にし、対処に何が必要か・他の工程や部品への影響はないかを整理してからリカバリー処置に入るようにしております。

また、早急な対応が必要な場面や専門的な知識が求められる局面では、関連部署の方や有識者に積極的に知見を仰ぎながら、求められるスピードを守りつつ精度を落とさない対応を心がけてまいりました。`,
      },
      {
        id: '08b',
        num: '08b',
        title: '他部署との連携方法',
        time: '30〜40秒',
        script: `前職ではメカ設計の担当として、制御や筐体・周辺装置を担う各部署と連携しながら設計をフィックスしてまいりました。

専門知識が必要な場面では各カテゴリーの担当者に積極的に知見を仰ぎ、また製造部門とは現場で作業される方の意見や要望をヒアリングして設計に反映させることも行っておりました。試作品の現場確認を経て設計完了に持っていくプロセスを繰り返す中で、要所要所で各部署と密に連携する習慣が身についたと感じております。

PMとしても、この経験をもとに関係部署を巻き込みながらプロジェクトを動かしていけると考えております。`,
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
        script: `転職を考えた理由は、大きく2点あります。

1点目は、自分のキャリアの幅を広げたいという思いです。設計職として5年間、技術的なスキルを着実に積み上げてきました。ただ業務をこなす中で、設計部門だけでなく、前後の工程や他部門が担う仕事・部門間の連携の部分にも自然と目が向くようになっていきました。「もっとこうすればいいのに」と感じる機会が多々あり、そういった改善に直接干渉できる立場への興味が、どんどん強くなっていきました。

2点目は、個人がモチベーションや責任感・成長意欲を持ちながら、自分のスキルアップを図っていける環境に身を置いてキャリアアップに繋げたい、という思いです。

これら2点を踏まえ、27歳というキャリアチェンジが現実的なこのタイミングで、転職を決断いたしました。`,
      },
      {
        id: '10',
        num: '10',
        title: '志望動機（詳細版）',
        time: '1〜1分30秒',
        script: `御社を志望した理由は、大きく2点あります。

1点目は、PM職が自分のやりたいこととの合致度が非常に高かったからです。前職でエンジニアとして5年間従事する中で、他部門との連携の部分や、会社の仕組み・バックエンドの部分など、改善すべき点がたくさんあると感じており、そういったところに関われる仕事への関心がありました。設計職のキャリアアップとは別の選択肢として、経営企画やプロジェクト企画といった企画職も候補として考えておりました。その中でPMという職があることを知り、これまでの技術経験も活かせて、自分のやりたいこととのマッチ度が非常に高いと感じ、強く惹かれました。

2点目は、御社の社風への共感です。実情を伺った際に、会社のチャレンジ精神や状況に応じた臨機応変な柔軟さ、また個人が高い責任感を持って動く文化に、強く魅力を感じました。高いモチベーションを持ちながら成長していける環境だと確信し、ぜひ御社で挑戦させていただきたいと思っております。`,
      },
      {
        id: '11',
        num: '11',
        title: '他社の選考状況・志望順位',
        time: '20〜25秒',
        script: `現在は、設計職としてのキャリアアップを図る軸と、キャリアチェンジを図る軸の2軸で活動しております。設計系の企業と、反響営業職の企業を各1〜2社ずつ、「ここであれば活躍・成長できる」と感じた会社に絞って選考を進めており、反響営業の会社からは内定をいただいている状況です。

志望順位としては、これまでの技術経験を活かしながらプロジェクト全体に携わるPM職である御社が第一志望です。`,
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
        script: `前職で、一時期、上司との関係構築に苦労した時期がありました。コミュニケーションが取りにくく、メンタル面でも負荷がかかる状況でしたが、この経験から大切なことを学びました。

まず、「この経験を乗り越えれば今後の耐性になる」とポジティブに捉え直すようにしました。また、上司も多くの仕事と責任を抱えており、その分のストレスがあることを理解し、歩み寄る姿勢を心がけました。

具体的には、仕事を積極的に引き受けて負荷を分散させることや、協力的な姿勢・コミットする面を見せることで、少しずつ関係性を改善していきました。この経験を通じて、困難な状況でも冷静に原因を見極め、自分からアクションを起こす力が身についたと感じております。`,
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
        script: `私が大切にしているのは、妥協せず常に成長し続けることです。

指示された仕事をこなすだけで満足せず、本当に必要なことは何かを自ら考え、スキルアップや改善を意識しながら取り組む姿勢を大切にしております。`,
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
