import { Request, Response, NextFunction, Router } from "express"

import { userModel } from "database/models/user.model";

const router = Router();

router.get('/login', (req: Request, res: Response, next: NextFunction)=>{
  res.send('Hey there!');  
});

router.get('/register', (req: Request, res: Response, next: NextFunction)=>{
  res.json({
    message: "This example is working!"
  });
});

export default router