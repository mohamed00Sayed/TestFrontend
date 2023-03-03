import Checkbox from "./Checkbox";
import Dimensions from "./Dimensions";

const Furniture = ({ furniture, list }) => {
  const addToList = () => {
    /*add sku to list*/
    list.push(furniture.sku);
  };

  const removeFromList = () => {
    /*remove sku from list*/
    const idx = list.indexOf(furniture.sku);
    list.splice(idx, 1);
  };

  return (
    <li>
      <Checkbox addToList={addToList} removeFromList={removeFromList} />
      <div>{furniture.sku}</div>
      <div>{furniture.name}</div>
      <div>{furniture.price} $</div>
      <Dimensions dimensions={furniture.dimensions} />
    </li>
  );
};

export default Furniture;
