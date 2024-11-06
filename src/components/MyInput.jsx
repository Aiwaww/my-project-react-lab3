export function MyInput({ placeholder = '', type = 'text', name }) {
  return (
    <label>
      <input
        className="field"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
