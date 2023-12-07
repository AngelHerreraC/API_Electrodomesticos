import { Request, Response, NextFunction } from "express";

export class TaskController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "create task ???????",
    });
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "list task !!!!!!!",
    });
  }

  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "get task !!!!!!!",
    });
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "update task !!!!!!!",
    });
  }

  async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "remove task !!!!!!!",
    });
  }
}
