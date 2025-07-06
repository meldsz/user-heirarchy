import { testRender } from "../../../common/tests/helper";
import { Login } from "../LoginPage";
import { screen, fireEvent, act, waitFor } from "@testing-library/react";
import { fetchUsers } from "../../../common/api";
import { mockUsers } from "../../../../__mocks__/mockUsers";
import { encode } from "../../../common/utils";

jest.mock("../../../common/api", () => ({
  fetchUsers: jest.fn(),
}));

jest.mock("../../../common/utils", () => ({
  encode: jest.fn(),
}));

describe("<Login/>", () => {
  it("should render correctly", () => {
    testRender(<Login />);
    expect(screen.getByText("Please Login")).toBeDefined();
  });
  it("should login correctly", async () => {
    encode.mockReturnValue("ABCD");
    fetchUsers.mockImplementation(() => mockUsers);
    const setLoggedInUser = jest.fn();
    const { getByTestId } = testRender(<Login />, {
      setLoggedInUser,
      loggedInUser: null,
    });
    act(() => {
      fireEvent.change(getByTestId("email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.change(getByTestId("password"), {
        target: { value: "pass" },
      });
      fireEvent.click(getByTestId("login-button"));
    });

    await waitFor(() =>
      expect(setLoggedInUser).toHaveBeenCalledWith({
        email: "john.smith@xtreet.tvl",
        firstName: "John",
        id: 123,
        lastName: "Smith",
        password: "asak",
      })
    );
  });
  it("should handle login with incorrect user correctly", async () => {
    expect.assertions(2);
    encode.mockReturnValue("test-secret");
    fetchUsers.mockImplementation(() => mockUsers);
    const setLoggedInUser = jest.fn();
    const { getByTestId } = testRender(<Login />, {
      setLoggedInUser,
      loggedInUser: null,
    });
    act(() => {
      fireEvent.click(getByTestId("login-button"));
    });

    expect(setLoggedInUser).not.toHaveBeenCalled();

    await waitFor(() => expect(getByTestId("login-error")).toBeDefined());
  });
});
