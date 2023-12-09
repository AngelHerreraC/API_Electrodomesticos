import {Router} from 'express'

import { userRepository } from './userRepository';
import { UserController } from './userController'

import { ProductController } from './productController';
import { productRepository } from './productRepository';

import { PromoController } from './promoController';
import { promoRepository } from './promoRepository';

import { PurchaseController } from './purchaseController';
import { purchaseRepository } from './purchaseRepository';

const router = Router()

const userController = new UserController(new userRepository());

const productController = new ProductController(new productRepository());

const promoController = new PromoController(new promoRepository());

const purchaseController = new PurchaseController(new purchaseRepository());

//User CRUD

router.post('/users', userController.create.bind(userController))

router.get("/users", userController.list.bind(userController));

router.get("/user/:userID", userController.get.bind(userController));

router.put("/user/:userID", userController.update.bind(userController));

router.delete("/user/:userID", userController.remove.bind(userController));

//Product CRUD

router.post("/products", productController.create.bind(productController));

router.get("/products", productController.list.bind(productController));

router.get("/product/:productID", productController.get.bind(productController));

router.put("/product/:productID", productController.update.bind(productController));

router.delete("/product/:productID", productController.remove.bind(productController));

//Promotion CRUD

router.post("/promotions", promoController.create.bind(promoController));

router.get("/promotions", promoController.list.bind(promoController));

router.get("/promotion/:productID", promoController.get.bind(promoController));

router.put("/promotion/:productID", promoController.update.bind(promoController));

router.delete("/promotion/:productID", promoController.remove.bind(promoController));

//Purchase CRUD

router.post("/purchases", purchaseController.create.bind(purchaseController));

router.get("/purchases", purchaseController.list.bind(purchaseController));

router.get("/purchase/:purchaseID", purchaseController.get.bind(purchaseController));

router.put("/purchase/:purchaseID", purchaseController.update.bind(purchaseController));

router.delete("/purchase/:purchaseID", purchaseController.remove.bind(purchaseController));

export default router;