import React from 'react';

const Checkbox = (props: any) => {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
export default Checkbox;
