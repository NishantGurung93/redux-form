import { Form, Formik } from "formik";
import { validateForm } from "../../utils/validations";
import Input from "../Input";

const UserForm = () => {
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
        alert(JSON.stringify(values, null, 2));
      }}
    >

      <Form>
        <Input
          label="First name"
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
        
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
};

export default UserForm;
