import { Router } from "express";

import {
    login,
    logout,
    register,
    profile,
    verifyToken,
    contact,
  } from "../controllers/auth.controller.js";

import {auth} from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout); 
router.get("/verify", verifyToken);
router.post("/contact", contact);
router.get("/profile", auth, profile);

export default router;