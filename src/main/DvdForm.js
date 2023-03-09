import Input from "./Input";

const DvdForm = () => {
  return (
    <>
      <fieldset>
        <label htmlFor="size">Size(MB): </label>
        <Input
          id="size"
          name="size"
          type="text"
          valueType="number"
          errorMessage="Size must not be empty [number]"
        />
      </fieldset>
      <label>Please provide DVD size</label>
    </>
  );
};

export default DvdForm;
