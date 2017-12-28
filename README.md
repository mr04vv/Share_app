# Shere_app

## How to excute
```console
$ git clone [this repository]
$ cd Share_app
$ cd server
$ ./gradlew bootRun
  ```
## 作業を行うときは
```console
$ git pull //master　branchで
$ git checkout -b front(or　server)/#(issue番号)-(わかりやすい名前)
(例　$ git checkout -b server/#11-get-user)
```
できるだけ最新バージョンのmasterからブランチ切って作業しよう
masterにない部分を拡張したい場合はプルリク送るか
今いるブランチから新しくブランチ切ってもおk

## 作業が終わったら
```console
$ git add ./
$ git commit -m "（コメント）"
$ git push origin (ブランチ名)
```
githubに行って、pull　request　するようにしてね！

## 今いるブランチがわからなくなったら
```console
$ git branch
($ git branch -a でリモートにあるブランチも見れる)
```

## document作成方法
ドキュメントに修正を加えたら以下のコマンドを実行する


[npm]
```
$ npm install (結構時間かかる)
$ npm run-script doc
(この中で aglio -i index.md -o index.htmlが実行される)
```
[yarn]
```
$ npm install yarn 
$ yarn install
$ yarn run doc
```
どちらか一方でOK

ドキュメントを開くときは
```
$ open index.html
```
