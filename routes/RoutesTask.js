import express from "express";

import { getAll,getById,postTask,patchById,deleteById } from "../controllers/TaskController.js";



const router = express.Router();
//routes

//getAll
router.get("/", getAll);

//getById
router.get("/:id", getById);

//postTask
router.post("/", postTask);

//patchById
router.patch("/:id", patchById);

//deleteById
router.delete("/:id", deleteById);

export default router