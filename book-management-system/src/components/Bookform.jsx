import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../features/books/BookSlice';

const BookForm = ({ currentBook, setEditing }) => {
  const [book, setBook] = useState(currentBook || { title: '', author: '', id: Date.now() });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentBook) {
      dispatch(updateBook(book));
      setEditing(false);
    } else {
      dispatch(addBook(book));
    }
    setBook({ title: '', author: '', id: Date.now() });
  };

  return (
    <div style={backgroundStyle}>
      {/* Navbar Styled Heading */}
      <header className="bg-primary text-white text-center py-3 mb-4">
        <h1 className="m-0">Book Management</h1>
      </header>

      {/* Form Centered in the Page */}
      <div className="d-flex align-items-center justify-content-center vh-100">
        <form onSubmit={handleSubmit} className="p-4 shadow-lg bg-white rounded border" style={{ width: '400px' }}>
          <h3 className="text-primary mb-4">{currentBook ? 'Edit Book' : 'Add New Book'}</h3>

          <div className="mb-3">
            <label htmlFor="title" className="form-label text-secondary">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={book.title}
              onChange={(e) => setBook({ ...book, title: e.target.value })}
              placeholder="Enter book title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="form-label text-secondary">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              className="form-control"
              value={book.author}
              onChange={(e) => setBook({ ...book, author: e.target.value })}
              placeholder="Enter author name"
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary btn-lg">
              {currentBook ? 'Update' : 'Add'} Book
            </button>
            {currentBook && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

// Background styling
const backgroundStyle = {
  backgroundImage: "url('https://img.freepik.com/premium-photo/book-drawing-images-background-copy-space_1179130-577613.jpg')", // Replace with your background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  overflow: 'hidden',
};

export default BookForm;
