import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ArticleFactoryService } from './article-factory.service';
import { ArticleUseCases } from './article.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [ArticleFactoryService, ArticleUseCases],
  exports: [ArticleFactoryService, ArticleUseCases],
})
export class ArticleUseCasesModule {}
