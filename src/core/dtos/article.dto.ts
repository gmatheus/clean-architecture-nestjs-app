import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsDate()
  publishDate: Date;

  @IsNotEmpty()
  userId: any;
}

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
