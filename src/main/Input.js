import { useState } from "react";

const Input = ({ id, name, type, valueType, errorMessage }) => {
  const [invalid, setInvalid] = useState(false);
  const checkErrors = (event) => {
    const value = event.target.value;
    if (value.trim() === "") {
      event.target.value = "";
      setInvalid(true);
    } else {
      let checkType = "";
      if (isNumeric(value)) {
        checkType = "number";
      } else {
        checkType = "string";
      }

      if (checkType !== valueType) {
        event.target.value = "";
        setInvalid(true);
      } else {
        setInvalid(false);
      }
    }
  };

  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        onChange={checkErrors}
        onPaste={checkErrors}
      />
      {invalid ? (
        <>
          <br /> <label className="error">{errorMessage}</label>
        </>
      ) : (
        ""
      )}
    </>
  );
};

const isNumeric = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

export default Input;
