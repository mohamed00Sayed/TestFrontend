const BookForm = () => {
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
        />
      </fieldset>
      <label>Please provide book weight</label>
    </form>
  );
};

export default BookForm;
