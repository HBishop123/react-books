import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookByID = (id) => {
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(deletedBook);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;

// notes
