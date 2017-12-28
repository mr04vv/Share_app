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

## api_mock実行方法
apiのmockサーバを起動する方法

[yarn]
```
$ npm install yarn 
$ yarn install (時間かかる)
$ yarn run api
```


*ドキュメントを開くときは
```
$ open index.html
```
