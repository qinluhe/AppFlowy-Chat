/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  moduleDirectories: ['node_modules', 'lib'],
  moduleNameMapper: {
    '^@appflowy-chat/(.*)$': '<rootDir>/lib/$1',
  },
};
