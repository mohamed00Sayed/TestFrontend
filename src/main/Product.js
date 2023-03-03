import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import '../styles/products.scss';

const Product = ({ product, add, remove }) => {
  return (
    <>
      {product?.weight != null ? (
        <Book book={product} add={add} remove={remove}/>
      ) : product?.size != null ? (
        <Dvd dvd={product} add={add} remove={remove}/>
      ) : (
        <Furniture furniture={product} add={add} remove={remove}/>
      )}
    </>
  );
};

export default Product;
