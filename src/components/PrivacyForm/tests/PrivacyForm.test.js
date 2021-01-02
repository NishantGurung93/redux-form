import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import PrivacyForm from "..";

const dispatch = jest.fn();
const historyMock = { push: jest.fn(), location: {}, listen: jest.fn() };

const mockStore = {
  value: {},
  useDispatch: jest.fn(),
  dispatch,
  getState: jest.fn(),
  subscribe: jest.fn(),
}

const renderComponent = () => render(
  <Provider store={mockStore}>
    <Router history={historyMock}>
      <PrivacyForm />
    </Router>
  </Provider>
);

describe('Header component', () => {
  it('should render the component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  describe('valid form behaviour', () => {
    beforeEach(async () => {
      const { getByTestId } = renderComponent();

      const trayEmail = getByTestId('trayEmail-checkbox');
      fireEvent.click(trayEmail)

      const otherEmail = getByTestId('otherEmail-checkbox');
      fireEvent.click(otherEmail)

      const submitButton = getByTestId('submit-button');

      await act(async () => {
        fireEvent.click(submitButton);
      });
    });

    it('should call submitDetails', () => {
      expect(dispatch).toHaveBeenCalledWith({
        payload: {
          trayEmail: true,
          otherEmail: true,
        },
        type: 'privacy/submitPrivacy',
      });
    });

    it('should call useHistory hook with "/confirmation"', () => {
      expect(historyMock.push).toHaveBeenCalledWith('/confirmation');
    });
  });
});
