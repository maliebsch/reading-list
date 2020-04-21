import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Quarantine Reading List</h1>
      {books.length === 1 ? <p>Currently you have {books.length} book on your list.</p> : 
      <p>Currently you have {books.length} books on your list.</p>}
    </div>
  );
}
 
export default Navbar;