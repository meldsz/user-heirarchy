export default {
  setupFilesAfterEnv: ["./src/common/tests/setup.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "<rootDir>/src/common/tests/*",
    "<rootDir>/src/common/utils.js",
    "<rootDir>/src/App.css",
  ],
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".+\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/mockStyle.js",
  },
};
