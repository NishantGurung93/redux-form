import { Field, Form, Formik } from "formik";

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

      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >

      <Form>
        <label htmlFor="name">First Name</label>
        <Field name="name" placeholder="Ash" />

        <label htmlFor="role">Role</label>
        <Field name="role" placeholder="Software engineer" />

        <label htmlFor="email">Email</label>
        <Field
          name="email"
          placeholder="ash@ketchum.com"
          type="email"
        />

        <label htmlFor="password">Password</label>
        <Field
          name="password"
          placeholder="ash@ketchum.com"
          type="password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
};

export default UserForm;
