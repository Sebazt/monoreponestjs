import { registerAs } from '@nestjs/config';

export default registerAs('swagger', () => ({
  title: 'BSL Services',
  description: 'Core API about this app',
  version: '1.0',
}));
