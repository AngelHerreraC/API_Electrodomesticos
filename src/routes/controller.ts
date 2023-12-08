import { Request, Response, NextFunction } from "express";
import { DatabaseRepository } from "./declarations";
import { User } from "../entities/user";

export class TaskController {

  constructor(private repository: DatabaseRepository<User>){}

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const body = req.body;
      console.log(body);

      const user = await this.repository.create(body);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  async list(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.repository.list();
      res.status(200).json(users)
    } catch (error) {
      next(error);
    }
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {userID} = req.params;
      const user = await this.repository.get(userID)
      res.status(200).json(user)
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {userID} = req.params
      const body = req.body

      const user = await this.repository.update(userID, body)

      res.status(200).json(user)

    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const {userID} = req.params
      const user = await this.repository.remove(userID)
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
    
  }
}
