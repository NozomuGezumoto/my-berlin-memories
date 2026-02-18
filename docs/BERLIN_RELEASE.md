# My Berlin リリース手順

ベルリン向けビルドと App Store / Google Play リリースに必要な手順とドキュメントです。

---

## 1. 事前準備

### 1.1 EAS Project ID の設定（必須）

**まだ my-berlin を一度も作っていない場合**

```bash
eas init
```

で新規作成し、表示された **Project ID**（UUID）を `app.config.js` の `extra.eas.projectId` に設定します。

```javascript
// app.config.js
extra: {
  eas: {
    projectId: 'ここに取得した Project ID（UUID）を貼り付け',
  },
},
```

**既存の my-berlin プロジェクトがある場合**

```bash
eas project:list
```

一覧から **my-berlin** の Project ID をコピーし、上記のとおり `app.config.js` に設定します。

### 1.2 必要なアカウント

- **Expo / EAS**: [expo.dev](https://expo.dev) アカウント（owner: `nozomusp`）
- **Apple**: Apple Developer Program（App Store Connect）
- **Google**: Google Play Console 開発者アカウント

---

## 2. ビルド

### 2.1 ローカルで動作確認（任意）

```bash
npm run start:berlin
# または（macOS/Linux）
CITY=berlin npx expo start --tunnel
```

### 2.2 EAS でビルド

**iOS（App Store 用）**

```bash
npm run build:berlin
# または
eas build --profile berlin -p ios
```

**Android**

```bash
eas build --profile berlin -p android
```

**両方**

```bash
eas build --profile berlin -p all
```

ビルド完了後、[expo.dev](https://expo.dev) のプロジェクト「My Berlin」から成果物を確認できます。

---

## 3. ストア申請用情報

### 3.1 アプリ識別子

| 項目 | 値 |
|------|-----|
| **アプリ名** | My Berlin |
| **Bundle ID (iOS)** | `com.mycity.myberlin` |
| **Package name (Android)** | `com.mycity.myberlin` |
| **URL Scheme** | `myberlin` |

### 3.2 ストア用テキスト（英語）

**短い説明（サブタイトル）**

```
Pin your Berlin memories on the map.
```

**説明文（Description）**

```
My Berlin is a personal memory map for the city you love. Drop pins on the map to save your favourite spots—cafés, parks, museums, and hidden gems—with photos and notes. No social features, no ratings: just your own Berlin diary on the map.

• Map centred on Berlin with clustering
• Photo pins and text pins with emoji
• Categories and star ranking (1–3)
• Filter by category
• Offline-friendly storage on your device

Perfect for travellers and locals who want to keep a visual record of their Berlin moments.
```

**キーワード（iOS、カンマ区切り）**

```
Berlin, map, memories, pins, travel, diary, photo, places, Germany
```

**プライバシーポリシー（URL）**

- アプリ内で位置・写真・メモを端末内に保存する旨を記載したプライバシーポリシー URL を準備し、ストアの「プライバシーポリシー」欄に設定してください。

### 3.3 ストア用テキスト（日本語・任意）

**短い説明**

```
ベルリンの思い出を地図にピンで残そう。
```

**説明文**

```
My Berlin は、ベルリンで過ごした場所を地図にピンで残すアプリです。カフェ、公園、博物館、お気に入りのスポットに写真やメモをつけて保存できます。SNS機能や評価はなく、あなた専用のベルリン日記です。

・ベルリン中心の地図とピンのクラスタ表示
・写真ピン・テキストピン（絵文字対応）
・カテゴリと星1〜3のランク
・カテゴリでフィルター
・データは端末内に保存

旅行者もベルリン在住の方も、思い出を地図で残したい方に。
```

---

## 4. ストア提出（Submit）

ビルドが成功したら、EAS Submit でストアに提出できます。

**iOS（App Store Connect）**

```bash
eas submit --profile berlin -p ios
```

**Android（Google Play Console）**

```bash
eas submit --profile berlin -p android
```

初回提出時は、各ストアの管理画面で以下を設定してください。

- **App Store Connect**: アプリ名、説明、キーワード、カテゴリ、スクリーンショット、プライバシーポリシー URL、年齢制限など
- **Google Play Console**: ストア掲載情報、コンテンツレーティング、プライバシーポリシー、データの安全性など

---

## 5. リリース前チェックリスト

- [ ] `app.config.js` の `extra.eas.projectId` に EAS Project ID を設定済み
- [ ] `eas build --profile berlin` で iOS / Android ビルドが成功
- [ ] 実機で My Berlin として起動・動作確認
- [ ] プライバシーポリシー URL を準備済み
- [ ] App Store Connect / Google Play Console でアプリ登録・ストア情報を入力済み
- [ ] スクリーンショット（各デバイスサイズ）を準備
- [ ] `eas submit --profile berlin` で提出完了

---

## 6. 参考コマンド一覧

| 目的 | コマンド |
|------|----------|
| ローカル起動（Berlin） | `npm run start:berlin` |
| EAS ビルド（Berlin） | `npm run build:berlin` または `eas build --profile berlin -p ios` |
| iOS 提出 | `eas submit --profile berlin -p ios` |
| Android 提出 | `eas submit --profile berlin -p android` |
| ビルド一覧確認 | `eas build:list` |
