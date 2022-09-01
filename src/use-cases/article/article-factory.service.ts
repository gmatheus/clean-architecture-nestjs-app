import { Injectable } from '@nestjs/common';
import { Article } from '../../core/entities';
import { CreateArticleDto, UpdateArticleDto } from '../../core/dtos';

@Injectable()
export class ArticleFactoryService {
  createNewArticle(createArticleDto: CreateArticleDto) {
    const newArticle = new Article();
    newArticle.title = createArticleDto.title;
    newArticle.content = createArticleDto.content;
    newArticle.publishDate = createArticleDto.publishDate;
    newArticle.user = createArticleDto.userId;

    return newArticle;
  }

  updateArticle(updateArticleDto: UpdateArticleDto) {
    const newArticle = new Article();
    newArticle.title = updateArticleDto.title;
    newArticle.content = updateArticleDto.content;
    newArticle.publishDate = updateArticleDto.publishDate;
    newArticle.user = updateArticleDto.userId;

    return newArticle;
  }
}
