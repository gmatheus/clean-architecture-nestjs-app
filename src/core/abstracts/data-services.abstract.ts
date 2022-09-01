import { User, Article } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract users: IGenericRepository<User>;
  abstract articles: IGenericRepository<Article>;
}
