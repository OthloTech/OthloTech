# 本番環境へのデプロイ方法

※ この操作は管理権限を持っている者のみ実行可能

```
cd pages
git pull origin gh-pages # リモートの最新状態に更新
cd ..
./deploy.sh "コミットメッセージ"
```
