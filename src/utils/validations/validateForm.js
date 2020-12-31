export const validateForm = (values) => {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if(!values.password){
    errors.password = 'Required';
  } else if (!/(?=^.{10,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[\s\W]).*$/.test(values.password)) {
    errors.password = 'Must contain at least one number and one uppercase and lowercase letter, and at least 10 or more characters'
  }

  return errors;
};
