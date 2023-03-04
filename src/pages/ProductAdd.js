import { useState } from "react";
import BookForm from "../main/BookForm";
import DvdForm from "../main/DvdForm";
import FurnitureForm from "../main/FurnitureForm";
import "../styles/productform.scss";

const ProductAdd = () => {
  const [productType, setType] = useState("dvd");
  const [data, setData] = useState({});

  const onSwitch = (event) => {
    console.log(event.target.value);
    setType(event.target.value);
  };

  const setSku = () => {};
  const setName = () => {};
  const setPrice = () => {};
  const setSize = () => {};
  const setWeight = () => {};
  const setDimensions = () => {};
  const flushData = () => {};

  return (
    <div id="pa-page">
      <div id="pa-header">
        <div id="pa-title">Product Add</div>
        <div className="buttons">
          <button className="button">Save</button>
          <button className="button">Cancel</button>
        </div>
      </div>
      <hr />
      <div id="forms-div">
        <form id="product-form">
          <fieldset>
            <label htmlFor="sku">SKU: </label>
            <input
              name="sku"
              type="text"
              id="sku"
              required
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="price">Price($): </label>
            <input
              name="price"
              type="text"
              id="price"
              required
              autoComplete="off"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="productType">Type Switcher: </label>
            <select id="productType" onChange={onSwitch}>
              <option value="dvd">DVD</option>
              <option value="book">Book</option>
              <option value="furniture">Furniture</option>
            </select>
          </fieldset>
        </form>
        {productType === "dvd" ? (
          <DvdForm />
        ) : productType === "book" ? (
          <BookForm />
        ) : (
          <FurnitureForm />
        )}
      </div>
    </div>
  );
};

export default ProductAdd;
