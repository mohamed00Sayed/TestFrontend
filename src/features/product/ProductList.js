import { useSelector } from "react-redux";
import Product from "./Product";

const ProductList = () => {
  const ids = useSelector((state) => state.products.ids);
  const products = useSelector((state) => state.products.entities);

  return (
    <ul>
        {ids.map((id) => <Product product={products[id]}/>)}
    </ul>
  );
};

export default ProductList;
