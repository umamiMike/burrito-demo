import React from 'react';

export function FakeImage(props) {
  const { name, l, w } = props.args;
  return (
    <img
      className="p-2"
      alt="alt"
      src={`https://fakeimg.pl/${l}x${w}/444/ddd/?text=${name} image`}
    />
  );
}

export function OrderImage(props) {
  const {
    name, w, h, styles, image,
  } = props;
  return (
    <div className={`${styles} `}>
      <img
        alt={name}
        src={image}
      />
    </div>
  );
}
