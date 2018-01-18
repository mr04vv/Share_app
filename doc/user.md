FORMAT: 1A

# Group ユーザ

## ユーザ [/users{?id}]

+ Parameters

    + id: 1 (number,required) - ユーザid

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
    "name": "おおやま",
    "group":[
    {
    "id": 1,
    "name": "groupppppp"
    },
    {
    "id": 3,
    "name": "おおやまグループ"
    }
    ]
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
    "name": "おおやま",
    "group":[
    {
    "id": 1,
    "name": "groupppppp"
    },
    {
    "id": 3,
    "name": "おおやまグループ"
    }
    ]
    },
    {
    "id": 3,
    "name": "もり",
    "group":[
    {
    "id": 4,
    "name": "グループ森"
    }
    ]
    },
    {
    "id": 5,
    "name": "もりx",
    "group":[
    {
    "id": 1,
    "name": "groupppppp"
    }
    ]
    },
    {
    "id": 6,
    "name": "もりxs",
    "group":[
    {
    "id": 2,
    "name": "group1"
    },
    {
    "id": 3,
    "name": "おおやまグループ"
    }
    ]
    },
    {
    "id": 8,
    "name": "user",
    "group":[]
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
              "name": "user",
              "password": "pass"
            }

+ Response 201 (application/json)

    + Body
    {
    "id": 1,
    "name": "user",
    "group": null
    }
