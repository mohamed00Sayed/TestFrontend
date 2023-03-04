import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import BookForm from "../main/BookForm";
import DvdForm from "../main/DvdForm";
import FurnitureForm from "../main/FurnitureForm";
import { selectProductIds } from "../redux/ProductSlice";
import "../styles/productform.scss";

const ProductAdd = () => {
  const [productType, setType] = useState("dvd");
  const [data, setData] = useState({});
  const [validation, setValidation] = useState({});
  const [hasErrors, setErrors] = useState(false);
  /*select product ids*/
  const ids = useSelector(selectProductIds);

  const onSwitch = (event) => {
    const type = event.target.value;
    if(productType === 'dvd'){
      delete validation.emptySize;
      delete data.size;
    }
    else if(productType === 'book'){
      delete validation.emptyWeight;
      delete data.weight;
    }
    else if(productType === 'furniture'){
      delete validation.emptyHeight;
      delete validation.emptyWidth;
      delete validation.emptyLength;
      delete data.dimensions;
    }
    setType(type);
  };

  const setSku = (event) => {
    const sku = event.target.value;
    /*validate sku here*/
    if (ids.includes(sku)) {
      setValidation({ ...validation, duplicateSku: true, emptySku: true });
      setData({ ...data, sku });
      event.target.value = "";
    } else {
      /*if not duplicate but empty*/
      if (sku.trim() === "") {
        setValidation({ ...validation, emptySku: true, duplicateSku: false });
        setData({ ...data, sku });
      } else {
        setValidation({ ...validation, duplicateSku: false, emptySku: false });
        setData({ ...data, sku });
      }
    }
  };

  const setName = (event) => {
    const name = event.target.value;
    if (name.trim() === "") {
      setValidation({ ...validation, emptyName: true });
      setData({ ...data, name });
    } else {
      setValidation({ ...validation, emptyName: false });
      setData({ ...data, name });
    }
  };

  const setPrice = (event) => {
    const price = event.target.value;
    if (!isNumeric(price)) {
      setValidation({ ...validation, emptyPrice: true });
      setData({ ...data, price });
      event.target.value = "";
    } else {
      setValidation({ ...validation, emptyPrice: false });
      setData({ ...data, price: parseFloat(price) });
    }
  };

  const passDataToParent = (result) => {
    const cData = result.data;
    const cValidation = result.validation;
    /*set data of the parent to all data and validation to all validations*/
    setData({ ...data, ...cData });
    setValidation({ ...validation, ...cValidation });
  };

  const onSubmit = (event) => {
    console.log(data);
    console.log(validation);

    if (!isValid()) {
      console.log("has errors");
      setErrors(true);
    } else {
      console.log("saved to db");
      setErrors(false);
    }
  };

  const isValid = () => {
    const keys = Object.keys(validation);
    if (keys.length < 5) return false;
    if (
      keys.length === 5 &&
      (productType === "dvd" || productType === "book")
    ) {
      for (let x = 0; x < keys.length; x++) {
        if (validation[keys[x]] !== false) return false;
      }
      return true;
    }
    if (keys.length === 7 && productType === "furniture") {
      for (let x = 0; x < keys.length; x++) {
        if (validation[keys[x]] !== false) return false;
      }
      return true;
    }
    return false;
  };

  return (
    <div id="pa-page">
      <div id="pa-header">
        <div id="pa-title">Product Add</div>
        <div className="buttons">
          <button className="button" onClick={onSubmit}>
            Save
          </button>
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
              autoComplete="off"
              onChange={setSku}
              onPaste={setSku}
            />
          </fieldset>
          {validation.duplicateSku ? (
            <label className="error">Duplicate Sku</label>
          ) : (
            ""
          )}
          {validation.emptySku ? (
            <label className="error"> Sku must not be empty</label>
          ) : (
            ""
          )}

          <fieldset>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              id="name"
              autoComplete="off"
              onChange={setName}
              onPaste={setName}
            />
          </fieldset>
          {validation.emptyName ? (
            <label className="error">Name must not be empty</label>
          ) : (
            ""
          )}
          <fieldset>
            <label htmlFor="price">Price($): </label>
            <input
              name="price"
              type="text"
              id="price"
              autoComplete="off"
              onChange={setPrice}
              onPaste={setPrice}
            />
          </fieldset>
          {validation.emptyPrice ? (
            <label className="error"> Price must non-empty number</label>
          ) : (
            ""
          )}
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
          <DvdForm passData={passDataToParent} />
        ) : productType === "book" ? (
          <BookForm passData={passDataToParent} />
        ) : (
          <FurnitureForm passData={passDataToParent} />
        )}
        {hasErrors ? (
          <label className="error">All fields are required</label>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

export default ProductAdd;
