import { queryByAttribute } from "@testing-library/react";
import Pricing from "components/Contents/pricing";
import RenderComponent from "utils/test-utils/renderComponent";
describe("Pricing Component", () => {
  test("Render initial component in pricing component", async () => {
    const { container } = RenderComponent(Pricing);
    const getById = queryByAttribute.bind(null, "id");

    const pricingInitialGrid = getById(container, "pricing");

    expect(pricingInitialGrid).toBeInTheDocument();
  });
});
