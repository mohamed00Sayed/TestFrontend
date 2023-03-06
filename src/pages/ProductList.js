import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../main/Loading";
import Product from "../main/Product";
import { deleteProducts } from "../redux/ProductSlice";
import "../styles/productlist.scss";

const ProductList = () => {
  const ids = useSelector((state) => state.products.ids);
  const products = useSelector((state) => state.products.entities);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  let list = [];

  const addToList = (product) => {
    /*add product to list*/
    list.push(product);
  };

  const removeFromList = (product) => {
    /*remove product from list*/
    list = list.filter((element) => element.sku !== product.sku);
  };

  const handleDelete = () => {
    dispatch(
      deleteProducts({ url: process.env.REACT_APP_API_URL, products: list })
    );
  };

  return (
    <div id="pl-page">
      <div id="pl-header">
        <div id="pl-title">Product List</div>
        <div className="buttons">
          <Link to={"add-product"}>
            <button className="button">ADD</button>
          </Link>
          <button className="button" onClick={handleDelete}>
            MASS DELETE
          </button>
        </div>
      </div>
      <hr />
      {loading === "loading" ? (
        <Loading />
      ) : (
        <ul>
          {ids.map((id) => (
            <Product
              key={id}
              product={products[id]}
              add={addToList}
              remove={removeFromList}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
