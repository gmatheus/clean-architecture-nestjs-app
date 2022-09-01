import { Injectable } from '@nestjs/common';
import { Article } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class ArticleUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllArticles(): Promise<Article[]> {
    return this.dataServices.articles.getAll();
  }

  getArticleById(id: any): Promise<Article> {
    return this.dataServices.articles.get(id);
  }

  async createArticle(article: Article): Promise<Article> {
    try {
      // call to our dependencies
      const createdArticle = await this.dataServices.articles.create(article);

      return createdArticle;
    } catch (error) {
      throw error;
    }
  }

  updateArticle(articleId: string, article: Article): Promise<Article> {
    return this.dataServices.articles.update(articleId, article);
  }
}
