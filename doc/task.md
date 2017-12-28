# Group タスク

## タスク [/tasks/:id]

### タスク単体情報取得 [GET]

#### 処理概要

* idで指定したタスクの情報取得

<!-- + Request (application/json) -->
+ Request

    + Headers
        <!-- Accept: application/json -->

+ Response 200 (application/json)

    + Body
    {
      "id": 1,
      "title": "HPCレポート",
      "group_id": 1,
      "done": false
    }

## タスク一覧 [/tasks]

### タスク一覧情報取得 [GET]

#### 処理概要

* タスクの一覧取得

<!-- + Request (application/json) -->
+ Request

    + Headers
        <!-- Accept: application/json -->

+ Response 200 (application/json)

    + Body
    [
      {
        "id": 1,
        "title": "HPCレポート",
        "group_id": 1,
        "done": false
      },
      {
        "id": 2,
        "title": "microbitレポート",
        "group_id": 2,
        "done": false
      },
      {
        "id": 3,
        "title": "protcolレポート",
        "group_id": 1,
        "done": false
      },
      {
        "id": 4,
        "title": "kotlinサーバーサイド",
        "group_id": 2,
        "done": false
      },
      {
        "id": 5,
        "title": "goチャットアプリ",
        "group_id": 3,
        "done": false
      },
      {
        "id": 6,
        "title": "",
        "group_id": 1,
        "done": false
      }
    ]
