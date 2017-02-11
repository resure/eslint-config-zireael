module.exports = {
    'plugins': ['react'],
    'extends': ['zireael', 'plugin:react/recommended'],

    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },

    'env': {
        'browser': true
    },

    'rules': {
        'jsx-quotes': ['error', 'prefer-single']
    }
};
