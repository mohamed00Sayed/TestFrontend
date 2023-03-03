import Checkbox from "./Checkbox";

const Dvd = ({ dvd, list }) => {
  const addToList = () => {
    /*add sku to list*/
    list.push(dvd.sku);
  };

  const removeFromList = () => {
    /*remove sku from list*/
    const idx = list.indexOf(dvd.sku);
    list.splice(idx, 1);
  };

  return (
    <li>
      <Checkbox addToList={addToList} removeFromList={removeFromList} />
      <div>{dvd.sku}</div>
      <div>{dvd.name}</div>
      <div>{dvd.price} $</div>
      <div>Size: {dvd.size}</div>
    </li>
  );
};

export default Dvd;
