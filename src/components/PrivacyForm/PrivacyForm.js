import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import Checkbox from "../Checkbox";
import { submitPrivacy } from "../../slices/privacySlice";
import './privacyForm.css';

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // Initial values for the inputs in the form. Ideally we should be using the redux default values but there was nothing to gain from doing so for this product's requirements
  const initialValues = {
    trayEmail: '',
    otherEmail: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // After dispatching the action to the redux, we navigate to the next page of the application
        dispatch(submitPrivacy(values));
        history.push('/confirmation');
      }}
    >
      <Form>
        <Checkbox
          label="Receive updates about Tray.io product by email"
          name="trayEmail"
          type="checkbox"
        />

        <Checkbox
          label="Receive communication by email for other products created by the Tray.io team"
          name="otherEmail"
          type="checkbox"
        />
        <button type="submit" className="submit-button" data-testid="submit-button">Submit</button>
      </Form>
    </Formik>
  )
};

export default PrivacyForm;
