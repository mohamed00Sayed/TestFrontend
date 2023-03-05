import Input from "./Input";

const BookForm = ({ bookRef }) => {
  return (
    <form id="Book" ref={bookRef}>
      <fieldset>
        <label htmlFor="weight">Weight(KG): </label>
        <Input
          id="weight"
          name="weight"
          type="text"
          valueType="number"
          errorMessage="Weight must not be empty [number]"
        />
      </fieldset>
      <label>Please provide book weight</label>
    </form>
  );
};

export default BookForm;
