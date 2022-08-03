export default Checkbox = function (props) {
  const { checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
};
