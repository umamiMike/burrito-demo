import React from 'react';

export default function Checkbox(props: any) {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
