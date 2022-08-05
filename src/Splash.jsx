import React from 'react';

export default function Splash(ctx) {
  const { props } = ctx;
  console.log(props);
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4" />
      <div className=" " />
    </div>
  );
}
