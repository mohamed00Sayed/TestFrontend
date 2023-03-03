import Book from "./Book";
import Dvd from "./Dvd";
import Furniture from "./Furniture";

const Product = ({ product }) => {
  return (
    <>
      {product?.weight != null ? (
        <Book book={product} />
      ) : product?.size != null ? (
        <Dvd dvd={product} />
      ) : (
        <Furniture furniture={product} />
      )}
    </>
  );
};

export default Product;
