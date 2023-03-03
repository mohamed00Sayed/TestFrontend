import Checkbox from "./Checkbox";
const Book = ({ book, list }) => {
  const addToList = () => {
    /*add sku to list*/
    list.push(book.sku);
  };

  const removeFromList = () => {
    /*remove sku from list*/
    const idx = list.indexOf(book.sku);
    list.splice(idx, 1);
  };

  return (
    <li>
      <Checkbox addToList={addToList} removeFromList={removeFromList} />
      <div>{book.sku}</div>
      <div>{book.name}</div>
      <div>{book.price} $</div>
      <div>Weight: {book.weight}</div>
    </li>
  );
};

export default Book;
