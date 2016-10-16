# OthloTech

[OthloTech](www.othlo.tech)の公式サイトです。

### セットアップ
[Hugo](https://gohugo.io/)というGO製の静的サイトジェネレーターを使用しています。

`homebrew` 経由でダウンロードする場合は

```
brew doctor        # homebrew のチェック
brew update        # homebrew を最新版に
brew install hugo  # hugo をインストール
```

### サーバーの立ち上げ

```
hugo server -watch  # 変更を監視して自動リロード
#=> http://localhost:1313 でアクセス
```

### 記事の投稿方法
#### 1) ブランチを切る

```
git checkout -b post/xxxx  # post/xxxxというブランチを作成し、そこへ移動
# 例) git checkout -b post/othlohack2016
```

#### 2) 記事を生成

```
hugo new posts/xxxx.md     # content/postsフォルダに xxxx.md というファイルを作成
# 例) hugo new posts/othlohack2016.md
```

#### 3) 記事を書く
2)で生成した記事にマークダウン記法で記事を書く。
マークダウンの記法は以下のリンクを参照
[https://help.github.com/categories/writing-on-github/](https://help.github.com/categories/writing-on-github/)

#### 4) 記事をプッシュする
記事は `masterブランチ` にpushするのではなく、本番に反映前に一度確認を入れたいので、1)で切ったブランチにプッシュします。

```
git add .
git commit -m 'OthloHack2016の記事を追加'
git push origin posts/xxx
```

#### 5) GitHub上でプルリクを出す
pushしたのち、GitHub上でプルリクを出す。これをみんながレビューをして、LGTMが3つ以上つけば、責任者がマージをする。

#### 6) 本番に反映(この操作は責任者が実行する)

```
hugo -d pages  # pagesフォルダコンパイル
cd pages       # pagesフォルダに移動
git push origin gh-pages # gh-pagesブランチに反映
```


### 技術スタック

#### サーバーサイド

サーバは自前で用意せず、GitHubのホスティングサービスを使用
- [GitHub Pages](https://pages.github.com/)

#### フロントエンド

##### ジェネレーター
静的サイトジェネレーターにはHugoを使用
- [Hugo](https://gohugo.io/)

##### CSS
- [Bootstrap](http://getbootstrap.com/)

##### JS
- jQuery(2系)

#### タスクランナー
現在は使用していない。
- [Gulp](http://gulpjs.com/)
