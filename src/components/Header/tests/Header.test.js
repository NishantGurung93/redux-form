import { render } from "@testing-library/react";
import Header from "../Header";

jest.mock('react-router-dom', () => ({
  useRouteMatch: jest.fn().mockReturnValue({
    isExact: true,
    params: {},
    path: "/details",
    url: "/details",
  }),
}));

const renderComponent = () => render(
  <Header />
);

describe('Header component', () => {
  beforeEach(() => {
    window.location = {
      href: "http://localhost:3000/details"
    }
  })

  it('should render the component', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
