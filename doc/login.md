

## ログイン [/login]

### ログイン [POST]

#### 処理概要

* ログインapi

+ Request (application/json)

    + Headers

            Accept: application/json

    + Body        
            {
              "name": "おおやま",
              "password": "pass"
            }

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
