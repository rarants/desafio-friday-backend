import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "transactions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string("id").primary();
      table
        .string("account_id")
        .primary()
        .references("id")
        .inTable("accounts")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .string("category_id")
        .primary()
        .references("id")
        .inTable("categories")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.string("reference");
      table.float("amount");
      table.string("currency");
      table.dateTime("date");
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
