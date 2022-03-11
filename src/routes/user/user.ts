import { Request, Response, NextFunction, Router } from "express";

import { getAllUsers, getUserById, deleteUserById, registerNewUser } from "../../database/querys/users";

import { validateRegisterData } from "../../middlewares/validateRegisterData";

const router = Router();

router.get("/getAll", (req: Request, res: Response, next: NextFunction) => {
  getAllUsers().exec().then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.get("/getById", (req: Request, res: Response, next: NextFunction) => {
  getUserById(req.body.id).exec().then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.delete('/deleteById', (req: Request, res: Response, next: NextFunction) => {
  deleteUserById(req.body.id).exec().then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.post("/registerUser", validateRegisterData, (req: Request, res: Response, next: NextFunction)=>{
  registerNewUser(req.body).then((result) => {
    res.json(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

export default router;
