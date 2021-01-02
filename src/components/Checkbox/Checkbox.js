import { Field } from "formik";
import { string } from 'prop-types';

const Checkbox = ({ label, name }) => {
  return (
    <div className={`${name}-checkbox`}>
      <Field
        id={name}
        data-testid={`${name}-checkbox`}
        name={name}
        type='checkbox'
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
};

Checkbox.propTypes = {
  name: string,
  label: string,
};

export default Checkbox;
