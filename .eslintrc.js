module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": [2, "tab", { "SwitchCase": 1 }],

        "comma-dangle": [2, "never"],
		"no-cond-assign": [2, "always"],
        
		// disable rules from base configurations
        "no-tabs": 0,
		"no-console": 0,
		// "no-mixed-spaces-and-tabs": [2, "always"],
        "eqeqeq": [2, "smart"],
        
        "react/jsx-no-literals": 2,
        "react/jsx-uses-vars": 2,
        "react/self-closing-comp": 2,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-tag-spacing": 0
    },
    "globals": {
        "React": false,
        "document": false
    },
    "plugins": [
		"react"
	]
};