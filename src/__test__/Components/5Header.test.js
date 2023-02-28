/* eslint-disable jest/valid-expect */
/* eslint-disable react/react-in-jsx-scope */
import { queryByAttribute } from "@testing-library/react";
import Header from "components/Header";
import RenderComponent from "utils/test-utils/renderComponent";
describe("Header Component", () => {
  test("Render initial component in header component", async () => {
    const { container } = RenderComponent(Header);
    const getById = queryByAttribute.bind(null, "id");

    const headerInitialGrid = getById(container, "header");

    expect(headerInitialGrid).toBeInTheDocument();
  });
});
