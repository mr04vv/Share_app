# Shere_app

APIとフロントのリポジトリをそれぞれ作り移行しました。

API:　https://github.com/mr04vv/share_task_api

FRONT:　https://github.com/mr04vv/share_task_frontend
## サーバー起動方法
```console
$ git clone [this repository]
$ cd Share_app
$ cd server
$ ./gradlew bootRun
  ```
  
## Reactプロジェクト実行方法
コマンドラインで
```
yarn start
```
で実行可能
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

```
$ npm install　-g yarn 
$ yarn install (時間かかる)
$ yarn run api
```

実行できたら
```
[INFO] No configuration files found
[INFO] Loading configuration from CLI
   DRAKOV STARTED   
[LOG] Setup Route: GET /tasks/:id タスク単体情報取得
[LOG] Setup Route: GET /tasks タスク一覧情報取得
[LOG] Setup Route: GET /users/:id ユーザ情報取得
[LOG] Setup Route: GET /users ユーザリスト情報取得
   Drakov 1.0.4      Listening on port 3000
 FILE SPY   ACTIVE  
```
こんなのが出てくるから
ブラウザで
http://localhost:8081/users


*ドキュメントを開くときは
```
$ open index.html
```

## apiサーバ起動方法
apiのローカルサーバ起動する方法

まずローカルにsqlのデータベースを作成する
```
$ mysql -u root(ユーザ名) -p (pass)
$ mysql> create database share_app;
```
データベース情報をconnection.ktに記述
```
$ cd server/src/main/kotlin/share_app/db/
$ 自分の好きなエディタで connection.kt
```
(username)と(pass)に自分のsqlのユーザ名とパスワードを入力
```
Database.connect("jdbc:mysql://localhost/share_app", "com.mysql.jdbc.Driver","(username)","(pass)")
```

apiローカルサーバ起動
```
$ cd server (Share_app/serverディレクトリに移動)
$ ./gradlew bootRun
```
起動できたら

```
<===========--> 88% EXECUTING
> :bootRun
```
見たいのが出たら成功


