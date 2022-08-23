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
  console.log('order image run');
  const {
    name, w, h, styles,
  } = props;
  return (
    <div className={`${styles} `}>
      <img
        alt={name}
        src={`https://fakeimg.pl/${w}x${h}/aaa/ddd/?text=${name} %0A ${w} x ${h}`}
      />
    </div>
  );
}
