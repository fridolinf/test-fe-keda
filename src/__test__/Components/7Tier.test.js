import { queryAllByAttribute, queryByAttribute } from "@testing-library/react";
import Tier from "components/Tier";
import RenderComponent from "utils/test-utils/renderComponent";
describe("Tier Component", () => {
  test("Render initial component in tier component", async () => {
    const { container } = RenderComponent(Tier);
    const getById = queryByAttribute.bind(null, "id");
    const getAllById = queryAllByAttribute.bind(null, "id");
    const getByClass = queryByAttribute.bind(null, "class");

    const tierInitialGrid = getById(container, "tier");
    const tierContent = getAllById(container, "tier-content");
    const carousel = getByClass(container, "carousel");

    expect(tierInitialGrid).toBeInTheDocument();
    expect(tierContent).toBeTruthy();
    expect(carousel).toBeInTheDocument();
  });
});
