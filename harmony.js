module.exports = {
    'extends': ['zireael/es2015', 'plugin:react/recommended'],

    'env': {
        'browser': true
    },

    'plugins': ['react'],
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
            'experimentalObjectRestSpread': true
        }
    },

    'rules': {
        'jsx-quotes': ['error', 'prefer-single']
    }
};
