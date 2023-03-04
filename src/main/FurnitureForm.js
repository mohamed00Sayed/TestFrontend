const FurnitureForm = () => {
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
        />
      </fieldset>
      <fieldset>
        <label htmlFor="width">Width(CM): </label>
        <input
          id="width"
          name="width"
          type="text"
          required
          autoComplete="off"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="length">Length(CM): </label>
        <input
          id="length"
          name="length"
          type="text"
          required
          autoComplete="off"
        />
      </fieldset>
      <label>Please provide dimensions</label>
    </form>
  );
};

export default FurnitureForm;
