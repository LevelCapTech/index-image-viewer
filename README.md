![GitHub last commit](https://img.shields.io/github/last-commit/LevelCapTech/vue3-project-template)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/LevelCapTech/vue3-project-template)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/LevelCapTech/vue3-project-template)
![GitHub Repo stars](https://img.shields.io/github/stars/LevelCapTech/vue3-project-template)

# vue3-project-template
このテンプレートは、Vite を使用して Vue 3 と TypeScript を使った開発を始めるのに役立ちます。テンプレートでは Vue 3 の `<script setup>` SFCs（単一ファイルコンポーネント）を使用しています。詳細については、[script setup ドキュメント](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) をご覧ください。  

推奨されるプロジェクトのセットアップ方法や IDE のサポートについては、[Vue ドキュメント TypeScript ガイド](https://vuejs.org/guide/typescript/overview.html#project-setup) を参照してください。

# まず最初に

devcontainerを起動したら、まず初めに下記を実行してください。

```
npm install
npm run dev
```

http://localhost:5173/
で開いてVueアプリの起動を確認してください。

# ダウンロード方法

本番環境などで、最新のアプリをダウンロードする場合は下記を実行してください。

```sh
curl -L -o indexof-image-viewer.zip $(curl -s https://api.github.com/repos/LevelCapTech/indexof-image-viewer/releases/latest | grep "browser_download_url" | cut -d '"' -f 4)
# あとは解凍して、nginx等に配置してください
unzip -o indexof-image-viewer.zip -d /usr/share/nginx/html
```
