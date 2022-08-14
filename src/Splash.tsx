import React from 'react';

const Splash = (ctx: React.Context) => {
  const { props } = ctx;
  return (
    <div className="sticky top-0 flex-row bg-gray-100 shadow-sm ">
      <div className="flex items-center space-x-4" />
      <div className=" " />
    </div>
  );
};
export default Splash;
