import { DataSource } from "typeorm";

import { User } from "../entities/user";

import { Product } from "../entities/product";

import { Promotion } from "../entities/promotion";

import { Purchase } from "../entities/purchase";

import { PurchaseDetail } from "../entities/purchaseDetails";


export default new DataSource({
  type: "postgres",
  host: "34.219.1.188",
  port: 5432,
  username: "admin1",
  password: "password1",
  database: "electrodomesticos",
  entities: [User, Product, Promotion, Purchase, PurchaseDetail],
  synchronize: true,
  logging: false,
});