import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Account from "App/Models/Account";
import Category from "App/Models/Category";
import Transaction from "App/Models/Transaction";
import GetTransactionValidator from "App/Validators/GetTransactionValidator";

export default class TransactionsController {
  public async index({ request }: HttpContextContract) {
    const data = request.get();
    const { text, bank, account, start_month, end_month } =
      await request.validate(GetTransactionValidator);
    const query = Transaction.query()
      .preload("account")
      .preload("category")
      .orderBy("date", "desc");

    if (text) {

      const accounts = Account.query()
        .select("id")
        .where("name", "ILIKE", `%${text}%`)
        .orWhere("bank", "ILIKE", `%${text}%`);

      const categories = Category.query()
        .select("id")
        .where("name", "ILIKE", `%${text}%`);

    console.log(await categories);

      query
        .where("reference", "ILIKE", `%${text}%`)
        .orWhere("amount", parseInt(text))
        .orWhere("currency", text)
        .orWhereIn("account_id", accounts)
        .orWhereIn("category_id", categories);
    }

    if (bank) {
      const accounts = Account.query().select("id").where("bank", bank);

      query.where((builder) => {
        builder.whereIn("account_id", accounts);
      });
    }

    if (account) {
      const accounts = Account.query().select("id").where("name", account);

      query.where((builder) => {
        builder.whereIn("account_id", accounts);
      });
    }

    const year = new Date().getFullYear();

    if (start_month) {
      query.where("date", ">", `${start_month}-01`);
    }

    if (end_month) {
      query.where(
        "date",
        "<",
        `${end_month}-${new Date(
          year,
          new Date(end_month).getMonth(),
          0
        ).getDate()}`
      );
    }

    const transactions = await query.paginate(
      data.page > 0 ? data.page : 1,
      data.limit > 0 ? data.limit : 10
    );

    return transactions;
  }

  public async show({ params }: HttpContextContract) {
    let transaction = await Transaction.findOrFail(params.id);
    return transaction;
  }
}
