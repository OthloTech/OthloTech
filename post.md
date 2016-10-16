# 記事の投稿方法

wwOthloにはイベントレポート( `events` )とブログ記事( `posts` )の二種類があります。

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
[マークダウン記法](https://github.com/OthloTech/OthloTech/blob/master/markdown.md)を参照してください。

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
