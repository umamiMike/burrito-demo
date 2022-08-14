import React from 'react';
type orderImageProps = {
  image: string;
  name: string;
  w: number;
  h: number;
  styles: string;
}
const OrderImage = (props: orderImageProps) => {
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
};
export default OrderImage;
