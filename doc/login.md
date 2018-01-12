

## ログイン [/login]

### ログイン [POST]

#### 処理概要

* ログインapi

+ Request (application/json)

    + Headers

            Accept: application/json

    + Body        
            {
              "name": "user",
              "password": "pass"
            }

+ Response 200 (application/json)

    + Body
    {
      "id": 1,
      "name": "user",
      "group_id": 2,
      "password": "pass"
    }
