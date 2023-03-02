import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Account from './Account'
import Category from './Category'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public account_id: string

  @column()
  public category_id: string

  @column()
  public reference: string

  @column()
  public amount: string

  @column()
  public currency: string

  @column()
  public date: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Account, {
    localKey: 'id',
    foreignKey: 'account_id',
  })
  public account: BelongsTo<typeof Account>
  
  @belongsTo(() => Category, {
    localKey: 'id',
    foreignKey: 'category_id',
  })
  public category: BelongsTo<typeof Category>
}
