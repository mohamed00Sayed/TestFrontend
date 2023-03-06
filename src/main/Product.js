import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";

const Product = ({ product, add, remove }) => {
  return (
    <>
      {product.weight !== undefined ? (
        <Book book={product} add={add} remove={remove}/>
      ) : product.size !== undefined ? (
        <Dvd dvd={product} add={add} remove={remove}/>
      ) : (
        <Furniture furniture={product} add={add} remove={remove}/>
      )}
    </>
  );
};

export default Product;
