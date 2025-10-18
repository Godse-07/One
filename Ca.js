// npm i redis
import { createClient } from 'redis';

const client = createClient({
  // For a URL: url: process.env.REDIS_URL, // e.g. redis://default:password@host:6379/0
  // Or detailed config:
  // socket: { host: '127.0.0.1', port: 6379 },
  // username: 'default',
  // password: 'your_password',
});

client.on('error', (err) => console.error('Redis Client Error:', err));

await client.connect();

await client.set('key', 'value');
const val = await client.get('key');
console.log('GET key =', val);

await client.quit();
