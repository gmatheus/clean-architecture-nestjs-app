import { Article } from '../entities';

export class CreateArticleResponseDto {
  success: boolean;
  createdArticle: Article;
}
