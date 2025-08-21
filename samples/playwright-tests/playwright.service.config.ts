import { defineConfig } from '@playwright/test';
import { getServiceConfig, ServiceOS, ServiceAuth } from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';
import config from './playwright.config';
import * as dotenv from 'dotenv';
import { randomUUID } from 'crypto';

dotenv.config();

// Name the test run if it's not named yet.
process.env.PLAYWRIGHT_SERVICE_RUN_ID = process.env.PLAYWRIGHT_SERVICE_RUN_ID || randomUUID();

// Can be 'linux' or 'windows'.
const os = process.env.PLAYWRIGHT_SERVICE_OS || 'linux';

/* Learn more about service configuration at https://aka.ms/mpt/config */
export default defineConfig(
  config,
  getServiceConfig(config, {
    serviceAuthType: ServiceAuth.ACCESS_TOKEN,
    exposeNetwork: '<loopback>',
    timeout: 30 * 60 * 1000, // 30 minutes
    os: ServiceOS.LINUX,
    runId: process.env.PLAYWRIGHT_SERVICE_RUN_ID,
  }),
  {
    // Override any additional configuration
    use: {
      ...config.use,
    },
  }
);
