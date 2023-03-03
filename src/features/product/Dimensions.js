const Dimensions = ({ dimensions }) => {
  return (
    <div>
      {dimensions.length}X{dimensions.width}X{dimensions.height}
    </div>
  );
};

export default Dimensions;
