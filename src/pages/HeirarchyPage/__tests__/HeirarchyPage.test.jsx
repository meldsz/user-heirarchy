import { testRender } from "../../../common/tests/helper";
import { Heirarchy } from "../HeirarchyPage";
import { screen, act, fireEvent } from "@testing-library/react";

describe("<Heirarchy/>", () => {
  it("should render correctly", async () => {
    await act(async () => {
      testRender(<Heirarchy />);
    });
    expect(screen.getByText("Heirarchy Tree")).toBeDefined();
    expect(screen.getByText("John Smith")).toBeDefined();
  });
  it("should logout the correctly", async () => {
    let wrapper;
    const setLoggedInUser = jest.fn();
    await act(async () => {
      wrapper = testRender(<Heirarchy />, {
        setLoggedInUser,
      });
    });
    const { getByTestId } = wrapper;
    act(() => {
      fireEvent.click(getByTestId("logout"));
    });
    expect(setLoggedInUser).toHaveBeenCalledWith(null);
  });
  it("should not render the component when user is not logged in", async () => {
    let wrapper;
    await act(async () => {
      wrapper = testRender(<Heirarchy routerPath="heirarchy" />, {
        loggedInUser: null,
      });
    });
    const { queryByTestId } = wrapper;
    expect(queryByTestId("logout")).toBeNull();
  });
});
