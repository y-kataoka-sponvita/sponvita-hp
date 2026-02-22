# 株式会社SPONVITA コーポレートサイト

株式会社SPONVITAの公式コーポレートサイトです。

## 構成

- **index.html** - トップページ（会社概要・事業内容・企業情報・お問い合わせ）
- **styles.css** - スタイル（ダークテーマ・レスポンシブ）
- **main.js** - ヘッダーナビゲーション（モバイルメニュー開閉など）

## ローカルで確認する方法

1. このリポジトリをクローンまたはダウンロードする
2. プロジェクトルートで簡易サーバーを起動する（例）:
   ```bash
   npx serve .
   ```
   または `index.html` をブラウザで直接開く
3. ブラウザで表示を確認する

## カスタマイズ

- **企業情報**（設立年・住所など）は `index.html` の「企業情報」セクション（`#company`）を編集してください
- **お問い合わせメール**は `index.html` 内の `mailto:info@sponvita.co.jp` を実際のアドレスに変更してください
- 色やフォントは `styles.css` の `:root` の変数で調整できます

## 技術スタック

- HTML5
- CSS3（カスタムプロパティ、Grid、Flexbox）
- Vanilla JavaScript（ビルド不要）

## ライセンス

© SPONVITA Inc. All rights reserved.
