import { validateForm } from '../validateForm';

describe('validateForm', () => {
  let formValues;

  beforeEach(() => {
    formValues = {
      name: 'Super dog',
      email: 'dog@marvel.com',
      password: 'Password123'
    };
  });

  it('should return empty object for valid form', () => {
    expect(validateForm(formValues)).toEqual({});
  });

  it('should return invalid email message when invalid', () => {
    formValues.email = "Invalid email";
    
    expect(validateForm(formValues)).toEqual({
      email: 'Invalid email address'
    });
  });

  it('should return invalid password message when invalid', () => {
    formValues.password = "Invalid password";

    expect(validateForm(formValues)).toEqual({
      password: 'Must contain at least one number and one uppercase and lowercase letter, and at least 10 or more characters'
    });
  });

  it('should return object with "required" values for mandatory fields when form is empty', () => {
    const expected = {
      name: 'Required',
      email: 'Required',
      password: 'Required',
    }
    expect(validateForm({})).toEqual(expected);
  });
});
