import Input from "./Input";

const FurnitureForm = () => {
  return (
    <>
      <fieldset>
        <label htmlFor="height">Height(CM): </label>
        <Input
          id="height"
          name="height"
          type="text"
          valueType="number"
          errorMessage="Height must not be empty [number]"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="width">Width(CM): </label>
        <Input
          id="width"
          name="width"
          type="text"
          valueType="number"
          errorMessage="Width must not be empty [number]"
        />
      </fieldset>

      <fieldset>
        <label htmlFor="length">Length(CM): </label>
        <Input
          id="length"
          name="length"
          type="text"
          valueType="number"
          errorMessage="Length must not be empty [number]"
        />
      </fieldset>
      <label>Please provide dimensions</label>
    </>
  );
};

export default FurnitureForm;
