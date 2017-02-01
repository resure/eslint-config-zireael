# eslint-config-zireael

Shareable configs for ESLint.

## Install

With yarn:

```
$ yarn add --dev eslint-config-zireael
```

```
$ npm install --save-dev eslint-config-zireael
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
