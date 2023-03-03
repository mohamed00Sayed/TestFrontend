const Dvd = ({ dvd }) => {
  return (
    <li>
      <div>{dvd.sku}</div>
      <div>{dvd.name}</div>
      <div>{dvd.price}</div>
      <div>{dvd.size}</div>
    </li>
  );
};

export default Dvd;
