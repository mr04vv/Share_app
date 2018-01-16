# Group タスク

## タスク [/tasks/:id]

### タスク単体情報取得 [GET]

#### 処理概要

* idで指定したタスクの情報取得

+ Request (application/json)

    + Headers
        Accept: application/json

+ Response 200 (application/json)

    + Body
    {
    "id": 1,
    "title": "CN期末試験",
    "group_id": 4,
    "done": false,
    "dead":{
    "year": 2018,
    "month": 2,
    "day": 2
    }
    }

## タスク一覧 [/tasks{?group}]
+ Parameters

    + group: 1 (number,required) - リストが欲しいグループのid

### タスク一覧情報取得 [GET]

#### 処理概要

* グループごとのタスク一覧取得

+ Request (application/json)

    + Headers
        Accept: application/json

+ Response 200 (application/json)

    + Body
    [
  {
  "main":{
  "id": 1,
  "title": "CN期末試験",
  "group_id": 1,
  "done": false,
  "dead":{
  "year": 2018,
  "month": 2,
  "day": 2
  }
  }
  },
  {
  "main":{
  "id": 2,
  "title": "cs実験round4レポート",
  "group_id": 1,
  "done": false,
  "dead":{
  "year": 2018,
  "month": 1,
  "day": 22
  }
  }
  }
  ]


## タスク投稿 [/tasks]

### タスク情報投稿 [POST]

#### 処理概要

* req.bodyのタスク情報を　dbに追加

+ Request (application/json)

    + Headers
      Accept: application/json

    + Body
    {
"title": "cs実験round4レト",
"group_id": 4,
"done": false,
"dead":{
  "year":2018,
  "month":1,
  "day":22
}
}

+ Response 201 (application/json)

    + Body
    {
"id": 1,
"title": "cs実験round4レト",
"group_id": 4,
"done": false,
"dead":{
"year": 2018,
"month": 1,
"day": 22
}
}
