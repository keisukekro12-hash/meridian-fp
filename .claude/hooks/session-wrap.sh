#!/bin/bash
# UserPromptSubmit hook: お疲れさま系キーワードを検知して議事録 + FP_knowledge.md 更新を指示
set -euo pipefail

INPUT=$(cat)

exec /usr/bin/python3 - "$INPUT" <<'PYEOF'
import sys, json, re
from datetime import datetime

try:
    data = json.loads(sys.argv[1])
except Exception:
    sys.exit(0)

prompt = data.get("prompt", "") or ""

if not re.search(r'お疲れ|おつかれ|オツカレ', prompt):
    sys.exit(0)

today = datetime.now().strftime("%Y-%m-%d")

instructions = f"""【セッション終了の合図(お疲れさま系キーワード)を検知しました】

本日({today})のセッション内容を振り返り、以下を順番に実行してください:

---

## STEP 1: 議事録を作成（必須）
保存先: /Users/fukayashouta/Desktop/FP/議事録/{today}_<議題タイトル>.md

構成:
- セッション日時
- やったこと(時系列・簡潔に)
- 決まったこと
- 次のアクション(担当/期限があれば付記)
- 関連ファイル・リンク

## STEP 2: 意思決定ログを作成（決定事項がある場合のみ）
保存先: /Users/fukayashouta/Desktop/FP/意思決定ログ/{today}_<議題タイトル>.md

構成:
- 決定事項(1行サマリ)
- 背景・前提
- 検討した代替案
- 採用理由
- リスク・残課題
- 関連議事録へのリンク

## STEP 3: FP_knowledge.md を更新（必須）
ファイル: /Users/fukayashouta/Desktop/FP/FP_knowledge.md

このセッションで発生した以下の内容を、該当セクションに追記してください:
- 新しいミスパターンとその修正後の正解 → 「🔄 ミスパターン → 修正後の正解」セクション
- ユーザーから指摘を受けたスタイル・好みの修正 → 「🎨 成果物スタイル・好み」セクション
- 新たに判明したエラー予防策 → 「🚨 作業前チェックリスト」セクション
- 思考プロセス・提案スタイルへの要望 → 「💡 思考プロセス・提案スタイル」セクション
- プロジェクト固有の新ノウハウ → 「📚 プロジェクト固有ノウハウ」セクション
- 追記したら「📝 更新ログ」テーブルに日付と更新内容を1行追加する
- このセッションで特に追記すべきことがなければ更新ログだけ追記して「変更なし」と記録

## ファイル名ルール
- <議題タイトル>はセッションの主題を端的に表す日本語(空白は _ に置換)
- 同日に同タイトルで複数ある場合のみ連番(_01, _02)を付与

全ステップ完了後、作成・更新したファイルのフルパスをユーザーに報告してください。
"""

output = {
    "hookSpecificOutput": {
        "hookEventName": "UserPromptSubmit",
        "additionalContext": instructions
    }
}
print(json.dumps(output, ensure_ascii=False))
PYEOF
