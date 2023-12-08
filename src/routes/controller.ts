import { Request, Response, NextFunction } from "express";

export class TaskController {
  async create(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "create task ???????",
    });
  }

  async list(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "list task !!!!!!!",
    });
  }

  async get(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "get task !!!!!!!",
    });
  }

  async update(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "update task !!!!!!!",
    });
  }

  async remove(_req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(200).json({
      message: "remove task !!!!!!!",
    });
  }
}
