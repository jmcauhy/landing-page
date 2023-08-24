module.exports = {
   root: true,
   env: { browser: true, es2021: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
   ],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['react-refresh'],
   rules: {
      "@typescript-eslint/ban-ts-comment": [
         "error",
         { "ts-ignore": "allow-with-description" }
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "array-bracket-spacing": ["error", "never"],
      "comma-dangle": ["error", "always-multiline"],
      "eol-last": ["error", "always"],
      "indent": "off",
      "@typescript-eslint/indent": [
         "error",
         3,
         {
            "ArrayExpression": "first",
            "CallExpression": { "arguments": "first" },
            "FunctionDeclaration": { "parameters": "first" },
            "FunctionExpression": { "parameters": "first" },
            "ObjectExpression": "first",
            "VariableDeclarator": "first"
         }
      ],
      "keyword-spacing": ["error"],
      "lines-around-comment": [
         "error",
         {
            "allowBlockStart": true,
            "beforeBlockComment": true,
            "beforeLineComment": true
         }
      ],
      "no-console": ["warn"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "single"],
      "react-hooks/rules-of-hooks": "error",
      "semi": ["error", "never"],
      "space-in-parens": ["error", "never"],
      'react-refresh/only-export-components': [
         'warn',
         { allowConstantExport: true },
      ],
   },
}
