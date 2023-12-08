import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "./declarations";
import { Purchase } from "../entities/purchase";

export class PurchaseController {

  constructor(private repository: DatabaseRepository<Purchase>){}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      console.log(body);

      const purchase = await this.repository.create(body);

      res.status(200).json(purchase);
    } catch (error) {
      next(error);
    }
  }

  async list(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const purchases = await this.repository.list();
      res.status(200).json(purchases)
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {purchaseID} = req.params;
      const purchase = await this.repository.get(purchaseID)
      res.status(200).json(purchase)
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {purchaseID} = req.params
      const body = req.body

      const purchase = await this.repository.update(purchaseID, body)

      res.status(200).json(purchase)

    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {purchaseID} = req.params
      const purchase = await this.repository.remove(purchaseID)
      res.status(200).json(purchase);
    } catch (error) {
      next(error);
    }
    
  }
}
