const DvdForm = () => {
  return (
    <form id="DVD">
      <fieldset>
        <label htmlFor="size">Size(MB): </label>
        <input id="size" name="size" type="text" required autoComplete="off" />
      </fieldset>
      <label>Please provide DVD size</label>
    </form>
  );
};

export default DvdForm;
