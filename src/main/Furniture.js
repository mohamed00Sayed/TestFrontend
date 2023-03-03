import Checkbox from "./Checkbox";
import Dimensions from "./Dimensions";

const Furniture = ({ furniture, add, remove }) => {
  const addFurnitureToList = () => {
    /*add furniture to list*/
    add(furniture);
  };

  const removeFurnitureFromList = () => {
    /*remove furniture from list*/
    remove(furniture);
  };

  return (
    <li>
      <Checkbox add={addFurnitureToList} remove={removeFurnitureFromList} />
      <div>{furniture.sku}</div>
      <div>{furniture.name}</div>
      <div>{furniture.price} $</div>
      <Dimensions dimensions={furniture.dimensions} />
    </li>
  );
};

export default Furniture;
