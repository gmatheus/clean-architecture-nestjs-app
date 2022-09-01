import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ArticleUseCases, ArticleFactoryService } from '../use-cases/article';
import {
  CreateArticleDto,
  UpdateArticleDto,
  CreateArticleResponseDto,
} from '../core/dtos';

@Controller('api/article')
export class ArticleController {
  constructor(
    private articleUseCases: ArticleUseCases,
    private articleFactoryService: ArticleFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.articleUseCases.getAllArticles();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.articleUseCases.getArticleById(id);
  }

  @Post()
  async createArticle(
    @Body() articleDto: CreateArticleDto,
  ): Promise<CreateArticleResponseDto> {
    const createArticleResponse = new CreateArticleResponseDto();
    try {
      const article = this.articleFactoryService.createNewArticle(articleDto);
      const createdArticle = await this.articleUseCases.createArticle(article);

      createArticleResponse.success = true;
      createArticleResponse.createdArticle = createdArticle;
    } catch (error) {
      // report and log error
      createArticleResponse.success = false;
    }

    return createArticleResponse;
  }

  @Put(':id')
  updateArticle(
    @Param('id') articleId: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    const article = this.articleFactoryService.updateArticle(updateArticleDto);
    return this.articleUseCases.updateArticle(articleId, article);
  }
}
