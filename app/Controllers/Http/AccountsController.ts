import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Account from "App/Models/Account";

export default class AccountsController {
  public async index({}: HttpContextContract) {
    const accounts = Account.query()
      .select("name")
      .distinct("name")
      .orderBy("name", "asc");
    return accounts;
  }

  public async banks_index({}: HttpContextContract) {
    const banks = Account.query()
      .select("bank")
      .distinct("bank")
      .orderBy("bank", "asc");
    return banks;
  }
}
