# 記事の投稿方法

記事にはイベントレポート( `events` )とブログ記事( `blogs` )の二種類があります。

#### 1) ブランチを切る

```
git checkout -b event/xxxx  # event/xxxxというブランチを作成し、そこへ移動
# 例) git checkout -b event/othlohack2016
```

#### 2) 記事を作成

```
hugo new events/xxxx.md     # content/eventsフォルダに xxxx.md というファイルを作成
# 例) hugo new events/othlohack2016.md
```
（※ 直接`/content/blogs` や `/content/events`に`xxxx.md`ファイルを作成してもよい）

#### 3) 記事を書く
`2)`で作成した記事にマークダウン記法で記事を書きます。  
詳しくは[マークダウン記法](https://github.com/OthloTech/OthloTech/blob/master/docs/markdown.md)を参照してください。

#### 4) 執筆途中の記事をコミット
```
git branch  # 1)で作ったブランチにいるか確認
git add .
git commit -m '写真を追加'  # 簡単なコミットメッセージを付ける
```

#### 5) 記事をプッシュ
記事は `masterブランチ` にpushするのではなく、公開前のレビューをするために`1)`で切ったブランチにプッシュします。

```
git push origin events/xxx
```

#### 6) GitHub上でプルリクを出す
プッシュしたのち、GitHub上で`Pull Request`を作成します。  
作業途中であれば`WIP`、レビューOKであれば`REVIEW`のラベルを付けて下さい。  
これをメンバーがレビューし、LGTMが3つ以上つけば、管理者がマージをします。

レビューで確認する点については[記事の執筆方法](https://github.com/OthloTech/OthloTech/blob/master/docs/write-post.md)を参考にしてください。

#### 7) Github Pagesにデプロイ(この操作は管理者が実行する)

```
./deploy.sh "コミットメッセージ"
```
