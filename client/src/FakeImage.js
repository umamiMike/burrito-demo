export const FakeImage = (props) => {
  let { name, l, w } = props.args;
  return (
    <img
      className="p-2 order-img"
      alt="alt"
      src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${name} image`}
    />
  );
};

export const OrderImage = (props) => {
  let { name, l, w } = props.args;
  return (
    <img
      className="order-img"
      alt="alt"
      src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${name} image`}
    />
  );
};
