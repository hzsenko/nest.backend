import {Module} from '@nestjs/common';
import {TodosModule} from './todos/todos.module';
import {MongooseModule} from '@nestjs/mongoose';
import {configModule} from './configuration.root';

@Module({
  imports: [
    TodosModule,
    configModule,
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      useFindAndModify: true,
      useUnifiedTopology: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
