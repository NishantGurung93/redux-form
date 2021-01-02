import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitDetails } from "../../slices/userSlice";
import { validateForm } from "../../utils/validations";
import Input from "../Input";

const UserForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
          placeholder="Password"
          type="password"
          required
        />

        <button type="submit" data-testid="submit-button">Submit</button>
      </Form>
    </Formik>
  )
};

export default UserForm;
