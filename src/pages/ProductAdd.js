import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookForm from "../main/BookForm";
import DvdForm from "../main/DvdForm";
import FurnitureForm from "../main/FurnitureForm";
import { addProduct, selectProductIds } from "../redux/ProductSlice";
import Input from "../main/Input";
import "../styles/productadd.scss";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [productType, setType] = useState("dvd");
  const [duplicateSku, setDuplicateSku] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /*a form reference*/
  const formRef = useRef();
  /*select product ids*/
  const ids = useSelector(selectProductIds);
  const onSwitch = (event) => {
    setType(event.target.value);
  };

  const onSubmit = () => {
    const result = getData();
    if (result.valid) {
      /*save data to db*/
      dispatch(
        addProduct({
          url: process.env.REACT_APP_API_URL,
          productData: result.obj,
        })
      );
      navigate(-1);
    } else {
      if (ids.includes(result.sku)) {
        setDuplicateSku(true);
      } else {
        setInvalid(true);
        setDuplicateSku(false);
      }
    }
  };

  const getData = () => {
    /*get values and set validation data accordingly*/
    const sku = formRef.current.sku.value;
    const name = formRef.current.name.value;
    const price = formRef.current.price.value;
    /*get specific values, set validation data, process result*/
    if (productType === "book") {
      const weight = formRef.current.weight.value;
      /*reurn according to validation*/
      if (validate({ sku, name, price, weight })) {
        return {
          valid: true,
          obj: {
            type: "book",
            data: {
              sku,
              name,
              price: parseFloat(price),
              weight: parseFloat(weight),
            },
          },
        };
      } else {
        return { valid: false, sku };
      }
    } else if (productType === "dvd") {
      const size = formRef.current.size.value;
      /*return according to validation*/
      if (validate({ sku, name, price, size })) {
        return {
          valid: true,
          obj: {
            type: "dvd",
            data: {
              sku,
              name,
              price: parseFloat(price),
              size: parseInt(size),
            },
          },
        };
      } else {
        return { valid: false, sku };
      }
    } else {
      const height = formRef.current.height.value;
      const length = formRef.current.length.value;
      const width = formRef.current.width.value;
      /*return according to validation*/
      if (validate({ sku, name, price, height, length, width })) {
        return {
          valid: true,
          obj: {
            type: "furniture",
            data: {
              sku,
              name,
              price: parseFloat(price),
              dimensions: {
                length: parseInt(length),
                width: parseInt(width),
                height: parseInt(height),
              },
            },
          },
        };
      } else {
        return { valid: false, sku };
      }
    }
  };

  const validate = (obj) => {
    const sku = obj.sku;
    if (sku === "" || ids.includes(sku)) {
      return false;
    }
    const keys = Object.keys(obj);
    for (let x = 0; x < keys.length; x++) {
      if (obj[keys[x]] === "") return false;
    }
    return true;
  };

  return (
    <div id="pa-page">
      <div id="pa-header">
        <div id="pa-title">Product Add</div>
        <div className="buttons">
          <button className="button" onClick={onSubmit}>
            Save
          </button>
          <Link to={"/"}>
            <button className="button">Cancel</button>
          </Link>
        </div>
      </div>
      <hr />
      <form id="product_form" ref={formRef}>
        <fieldset>
          <label htmlFor="sku">SKU: </label>
          <Input
            id="sku"
            name="sku"
            type="text"
            valueType="string"
            errorMessage="SKU must not be empty or duplicate"
          />
          {duplicateSku ? (
            <>
              <br />
              <label className="error">SKU is present</label>
            </>
          ) : (
            ""
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="name">Name: </label>
          <Input
            id="name"
            name="name"
            type="text"
            valueType="string"
            errorMessage="Name must not be empty"
          />
        </fieldset>

        <fieldset>
          <label htmlFor="price">Price($): </label>
          <Input
            id="price"
            name="price"
            type="text"
            valueType="number"
            errorMessage="Price must not be empty [number]"
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
        {productType === "dvd" ? (
          <DvdForm />
        ) : productType === "book" ? (
          <BookForm />
        ) : (
          <FurnitureForm />
        )}
        {invalid ? (
          <label className="error">All fields are required</label>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default ProductAdd;
