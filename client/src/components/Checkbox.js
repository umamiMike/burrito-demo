export function Checkbox(props) {
  const { value, checked, onChange } = props;
  return <input type="checkbox" checked={checked} onChange={onChange} />;
}
