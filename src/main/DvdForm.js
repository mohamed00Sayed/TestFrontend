import Input from "./Input";

const DvdForm = ({ dvdRef }) => {
  return (
    <form id="DVD" ref={dvdRef}>
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
    </form>
  );
};

export default DvdForm;
