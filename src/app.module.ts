import { Module } from '@nestjs/common';
import {
  AppController,
  ArticleController,
  UserController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { ArticleUseCasesModule } from './use-cases/article/article-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';

@Module({
  imports: [DataServicesModule, ArticleUseCasesModule, UserUseCasesModule],
  controllers: [AppController, ArticleController, UserController],
  providers: [],
})
export class AppModule {}
