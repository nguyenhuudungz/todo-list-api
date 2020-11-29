import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import * as path from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  fs.writeFile(path.resolve(__dirname, 'data.json'), '[]', { flag: 'wx' }, function (err) {
    if (err) {
      console.log('Data.json is existed.');
    }
  });
  await app.listen(process.env.PORT || 8000);
}
bootstrap();
