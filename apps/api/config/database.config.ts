import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  port: Number(process.env.DATABASE_HOST) || 5432, /* ruta por defecto para postgrest */
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  name:process.env.DATABASE_NAME,
}));