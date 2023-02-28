/* eslint-disable jest/valid-expect */
/* eslint-disable react/react-in-jsx-scope */
import { queryByAttribute, screen } from "@testing-library/react";
import Contact from "components/Contents/contact";
import RenderComponent from "utils/test-utils/renderComponent";
describe("Contact Component", () => {
  test("Render initial component in contact component", async () => {
    const { container } = RenderComponent(Contact);
    const getById = queryByAttribute.bind(null, "id");

    const contactInitialGrid = getById(container, "contact");

    expect(contactInitialGrid).toBeInTheDocument();
  });
});
