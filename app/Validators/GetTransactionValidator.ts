import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GetTransactionValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    text: schema.string.optional(),
    bank: schema.string.optional(),
    account: schema.string.optional(),
    start_month: schema.string.optional(),
    end_month: schema.string.optional(),
  })

  public messages: CustomMessages = {
    "text.string" : "Text must be a string",
    "bank.string" : "Text must be a string",
    "account.string" : "Text must be a string",
    "start_month.string" : "Text must be a string",
    "end_month.string" : "Text must be a string",
  }
}
