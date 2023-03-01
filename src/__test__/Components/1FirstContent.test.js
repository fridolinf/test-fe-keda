import {
  queryAllByAttribute,
  queryByAttribute,
  screen,
} from "@testing-library/react";
import FirstContent from "components/Contents/firstContent";
import RenderComponent from "utils/test-utils/renderComponent";

describe("First Content Component", () => {
  test("Render initial component in first content component", async () => {
    const { container } = RenderComponent(FirstContent);
    const getById = queryByAttribute.bind(null, "id");
    const getAllById = queryAllByAttribute.bind(null, "id");

    const homeGrid = getById(container, "home");
    const modal = getById(container, "custom-modal");
    const img = screen.getByRole("img", { name: /erpImage/i });
    const navigationMenus = getAllById(container, "menu-navigation");

    expect(modal).not.toBeInTheDocument();
    expect(homeGrid).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(navigationMenus).toHaveLength(4);
  });
});
