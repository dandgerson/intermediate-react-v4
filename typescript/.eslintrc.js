module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "import", "jsx-a11y", "react-hooks", "@typescript-eslint"],
  rules: {
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-empty-function": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
    // "import/parsers": {
    //   "@typescript-eslint/parser": [".ts", ".tsx"],
    // },
    "import/resolver": {
      // alwaysTryTypes: true,
      // project: "./tsconfig.json",
      node: {
        // paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        // moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
