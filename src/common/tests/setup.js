// import "@testing-library/jest-dom/vitest";
// import "@testing-library/jest-dom/extend-expect";
import { TextEncoder } from "util";
import { mockUsers } from "../../../__mocks__/mockUsers";

global.TextEncoder = TextEncoder;

global.fetch = jest.fn().mockResolvedValue({
  json: () => Promise.resolve(mockUsers),
});
