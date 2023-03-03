const Book = ({ book }) => {
  return (
    <li>
      <div>{book.sku}</div>
      <div>{book.name}</div>
      <div>{book.price}</div>
      <div>{book.weight}</div>
    </li>
  );
};

export default Book;