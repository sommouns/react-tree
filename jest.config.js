module.exports = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  reporters: ["default", "jest-junit"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleDirectories: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: '(/__test__/.*|(test|spec)\\.(jsx|tsx))$'
};
