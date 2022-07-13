export const Checkbox = (props) => {
  let { value, checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
