import { render } from "@testing-library/react";
import { Formik } from "formik";
import Input from "../Input";

const defaultProps = {
  label: 'Test label',
  name: 'test',
  placeholder: 'Test placeholder',
  type: 'text',
  required: false,
};

const renderComponent = props => {
  const combinedProps = {
    ...defaultProps,
    ...props,
  };

  return render(
    <Formik>
      <Input {...combinedProps} />
    </Formik>,
  );
};

describe('Input component', () => {
  it('should render the component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render * on label if required', () => {
    const { getByText } = renderComponent({ required: true });
    expect(getByText('*')).toBeInTheDocument();
  });
});
