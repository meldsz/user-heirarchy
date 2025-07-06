import { render } from "@testing-library/react";
import { UserContext } from "../../contexts/UserContext";
import { MemoryRouter } from "react-router";

const mockUser = {
  firstName: "John",
  lastName: "Smith",
};
export const BaseWrapper = ({
  loggedInUser = mockUser,
  setLoggedInUser = jest.fn(),
  children,
}) => {
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <MemoryRouter>{children}</MemoryRouter>
    </UserContext.Provider>
  );
};

export const testRender = (ui, props = {}, options) =>
  render(ui, {
    wrapper: (rtlProps) => {
      const propsToRender = { ...props, ...rtlProps };
      return <BaseWrapper {...propsToRender} />;
    },
    ...options,
  });
