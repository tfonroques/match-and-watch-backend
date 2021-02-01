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
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/explicit-member-accessibility": 2,
    "prettier/prettier": 2,
    // custom rules
    "import/extensions": 0,
    "@typescript-eslint/no-var-requires": 0,
  }
};
