import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public title: string

  @column()
  public category_id: string

  @belongsTo(() => Category, { foreignKey: 'category_id' })
  public category: BelongsTo<typeof Category>
}
