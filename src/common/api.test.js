import { fetchUsers } from "./api";
import { mockUsers } from "../../__mocks__/mockUsers";

describe("api", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should successfully fetch users", async () => {
    const response = await fetchUsers();
    expect(global.fetch.mock.calls[0][0]).toBe(
      "https://gongfetest.firebaseio.com/.json"
    );
    expect(response).toEqual(mockUsers);
  });
  it("should successfully catch error in the api", async () => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.reject(new Error()));
    expect(async () => await fetchUsers()).rejects.toThrow(
      "Error fetching Users"
    );
  });
});
