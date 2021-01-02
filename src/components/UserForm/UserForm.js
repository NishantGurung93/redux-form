import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitDetails } from "../../slices/userSlice";
import { validateForm } from "../../utils/validations";
import Input from "../Input";
import './userForm.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Initial values for the inputs in the form. Ideally we should be using the redux default values but there was nothing to gain from doing so for this product's requirements
  const initialValues = {
    name: '',
    role: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={(values) => {
        // After dispatching the action to the redux, we navigate to the next page of the application
        dispatch(submitDetails(values));
        history.push('/privacy');
      }}
    >
      <Form>
        <Input
          label="Name"
          name="name"
          placeholder="Ash"
          type="text"
          required
        />

        <Input
          label="Role"
          name="role"
          placeholder="Software engineer"
          type="text"
        />

        <Input
          label="Email"
          name="email"
          placeholder="ash@ketchum.com"
          type="email"
          required
        />

        <Input
          label="Password"
          name="password"
          placeholder="**********"
          type="password"
          required
        />

        <button type="submit" className="submit-button" data-testid="submit-button">Submit</button>
      </Form>
    </Formik>
  )
};

export default UserForm;
