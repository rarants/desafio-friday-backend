import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Account from 'App/Models/Account'

export default class extends BaseSeeder {
  public async run () {
    await Account.createMany([
      {
          id: "c5f3f93c-bf33-402e-a9f1-c15c148d451b",
          name: "Anonymous",
          bank: "iBank"
      },
      {
          id: "4d4e9f76-7d97-42a8-b1ec-360a127acb27",
          name: "Checking Account (EUR)",
          bank: "Airbank"
      },
      {
          id: "3f2e59a4-8620-4a8a-8ffc-c3092c907cb0",
          name: "Checking Account (GBP)",
          bank: "Airbank"
      },
      {
          id: "313ac86b-337c-484f-9a81-0e1c207699aa",
          name: "Mr. Kevin (Bills)",
          bank: "Business SuperBank"
      },
      {
          id: "a3bbb581-7e91-488e-a416-8ac8f5f6f5be",
          name: "Mr. Kevin (Household)",
          bank: "Business SuperBank"
      },
      {
          id: "c6c356b7-be49-4038-b19b-f29ff951122d",
          name: "Mr. Keysha Kayner",
          bank: "Business SuperBank"
      },
      {
          id: "ea78ff5d-7637-4f34-8ad9-a4ee767ef8d6",
          name: "Mr. Keysha Kayner",
          bank: "Business SuperBank"
      },
      {
          id: "387787f6-4ecd-4e36-b4ea-3a4ddee76465",
          name: "Mr. Keysha Kayner",
          bank: "Business SuperBank"
      },
      {
          id: "8ad7c58e-ce53-450b-90c8-6faf539c5f16",
          name: "Mr. Keysha Kayner",
          bank: "Business SuperBank"
      },
      {
          id: "03eedf59-b87d-40b0-abef-4ef265545808",
          name: "Mr. Navjot Higday",
          bank: "Business SuperBank"
      },
      {
          id: "63c66f69-97d0-40ca-862e-eba7b79d2d35",
          name: "Mr. Navjot Higday",
          bank: "Business SuperBank"
      },
      {
          id: "a45df2f6-4a32-42f2-946b-e6def523db41",
          name: "Mr. Navjot Higday",
          bank: "Business SuperBank"
      },
      {
          id: "0ebf6960-e67b-4a7e-b384-c64f62a17c55",
          name: "Mr. Navjot Higday",
          bank: "Business SuperBank"
      },
      {
          id: "9ec5832f-9f3e-4c65-b8f8-53fda6bdfc17",
          name: "Mr. Tahir Hagee",
          bank: "Business SuperBank"
      },
      {
          id: "9dd54f3f-a96f-4ab2-8fda-84e6ac83f38e",
          name: "Mr. Tahir Hagee",
          bank: "Business SuperBank"
      },
      {
          id: "343db37d-804e-4892-bf7d-bc36f601706a",
          name: "Nombre Apellido",
          bank: "iBank"
      },
      {
          id: "a3ebeb0e-d191-41d1-a271-ab147ff32e7c",
          name: "Sydney Beard",
          bank: "The Sandbox"
      },
      {
          id: "1bb1aa71-bd04-42a1-a0b6-d9b875d67694",
          name: "Sydney Beard",
          bank: "The Sandbox"
      },
      {
          id: "02b2a5a5-bfd3-40a3-bb20-30c497af1a5d",
          name: "Sydney Beard",
          bank: "The Sandbox"
      },
      {
          id: "bb3e0261-bdde-49c1-9752-5ea55a61ca33",
          name: "Sydney Beard",
          bank: "The Sandbox"
      }
    ])
  }
}
