export const FakeIMG = (fakename, l, w) => {
  return (
    <img
      className="order-img"
      alt="alt"
      src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${fakename} image`}
    />
  );
};
