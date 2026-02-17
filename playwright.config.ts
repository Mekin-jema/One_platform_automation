import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  // Directory where tests are located
  testDir: './tests',

  // Run login once before all tests to create storageState
  globalSetup: './utils/auth/global-login.setup.ts',

  // Global timeout per test
  timeout: 4 * 60 * 1000,

  // Number of parallel workers
  workers: 4,

  // Test reporters
  reporter: [
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],

  use: {
    // Base URL for all tests
    baseURL: 'https://one-platform-um-fe.oat.sma2.safaricomet.net',

    // Run browser with UI (not headless)
    headless: false,

    // 🔥 VERY IMPORTANT
    // Disable Playwright's fixed viewport
    // Allows browser window to control full width & height
    viewport: null,

    // Browser launch options
    launchOptions: {
      args: [
        '--start-maximized',              // Open browser fully maximized
        '--force-device-scale-factor=0.9' // Your zoom preference
      ],
    },

    // Capture screenshots
    screenshot: 'on',

    // Record videos for tests
    video: 'on',

    // Enable tracing (screenshots + DOM + source)
    trace: 'on',

    // Timeout for actions like click, fill, etc.
    actionTimeout: 30 * 1000,

    // Timeout for page navigation
    navigationTimeout: 60 * 1000,

    // Ignore HTTPS / SSL issues
    ignoreHTTPSErrors: true,

    // Reuse authenticated session created in globalSetup
    storageState: 'storageState.json',
  },
});
