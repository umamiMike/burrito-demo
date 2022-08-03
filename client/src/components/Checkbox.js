export const Checkbox = (props) => {
  let { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
