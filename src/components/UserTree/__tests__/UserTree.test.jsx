import { mockUsers } from "../../../../__mocks__/mockUsers";
import { UserTree } from "../UserTree";
import { act, fireEvent } from "@testing-library/react";
import { testRender } from "../../../common/tests/helper";

jest.mock("../../../common/api", () => ({
  fetchUsers: jest.fn().mockResolvedValue(mockUsers),
}));

describe("<UserTree/>", () => {
  it("should display user tree correctly", async () => {
    let wrapper;
    await act(async () => {
      wrapper = testRender(<UserTree />);
    });
    const { queryAllByTestId, asFragment } = wrapper;
    fireEvent.click(queryAllByTestId("toggle")[1]);
    expect(asFragment()).toMatchSnapshot();
  });
});
