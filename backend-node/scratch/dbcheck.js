require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();
(async () => {
  try {
    console.log('DATABASE_URL host:', (process.env.DATABASE_URL || '').replace(/:[^:@]+@/, ':****@'));
    await p.$connect();
    console.log('CONNECT OK');
    const n = await p.user.count();
    console.log('user count:', n);
    process.exit(0);
  } catch (e) {
    console.error('FAIL:', e.message);
    process.exit(1);
  }
})();
