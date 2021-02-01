module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint",  "prettier"],
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    "prettier/@typescript-eslint"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".js"],
        moduleDirectory: ["node_modules", "src/"]
      },
    },
    react: {
      version: '999.999.999' // Hides the warning on react version when linting
    }
  },
  rules: {
    "no-use-before-define": "off",
    "no-unused-vars": 2,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "prettier/prettier": 2,
  }
};
