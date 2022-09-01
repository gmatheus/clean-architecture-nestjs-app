import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { User, Article } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: MongoGenericRepository<User>;
  articles: MongoGenericRepository<Article>;

  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<User>,
    @InjectModel(Article.name)
    private ArticleRepository: Model<Article>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.articles = new MongoGenericRepository<Article>(
      this.ArticleRepository,
      ['user'],
    );
  }
}
