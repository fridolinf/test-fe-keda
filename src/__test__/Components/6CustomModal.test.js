import { queryByAttribute } from "@testing-library/react";
import CustomModal from "components/CustomModal";
import RenderComponent from "utils/test-utils/renderComponent";
describe("CustomModal Component", () => {
  test("Render initial component in custom modal component", async () => {
    const { container } = RenderComponent(CustomModal);
    const getById = queryByAttribute.bind(null, "id");

    const customModalInitial = getById(container, "custom-modal");

    expect(customModalInitial).toBeDefined();
  });
});
