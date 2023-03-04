import { useState } from "react";
import { isNumeric } from "../pages/ProductAdd";

const DvdForm = ({ passData }) => {
  const [data, setData] = useState({});
  const [validation, setValidation] = useState({});

  const setSize = (event) => {
    const size = event.target.value;
    if (!isNumeric(size)) {
      passData({
        data: { size },
        validation: { emptySize: true },
      });
      setValidation({ emptySize: true });
      setData({ size });
      event.target.value = "";
    } else {
      passData({
        data: { size: parseFloat(size) },
        validation: { emptySize: false },
      });
      setValidation({ emptySize: false });
      setData({ size: parseFloat(size) });
    }
  };

  return (
    <form id="DVD">
      <fieldset>
        <label htmlFor="size">Size(MB): </label>
        <input
          id="size"
          name="size"
          type="text"
          required
          autoComplete="off"
          onChange={setSize}
          onPaste={setSize}
        />
      </fieldset>
      {validation.emptySize ? (
        <label className="error">Size must be non-empty number</label>
      ) : (
        ""
      )}
      <br />
      <label>Please provide DVD size</label>
    </form>
  );
};

export default DvdForm;
