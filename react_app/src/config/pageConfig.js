export const pageConfig = [
    {
        "path": "/",
        "name": "首页",
        "children": []
    },
    {
        "path": "/login",
        "name": "用户登录",
        "children": [
            {
              "path": "/registered",
              "name": "注册",
              "children": []
            }
        ]
    }
]