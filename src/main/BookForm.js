import { useState } from "react";
import { isNumeric } from "../pages/ProductAdd";

const BookForm = ({ passData }) => {
  const [data, setData] = useState({});
  const [validation, setValidation] = useState({});

  const setWeight = (event) => {
    const weight = event.target.value;
    if (!isNumeric(weight)) {
      passData({
        data: { weight },
        validation: { emptyWeight: true },
      });
      setValidation({ emptyWeight: true });
      setData({ weight });
      event.target.value = "";
    } else {
      passData({
        data: { weight: parseFloat(weight) },
        validation: { emptyWeight: false },
      });
      setValidation({ emptyWeight: false });
      setData({ weight: parseFloat(weight) });
    }
  };
  return (
    <form id="Book">
      <fieldset>
        <label htmlFor="weight">Weight(KG): </label>
        <input
          id="weight"
          name="weight"
          type="text"
          required
          autoComplete="off"
          onChange={setWeight}
          onPaste={setWeight}
        />
      </fieldset>
      {validation.emptyWeight ? (
        <label className="error"> Weight must be non-empty number</label>
      ) : (
        ""
      )}
      <br />
      <label>Please provide book weight</label>
    </form>
  );
};

export default BookForm;
