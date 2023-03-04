import { useState } from "react";
import { isNumeric } from "../pages/ProductAdd";

const FurnitureForm = ({ passData }) => {
  const [data, setData] = useState({ dimensions: {} });
  const [validation, setValidation] = useState({});

  const setHeight = (event) => {
    const height = event.target.value;

    if (!isNumeric(height)) {
      passData({
        data: { dimensions: { ...data.dimensions, height } },
        validation: { ...validation, emptyHeight: true },
      });
      setValidation({ ...validation, emptyHeight: true });
      setData({ dimensions: { ...data.dimensions, height } });
      event.target.value = "";
    } else {
      passData({
        data: { dimensions: { ...data.dimensions, height: parseInt(height) } },
        validation: { ...validation, emptyHeight: false },
      });
      setValidation({ ...validation, emptyHeight: false });
      setData({ dimensions: { ...data.dimensions, height: parseInt(height) } });
    }
  };

  const setWidth = (event) => {
    const width = event.target.value;

    if (!isNumeric(width)) {
      passData({
        data: { dimensions: { ...data.dimensions, width } },
        validation: { ...validation, emptyWidth: true },
      });
      setValidation({ ...validation, emptyWidth: true });
      setData({ dimensions: { ...data.dimensions, width } });
      event.target.value = "";
    } else {
      passData({
        data: { dimensions: { ...data.dimensions, width: parseInt(width) } },
        validation: { ...validation, emptyWidth: false },
      });
      setValidation({ ...validation, emptyWidth: false });
      setData({ dimensions: { ...data.dimensions, width: parseInt(width) } });
    }
  };

  const setLength = (event) => {
    const length = event.target.value;

    if (!isNumeric(length)) {
      passData({
        data: { dimensions: { ...data.dimensions, length } },
        validation: { ...validation, emptyLength: true },
      });
      setValidation({ ...validation, emptyLength: true });
      setData({ dimensions: { ...data.dimensions, length } });
      event.target.value = "";
    } else {
      passData({
        data: { dimensions: { ...data.dimensions, length: parseInt(length) } },
        validation: { ...validation, emptyLength: false },
      });
      setValidation({ ...validation, emptyLength: false });
      setData({ dimensions: { ...data.dimensions, length: parseInt(length) } });
    }
  };

  return (
    <form id="Furniture">
      <fieldset>
        <label htmlFor="height">Height(CM): </label>
        <input
          id="height"
          name="height"
          type="text"
          required
          autoComplete="off"
          onChange={setHeight}
          onPaste={setHeight}
        />
      </fieldset>
      {validation.emptyHeight ? (
        <label className="error">Height must be non-empty number</label>
      ) : (
        ""
      )}
      <fieldset>
        <label htmlFor="width">Width(CM): </label>
        <input
          id="width"
          name="width"
          type="text"
          required
          autoComplete="off"
          onChange={setWidth}
          onPaste={setWidth}
        />
      </fieldset>
      {validation.emptyWidth ? (
        <label className="error">Width must be non-empty number</label>
      ) : (
        ""
      )}
      <fieldset>
        <label htmlFor="length">Length(CM): </label>
        <input
          id="length"
          name="length"
          type="text"
          required
          autoComplete="off"
          onChange={setLength}
          onPaste={setLength}
        />
      </fieldset>
      {validation.emptyLength ? (
        <label className="error">Length must be non-empty number</label>
      ) : (
        ""
      )}
      <br />
      <label>Please provide dimensions</label>
    </form>
  );
};

export default FurnitureForm;
