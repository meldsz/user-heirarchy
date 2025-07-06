import App from "../App";
import { render } from "@testing-library/react";

describe("<App/>", () => {
  it("renders the App component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
