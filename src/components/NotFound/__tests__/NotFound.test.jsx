import { testRender } from "../../../common/tests/helper";
import { NotFound } from "../NotFound";
import { fireEvent } from "@testing-library/dom";

describe("<NotFound/>", () => {
  it("should render correctly", () => {
    const { getByTestId, asFragment } = testRender(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("not-found-container")).toBeDefined();
  });
  it("should navigate to login page correctly", () => {
    const { getByTestId } = testRender(<NotFound />);
    fireEvent.click(getByTestId("home-btn"));
  });
});
