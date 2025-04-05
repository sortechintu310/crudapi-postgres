import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController.js";
import { validateUser } from "../middlewares/inputValidator.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/users", validateUser, createUser);
router.put("/users/:id", validateUser, updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUserById);

export default router;