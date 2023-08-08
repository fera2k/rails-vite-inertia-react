import type { Config } from 'jest';

const config: Config = {
  verbose: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/frontend/$1',
    "\\.(css|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: [
    "<rootDir>/app/frontend/setupTest.ts"
  ],
};

export default config;
