import { queryByAttribute, screen } from "@testing-library/react";
import Header from "components/Header";
import RenderComponent from "utils/test-utils/renderComponent";

describe("Header Component", () => {
  test("Render initial component in header component", async () => {
    const { container } = RenderComponent(Header);
    const getById = queryByAttribute.bind(null, "id");

    const headerInitialGrid = getById(container, "header");
    const waveImg = screen.getByRole("img");
    const avatar = getById(container, "avatar-icon");
    const btnLogin = screen.getByRole("button");

    expect(headerInitialGrid).toBeInTheDocument();
    expect(waveImg).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent(/myth/i);
    expect(btnLogin).toBeInTheDocument();
    expect(btnLogin).toHaveTextContent(/login/i);
  });
});
