import { Request, Response, NextFunction } from "express";

export function validateRegisterData(req: Request, res: Response, next: NextFunction) {
  let newUser = req.body;
  
  next();
}
