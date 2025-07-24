import express from "express";
import { createNotes, daleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notesControllers.js";



const router=express.Router();

router.get("/",getAllNotes);
router.get("/:id",getNoteById);
router.post("/",createNotes);
router.put("/:id",updateNotes);
router.delete("/:id",daleteNotes);

export default router;