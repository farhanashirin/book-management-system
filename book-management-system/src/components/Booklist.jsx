import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../features/books/BookSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">Book List</h2>
      
      {/* Responsive table wrapped in a card */}
      <div className="card shadow-sm">
        <div className="card-body">
          {books.length > 0 ? (
            <table className="table table-hover table-bordered">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col" className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm me-2"
                        onClick={() => dispatch(deleteBook(book.id))}
                      >
                        Delete
                      </button>
                      <button className="btn btn-warning btn-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-secondary">No books available. Please add some books.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;
