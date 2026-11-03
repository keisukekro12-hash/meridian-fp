# 🛒 おつかいボタン

おじいちゃんがスマホに **「牛乳2本と食パン」** と話すだけで、家族のLINEに買い物リストが届くアプリです。
家族は届いたリンクから Amazon で注文します。

```
おじいちゃん: 🎤ボタンを押して話す
   ↓ AI（Claude）が買い物リストに整理
おじいちゃん: 画面と読み上げで確認 →「はい、家族に送る」
   ↓
家族のLINEグループ: 🛒 リスト ＋ Amazon検索リンク
   ↓
家族のだれか: 注文して「注文したよ」と返信（二重注文防止）
```

**自動で注文まではしません。** 聞き間違いによる誤注文や、詐欺・なりすましを防ぐため、注文は必ず家族が確認してから行います。

## 構成

| ファイル | 役割 |
|---|---|
| `public/index.html` | おじいちゃんが使う画面（大きなボタン・音声入力・読み上げ） |
| `api/parse.js` | 話した言葉 → 買い物リスト（Claude API） |
| `api/send.js` | 家族のLINEへ送信（LINE Messaging API） |
| `api/line-webhook.js` | ボットをLINEグループに招待したときにグループIDを返信（初期設定用） |
| `server.js` | 手元で動かす用のサーバー |

## 初期設定（家族がやること・30分ほど）

### 1. LINE 公式アカウントを作る（無料）
1. [LINE Developers](https://developers.line.biz/) にLINEアカウントでログイン
2. プロバイダー作成 → **Messaging API チャネル** を作成（名前は「おつかいボット」など）
3. 「Messaging API設定」タブで **チャネルアクセストークン（長期）** を発行 → `LINE_CHANNEL_ACCESS_TOKEN`
4. 「チャネル基本設定」タブの **チャネルシークレット** → `LINE_CHANNEL_SECRET`
5. LINE Official Account Manager の設定で「グループ・複数人トークへの参加を許可する」をオン

> 無料プランは月200通まで送れます。1日数回の利用なら十分です。
> （以前の「LINE Notify」は2025年3月に終了したため、Messaging API を使っています）

### 2. Claude API キーを取る
[Claude Console](https://platform.claude.com/) でAPIキーを作成 → `ANTHROPIC_API_KEY`
（1回あたりの料金はごくわずかです）

### 3. Vercel に公開する（無料）
1. このフォルダをGitHubのリポジトリにする
2. [Vercel](https://vercel.com/) でそのリポジトリを読み込む（設定はそのままでOK）
3. Environment Variables に `.env.example` の項目を入れる
   - `APP_PASSCODE` には適当な合言葉（例: `kanda-2580`）を入れる
4. デプロイ後、LINE Developers の「Webhook URL」に `https://<あなたのURL>/api/line-webhook` を設定し、「Webhookの利用」をオン

### 4. 家族のLINEグループにボットを招待する
1. 父・母・妹がいる家族グループ（なければ作る）に、ボットを招待
2. ボットが **グループID** を返信してくるので、Vercel の `LINE_GROUP_ID` に入れて再デプロイ
3. 以後、リストはこのグループに届きます

### 5. おじいちゃんのスマホに入れる
1. おじいちゃんのスマホで `https://<あなたのURL>/?key=<合言葉>` を一度開く（合言葉が記憶されます）
2. ブラウザのメニュー →「ホーム画面に追加」で、アイコンを置く
3. 初回だけ「マイクの使用を許可」を押してあげる
4. 一緒に一度ためして、家族グループに届くのを確認する

> 音声入力は Android の Chrome で動きます。らくらくスマホなど一部の機種で使えない場合は、自動で「文字入力」画面になります（キーボードのマイクボタンでも話せます）。

## 手元で動かす

```bash
npm install
MOCK_AI=1 npm run dev     # AIを使わずに画面の動きだけ確認（LINEも送らずログに出す）
npm test
```

`.env` を使う場合は `node --env-file=.env server.js`。

## 今後の改善案
- 「いつもの牛乳」を登録しておき、銘柄を自動で補う
- 家族が「注文したよ」と返信したら、おじいちゃんの画面に「注文しました」と出す
- Amazon 以外のネットスーパー（地域で使えるものを確認してから）
