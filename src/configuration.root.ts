import {ConfigModule} from '@nestjs/config';

const environment = process.env.NODE_ENV || 'development';

export const configModule = ConfigModule.forRoot({
  envFilePath: `.${environment}.env`,
  isGlobal: true,
});
