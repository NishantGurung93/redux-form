import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Confirmation from "../Confirmation";

const mockStore = {
  value: {},
  useDispatch: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
  subscribe: jest.fn(),
}

console.log = jest.fn();

const renderComponent = () => render(
  <Provider store={mockStore}>
    <Confirmation />
  </Provider>
);

describe('Confirmation component', () => {
  it('should render the component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
