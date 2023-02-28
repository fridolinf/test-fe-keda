/* eslint-disable jest/valid-expect */
/* eslint-disable react/react-in-jsx-scope */
import { queryByAttribute, queryAllByAttribute } from "@testing-library/react";
import FirstContent from "components/Contents/firstContent";
import RenderComponent from "utils/test-utils/renderComponent";

describe("First Content Component", () => {
  test("Render initial component in first content component", async () => {
    const { container } = RenderComponent(FirstContent);
    const getById = queryByAttribute.bind(null, "id");
    const getAllById = queryAllByAttribute.bind(null, "id");

    const homeGrid = getById(container, "home");
    const modal = getById(container, "custom-modal");
    const navigationMenus = getAllById(container, "menu-navigation");

    expect(modal).not.toBeInTheDocument();
    expect(homeGrid).toBeInTheDocument();
    expect(navigationMenus).toHaveLength(4);
  });
});
