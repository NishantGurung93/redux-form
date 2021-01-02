import { ErrorMessage, Field } from "formik";
import { oneOf, string, bool } from 'prop-types';
import './input.css';

const Input = ({ label, name, placeholder, type, required }) => {
  return (
    <div className='input-wrapper'>
      {
        required ?
          <label htmlFor={name}>{`${label}:`}<span> *</span></label>
          :
          <label htmlFor={name}>{`${label}:`}</label>
      }
      <Field
        id={name}
        data-testid={`${name}-input`}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage className="error" name={name} />
    </div>
  )
};

Input.propTypes = {
  type: oneOf(['text', 'email', 'password']),
  name: string,
  placeholder: string,
  label: string,
  required: bool,
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
