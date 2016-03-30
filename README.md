# eslint-config-zireael

Shareable configs for ESLint.

## Install

```
$ npm install --save-dev eslint@2.x babel-eslint@6 eslint-config-zireael
```

## Usage

Add appropriate ESLint config to your `.eslintrc`.

### Common rules

```json
{
	"extends": "zireael"
}
```

### Node.js environment

```json
{
	"extends": "zireael/server"
}
```

### Client environment

```json
{
	"extends": "zireael/client"
}
```
