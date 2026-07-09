import { NextFunction, Request, Response, Router } from "express";

import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";
import { premiumController } from "./premium.controller";
import { catchAsync } from "../../utils/catchAsync";

const router = Router();

router.get(
  "/",
  auth(Role.ADMIN, Role.AUTHOR, Role.USER),
    catchAsync(
        async (req: Request,res:Response,next:NextFunction)=> {
            
        }
    )
  ,premiumController.getPremiumContent,
);

export const premiumRoutes = router;
