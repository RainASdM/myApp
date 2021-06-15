module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest",
        "react-hooks"
    ],
    "rules": {
        /*强制在块之前使用一致的空格*/
        "space-before-blocks": 1,

        /*强制在 function的左括号之前使用一致的空格*/
        "space-before-function-paren": ["error", "always"],

        /*ES6:*/
        /*要求箭头函数的参数使用圆括号*/
        "arrow-parens": "error",

        /*强制箭头函数的箭头前后使用一致的空格*/
        "arrow-spacing": "error",

        /*禁止修改类声明的变量*/
        "no-class-assign": "error",

        /*禁止修改 const 声明的变量*/
        "no-const-assign": "error",

        /*禁止类成员中出现重复的名称*/
        "no-dupe-class-members": "error",

        /*禁止重复模块导入*/
        "no-duplicate-imports": "error",

        /*禁止在构造函数中，在调用 super() 之前使用 this 或 super*/
        "no-this-before-super": "error",

        /*要求回调函数使用箭头函数*/
        "prefer-arrow-callback": "warn",

        /* 要求使用 const 声明那些声明后不再被修改的变量*/
        "prefer-const": "error",

        /*优先使用数组和对象解构*/
        "prefer-destructuring": "warn",

        /*要求使用剩余参数而不是 arguments*/
        "prefer-rest-params": "error",

        /*要求 symbol 描述*/
        "symbol-description": "error"
    },
    "globals": {}
};
