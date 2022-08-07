import React from 'react';

export default function OrderImage(props: any) {
  const {
    image, name, w, h, styles,
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
