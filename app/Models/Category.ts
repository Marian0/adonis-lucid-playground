import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>
}
