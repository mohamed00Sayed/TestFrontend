import Checkbox from "./Checkbox";

const Dvd = ({ dvd, add, remove }) => {
  const addDvdToList = () => {
    /*add dvd to list*/
    add(dvd);
  };

  const removeDvdFromList = () => {
    /*remove dvd from list*/
    remove(dvd);
  };

  return (
    <li>
      <Checkbox add={addDvdToList} remove={removeDvdFromList} />
      <div>{dvd.sku}</div>
      <div>{dvd.name}</div>
      <div>{dvd.price} $</div>
      <div>Size: {dvd.size}</div>
    </li>
  );
};

export default Dvd;
