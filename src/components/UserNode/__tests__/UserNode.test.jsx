import { fireEvent } from "@testing-library/dom";
import { testRender } from "../../../common/tests/helper";
import { UserNode } from "../UserNode";
import { mockUsers } from "../../../../__mocks__/mockUsers";

describe("<UserNode/>", () => {
  it("should render correctly", () => {
    const { getByTestId, asFragment } = testRender(
      <UserNode user={mockUsers?.users[0]} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("user-node-container")).toBeDefined();
  });
  it("should expand manager correctly", () => {
    const { getByTestId, getByText, getByLabelText } = testRender(
      <UserNode user={mockUsers?.users[0]} />
    );
    expect(getByLabelText("Expand")).toBeDefined();
    fireEvent.click(getByTestId("toggle"));
    expect(getByLabelText("Collapse")).toBeDefined();
  });
  it("should display user image when it is available", () => {
    const { getByTestId, getByRole } = testRender(
      <UserNode user={mockUsers?.users[1]} />
    );
    fireEvent.click(getByTestId("toggle"));
    expect(getByRole("img").src).toBe("https://test.jpg/");
  });
  it("should display user initials when user image is not available", () => {
    const { getByTestId, getByText, queryByTestId } = testRender(
      <UserNode user={mockUsers?.users[0]} />
    );
    fireEvent.click(getByTestId("toggle"));
    expect(getByText("JS")).toBeDefined();
    expect(queryByTestId("user-badge")).toBeNull();
  });
  it("should display user initials when user image has an error", () => {
    const { getByTestId, getByText, getByRole } = testRender(
      <UserNode user={mockUsers?.users[1]} />
    );
    fireEvent.click(getByTestId("toggle"));
    expect(getByRole("img").src).toBe("https://test.jpg/");
    fireEvent.error(getByRole("img"));
    expect(getByText("MB")).toBeDefined();
  });
});
