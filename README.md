"devDependencies": {
"eslint": "^8.34.0",
"eslint-config-airbnb-base": "^15.0.0",
"eslint-plugin-import": "^2.27.5",
"eslint-plugin-node": "^11.1.0",
"eslint-plugin-promise": "^6.1.1",
"husky": "^4.3.8",
"lint-staged": "^13.1.2",
"nodemon": "^2.0.20"
},
"lint-staged": {
"\*.js": [
"eslint"
]
},
"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
}
