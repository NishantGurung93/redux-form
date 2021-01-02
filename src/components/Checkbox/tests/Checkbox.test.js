import { render } from "@testing-library/react";
import { Formik } from "formik";
import Checkbox from "../Checkbox";

const defaultProps = {
  label: 'Test label',
  name: 'test',
};

const renderComponent = () => {
  return render(
    <Formik>
      <Checkbox {...defaultProps} />
    </Formik>,
  );
};

describe('Input component', () => {
  it('should render the component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
