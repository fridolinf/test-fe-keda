import { queryByAttribute } from "@testing-library/react";
import App from "App";
import "jest-canvas-mock";
import RenderComponent from "utils/test-utils/renderComponent";

test("Render lottie first", async () => {
  const { container } = RenderComponent(App);
  const getById = queryByAttribute.bind(null, "id");
  const lottie = getById(container, "lottie");
  expect(lottie).toBeInTheDocument();
});
