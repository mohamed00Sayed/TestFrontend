import { useSelector } from "react-redux";
import Product from "./Product";
import "./products.scss";

const ProductList = () => {
  const ids = useSelector((state) => state.products.ids);
  const products = useSelector((state) => state.products.entities);
  const massDeleteList = [];

  return (
    <div id="pl-page">
      <div id="pl-header">
        <div id="pl-title">Product List</div>
        <div className="buttons">
          <button className="button">ADD</button>
          <button className="button">MASS DELETE</button>
        </div>
      </div>
      <hr/>
      <ul>
        {ids.map((id) => (
          <Product product={products[id]} list={massDeleteList}/>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
