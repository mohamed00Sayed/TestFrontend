import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookForm from "../main/BookForm";
import DvdForm from "../main/DvdForm";
import FurnitureForm from "../main/FurnitureForm";
import { addProduct, selectProductIds } from "../redux/ProductSlice";
import Input from "../main/Input";
import "../styles/productform.scss";

const ProductAdd = () => {
  const [productType, setType] = useState("dvd");
  const [duplicateSku, setDuplicateSku] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const dispatch = useDispatch();
  /*a form reference*/
  const formRef = useRef();
  const bookRef = useRef();
  const dvdRef = useRef();
  const furnitureRef = useRef();
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
          productData: result.dataObj,
        })
      );
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
    /*validation data*/
    let skuError = true;
    let nameError = true;
    let priceError = true;
    let weightError = true;
    let sizeError = true;
    let lengthError = true;
    let widthError = true;
    let heightError = true;
    /*get values and set validation data accordingly*/
    const sku = formRef.current.sku.value;
    const name = formRef.current.name.value;
    const price = formRef.current.price.value;

    if (sku !== undefined && sku !== "" && !ids.includes(sku)) {
      skuError = false;
    }
    if (name !== undefined && name !== "") {
      nameError = false;
    }
    if (price !== undefined && price !== "") {
      priceError = false;
    }
    /*get specific values, set validation data, process result*/
    if (productType === "book") {
      const weight = bookRef.current.weight.value;
      if (weight !== undefined && weight !== "") {
        weightError = false;
      }
      /*reurn according to validation*/
      return validate(
        { skuError, nameError, priceError, weightError },
        {
          type: "book",
          data: {
            sku,
            name,
            price: priceError ? 0 : parseFloat(price),
            weight: weightError ? 0 : parseFloat(weight),
          },
        }
      );
    } else if (productType === "dvd") {
      const size = dvdRef.current.size.value;
      /*validate data*/
      if (size !== undefined && size !== "") {
        sizeError = false;
      }
      /*return according to validation*/
      return validate(
        { skuError, nameError, priceError, sizeError },
        {
          type: "dvd",
          data: {
            sku,
            name,
            price: priceError ? 0 : parseFloat(price),
            size: sizeError ? 0 : parseFloat(size),
          },
        }
      );
    } else {
      const height = furnitureRef.current.height.value;
      const length = furnitureRef.current.length.value;
      const width = furnitureRef.current.width.value;

      if (height !== undefined && height !== "") {
        heightError = false;
      }
      if (length !== undefined && length !== "") {
        lengthError = false;
      }
      if (width !== undefined && width !== "") {
        widthError = false;
      }
      /*return according to validation*/
      return validate(
        {
          skuError,
          nameError,
          priceError,
          heightError,
          lengthError,
          widthError,
        },
        {
          type: "furniture",
          data: {
            sku,
            name,
            price: priceError ? 0 : parseFloat(price),
            dimensions: {
              width: widthError ? 0 : parseInt(width),
              length: lengthError ? 0 : parseInt(length),
              height: heightError ? 0 : parseInt(height),
            },
          },
        }
      );
    }
  };

  const validate = (validObj, dataObj) => {
    const valid = allValid(validObj);
    if (valid) {
      return {
        valid: true,
        dataObj,
      };
    } else {
      return { valid: false, sku: dataObj.data.sku };
    }
  };

  const allValid = (data) => {
    const keys = Object.keys(data);
    for (let x = 0; x < keys.length; x++) {
      if (data[keys[x]] === true) return false;
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
          <button className="button">Cancel</button>
        </div>
      </div>
      <hr />
      <div id="forms-div">
        <form id="product-form" ref={formRef}>
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
        </form>
        {productType === "dvd" ? (
          <DvdForm dvdRef={dvdRef} />
        ) : productType === "book" ? (
          <BookForm bookRef={bookRef} />
        ) : (
          <FurnitureForm furnitureRef={furnitureRef} />
        )}
        {invalid ? (
          <label className="error">All fields are required</label>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductAdd;
