import express from "express";
import { creatANote, deleteNote, getAllNotes, updateNote,getANoteById } from "../controller/notesController.js";

const router = express.Router()

router.get("/",getAllNotes)

router.get("/:id",getANoteById)

router.post("/",creatANote)

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)

export default router