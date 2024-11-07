import { Field } from 'formik';

export function MyInput({ placeholder = '', type = 'text', name }) {
  return (
    <label>
      <Field
        className="field"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
