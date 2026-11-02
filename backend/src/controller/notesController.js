import Note from "../models/Note.js";
export const getAllNotes = async (req, res) => {
  try {
    let notesAll = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notesAll);
  } catch (error) {
    console.error(`Error in getAllNotes controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getANoteById = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error(`Error in getANoteById controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const creatANote = async (req, res) => {
  try {
    let { title, content } = req.body;
    let newNote = new Note({ title, content });
    let savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error(`Error in creatANote controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const updateNote = async (req, res) => {
  try {
    let { title, content } = req.body;
    let updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true },
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(`Error in updateNote controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const deleteNote = async (req, res) => {
  try {
    let deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(deletedNote);
  } catch (error) {
    console.error(`Error in deleteNote controller ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
};
