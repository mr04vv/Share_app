FORMAT: 1A

# Group ユーザ

## ユーザ [/users/:id]

+ Parameters

    + id: 1 (number) - ユーザid

### ユーザ情報取得 [GET]

#### 処理概要


* idで指定したユーザの情報取得

+ Request (application/json)

    + Headers

            Accept: application/json
            <!-- accessToken: f58ba22059f5a8aa8f346e0f40987adab326041fac99029c909bef2c6300821a -->

+ Response 200 (application/json)

    + Body
    {
      "id": 1,
      "name": "user",
      "group_id": 2,
      "password": "pass"
    }

## ユーザ一覧 [/users]

### ユーザリスト情報取得 [GET]

#### 処理概要

* ユーザ一覧の情報取得

+ Request (application/json)

    + Headers

            Accept: application/json
            <!-- accessToken: f58ba22059f5a8aa8f346e0f40987adab326041fac99029c909bef2c6300821a -->

+ Response 200 (application/json)

    + Body
          [
            {
              "id": 1,
              "name": "user",
              "group_id": 2,
              "password": "pass"
            },
            {
              "id": 2,
              "name": "user2",
              "group_id": 2,
              "password": "pass2"
            },
            {
              "id": 3,
              "name": "user3",
              "group_id": 2,
              "password": "pass3"
            },
            {
              "id": 4,
              "name": "user4",
              "group_id": 2,
              "password": "pass4"
            }
          ]

## ユーザー登録 [/users]

### ユーザー登録 [POST]

#### 処理概要

* ユーザー登録

+ Request (application/json)

    + Headers

            Accept: application/json

    + Body        
            {
              "id": 1,
              "name": "user",
              "group_id": 2,
              "password": "pass"
            }

+ Response 201 (application/json)

    + Body
    {
      "id": 1,
      "name": "user",
      "group_id": 2,
      "password": "pass"
    }
