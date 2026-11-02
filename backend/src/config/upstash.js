import dotenv from "dotenv"
dotenv.config()
import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
export const ratelimiter = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(100, '60 s'),
});