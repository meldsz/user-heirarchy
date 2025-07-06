import { renderHook } from "@testing-library/react";
import { useUserContext } from "../useUserContext";

describe("UserContextProvider", () => {
  test("useUserContext throws error when not used within provider", () => {
    jest.spyOn(console, "error").mockImplementation((err) => err);
    expect(() => renderHook(() => useUserContext())).toThrow(
      "useUserContext must be used within provider"
    );
  });
});
