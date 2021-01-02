import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Formik } from "formik";
import Checkbox from "../Checkbox";
import { submitPrivacy } from "../../slices/privacySlice";

const PrivacyForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = {
    trayEmail: '',
    otherEmail: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
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
        <button type="submit" data-testid="submit-button">Submit</button>
      </Form>
    </Formik>
  )
};

export default PrivacyForm;
