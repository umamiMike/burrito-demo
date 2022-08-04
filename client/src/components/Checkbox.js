import React from 'react';

export function Checkbox(props) {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
