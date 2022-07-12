export const FakeImage = (props) => {
  let { name, l, w } = props.args;
  return (
    <img
      className="p-2"
      alt="alt"
      src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${name} image`}
    />
  );
};

export const OrderImage = (props) => {
  let { name, w, h, styles } = props;
  return (
    <div className={`${styles} `}>
      <img
        alt="alt"
        src={`https://loremflickr.com/${w * 2}/${h * 2}/${name}`}
      />
    </div>
  );
};
