// src/config.ts
import dotenv from 'dotenv';
import { cleanEnv, str } from 'envalid';

dotenv.config();

const env = cleanEnv(process.env, {
  DATABASE_URL: str(),
});

// src/config.ts
export const GITHUB_TOKEN = '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';


export default env;
