module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "keyword-spacing":2,
        "eqeqeq": 2,
        "no-var": 2,
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon" : true,
            "align"      : "colon"
        }],
        "space-before-blocks": 2,
        "space-infix-ops": 2,
    }
};