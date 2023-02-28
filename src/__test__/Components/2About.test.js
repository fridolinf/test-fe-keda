/* eslint-disable jest/valid-expect */
/* eslint-disable react/react-in-jsx-scope */
import { queryByAttribute, queryAllByAttribute } from "@testing-library/react";
import About from "components/Contents/about";
import RenderComponent from "utils/test-utils/renderComponent";
describe("About Component", () => {
  test("Render initial component in about component", async () => {
    const { container } = RenderComponent(About);
    const getById = queryByAttribute.bind(null, "id");
    const getAllById = queryAllByAttribute.bind(null, "id");

    const aboutInitialGrid = getById(container, "about");
    const benefitProduct = getAllById(container, "benefit-products");

    expect(aboutInitialGrid).toBeInTheDocument();
    expect(benefitProduct).toHaveLength(4);
  });
});
