import React from 'react';

export default function OrderImage(props) {
  const {
    image, name, w, h, styles,
  } = props;
  console.log('image for the menu item is: ', name, image, w, h, styles);
  return (
    <div className={`${styles} `}>
      <img
        alt={name}
        src={`https://fakeimg.pl/${w}x${h}/aaa/ddd/?text=${name} %0A ${w} x ${h}`}
      />
    </div>
  );
}
