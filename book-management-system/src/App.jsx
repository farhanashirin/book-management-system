import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './features/Store';
import BookList from './components/Booklist';
import BookForm from './components/Bookform';

const App = () => {
  const [editing, setEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <Provider store={store}>
      <div>
        
        <BookForm currentBook={currentBook} setEditing={setEditing} />
        <BookList setCurrentBook={setCurrentBook} setEditing={setEditing} />
      </div>
    </Provider>
  );
};

export default App;
