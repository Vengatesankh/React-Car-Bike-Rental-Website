import express from "express";
import { protect } from "../middleware/auth.js";
import { changeRoleToOwner } from "../controllers/ownerController.js";

const ownerRouter = express.Router();

ownerRouter.post("/changerole",protect, changeRoleToOwner)

export default  ownerRouter;