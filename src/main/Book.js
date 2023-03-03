import Checkbox from "./Checkbox";
const Book = ({ book, add, remove }) => {
  const addBookToList = () => {
    /*add book to list*/
    add(book);
  };

  const removeBookFromList = () => {
    /*remove book from list*/
    remove(book);
  };

  return (
    <li>
      <Checkbox add={addBookToList} remove={removeBookFromList} />
      <div>{book.sku}</div>
      <div>{book.name}</div>
      <div>{book.price} $</div>
      <div>Weight: {book.weight}</div>
    </li>
  );
};

export default Book;
