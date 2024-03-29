import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Category";

export default class extends BaseSeeder {
  public async run() {
    await Category.createMany([
      {
        id: "6ad0e563-7f94-417d-8370-7eca2e52b2cc",
        name: "Advertising",
        color: "7048a3",
      },
      {
        id: "0c600155-27a0-40ce-9df5-523f2831ff56",
        name: "Charges/Fees",
        color: "ffbf84",
      },
      {
        id: "f630d7f1-afb9-4713-b51b-265558836753",
        name: "Check Outflows",
        color: "ffbf84",
      },
      {
        id: "977a3d02-364d-4c88-9856-85cd93a361ef",
        name: "Company Investments",
        color: "958e80",
      },
      {
        id: "350a5a32-beee-47f3-bb71-3814d4a7082a",
        name: "Contractors",
        color: "f6f2ab",
      },
      {
        id: "f41d7624-1187-412a-b314-80a6832f81c0",
        name: "Credit Card",
        color: "ffbf84",
      },
      {
        id: "49b11f13-8eb6-417d-aa02-467d1686c003",
        name: "Debt Investment",
        color: "958e80",
      },
      {
        id: "b61354fc-c493-46fe-8edd-87da4f503965",
        name: "Debt Repayment",
        color: "958e80",
      },
      {
        id: "ca9d3311-7446-4615-b071-5fe05f4e1be9",
        name: "Eating Out",
        color: "",
      },
      {
        id: "0bc45cf5-6dc7-4cfb-bae4-b740816862ac",
        name: "Equity investment",
        color: "958e80",
      },
      {
        id: "3e384a41-01f2-4978-b10e-73dba7cb6878",
        name: "Financing Expense",
        color: "958e80",
      },
      {
        id: "e9641f65-f89a-4278-b490-4f2c4fa6e2f7",
        name: "Financing Income",
        color: "958e80",
      },
      {
        id: "e4cb1102-1e2d-407e-b986-a7f14a7f0835",
        name: "General Payment",
        color: "ffbf84",
      },
      {
        id: "ed46831b-5c6d-49d5-a6a5-8e764ffa9b14",
        name: "Insurance",
        color: "ffbf84",
      },
      {
        id: "f0fd67cd-8c38-4883-8a39-529974b6f3a1",
        name: "Internal Transfers",
        color: "",
      },
      {
        id: "f805cb0b-af81-419b-a336-df6d79f16093",
        name: "Inventory",
        color: "ff6955",
      },
      {
        id: "f3e86a41-ccd8-4976-82c9-aed0a1ea2989",
        name: "Legal",
        color: "ffbf84",
      },
      {
        id: "536d9623-863d-4011-a04a-31e85066810d",
        name: "Operating Expenses",
        color: "ffbf84",
      },
      {
        id: "42169f4c-9aea-47f1-ab98-f41d379b0bad",
        name: "Other Expenses",
        color: "ffbf84",
      },
      {
        id: "0ca2a326-085d-45c8-8a15-9e72f2598104",
        name: "Overdraft/NSF Fees",
        color: "ffbf84",
      },
      {
        id: "c134faed-5c47-4b76-8439-3f3c808ef782",
        name: "Payroll and Consultants",
        color: "f6f2ab",
      },
      {
        id: "c3189eec-282a-4680-abab-006611b02d76",
        name: "Personnel",
        color: "f6f2ab",
      },
      {
        id: "292c404b-a504-4bb7-abcd-a50816620330",
        name: "Postage",
        color: "ffbf84",
      },
      {
        id: "013d830c-ee70-4a0b-81dd-1edce790f435",
        name: "Reconciled Intra-Company Transfers",
        color: "",
      },
      {
        id: "c8b4af5c-916f-432f-b7b5-f4e9a351e688",
        name: "Refunds",
        color: "acdcff",
      },
      {
        id: "0afaa716-66a6-41ed-a577-1cc4bc6ed076",
        name: "Rent",
        color: "ffbf84",
      },
      {
        id: "80304577-2f6b-481f-bf46-28d243046b66",
        name: "Revenue",
        color: "75b970",
      },
      {
        id: "761ef302-53e5-4d3b-a076-7292ac19f0fd",
        name: "Salary Taxes",
        color: "f6f2ab",
      },
      {
        id: "8d92fd50-06b8-494c-b732-cd0b98f10b3c",
        name: "Sales and Marketing",
        color: "7048a3",
      },
      {
        id: "11bb7aa7-61e6-4753-b3f2-365f83694417",
        name: "Social Security Contributions",
        color: "f6f2ab",
      },
      {
        id: "d2f6df72-a6e6-4fc2-9221-9864406447f0",
        name: "Software",
        color: "ffbf84",
      },
      {
        id: "0ad649ed-175e-45c2-9194-2a78f3bf219c",
        name: "Special Inflows",
        color: "",
      },
      {
        id: "cb55a2e0-0299-449d-bd81-6d1a71e8b0da",
        name: "Special Outflows",
        color: "",
      },
      {
        id: "7e1a5138-67b3-4d57-8b1c-e69ffee2e126",
        name: "Tax Refund",
        color: "acdcff",
      },
      {
        id: "66faa5fe-b264-48b9-9a0d-e8ef27b10cf8",
        name: "Taxes",
        color: "f3e7cf",
      },
      {
        id: "e5e088d9-ab98-450c-be61-ef7b85940a0b",
        name: "Travel",
        color: "ffbf84",
      },
      {
        id: "2059e527-77e3-443e-80f7-d38dc9656b55",
        name: "Unreconciled Intra-Company Transfers",
        color: "",
      },
      {
        id: "a5f851cb-f3ff-41e3-8629-929395e65d50",
        name: "Utilities",
        color: "ffbf84",
      },
      {
        id: "2ecef92e-954e-4b42-9ce0-9e25194a53d5",
        name: "Vendors",
        color: "ff6955",
      },
    ]);
  }
}
