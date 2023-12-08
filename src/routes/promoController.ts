import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "./declarations";
import { Promotion } from "../entities/promotion";

export class PromoController {

  constructor(private repository: DatabaseRepository<Promotion>){}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      console.log(body);

      const product = await this.repository.create(body);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async list(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const products = await this.repository.list();
      res.status(200).json(products)
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {productID} = req.params;
      const user = await this.repository.get(productID)
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {productID} = req.params
      const body = req.body

      const product = await this.repository.update(productID, body)

      res.status(200).json(product)

    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {productID} = req.params
      const product = await this.repository.remove(productID)
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
    
  }
}
