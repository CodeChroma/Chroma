module.exports = {
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"modules": true
		}
	},
	"plugins": [
		"@typescript-eslint"
	],
	"env": {
		"node": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"rules": {
		"no-case-declarations": "off"
	}
}