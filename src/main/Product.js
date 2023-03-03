import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";
import '../styles/products.scss';

const Product = ({ product, list }) => {
  return (
    <>
      {product?.weight != null ? (
        <Book book={product} list={list}/>
      ) : product?.size != null ? (
        <Dvd dvd={product} list={list}/>
      ) : (
        <Furniture furniture={product} list={list}/>
      )}
    </>
  );
};

export default Product;
