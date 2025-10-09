import Book from "../models/Book.js";

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    20;

    res.status(500).json({ error: error.message });
  }
};

// create book
export const createBook = async (req, res) => {
  try {
    const { title } = req.body;

    // Check for duplicate title
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res
        .status(400)
        .json({ error: "Book with this title already exists" });
    }

    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({
      message: "book created successfully",
      book: savedBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updateBook) {
      return res.status(404).json({ error: "book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "book not found" });
    }
    res.status(201).json({ message: "Book deleted successfully", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
