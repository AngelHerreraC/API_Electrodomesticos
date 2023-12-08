import { DataSource } from "typeorm";

import { User } from "../entities/user";

import { Product } from "../entities/product";

import { Promotion } from "../entities/promotion";

import { Purchase } from "../entities/purchase";

import { PurchaseDetail } from "../entities/purchaseDetails";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "electrodomesticos",
    entities: [User, Product, Promotion, Purchase, PurchaseDetail],
    synchronize: true,
    logging: false

});