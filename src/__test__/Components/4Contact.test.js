import { queryByAttribute, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "components/Contents/contact";
import RenderComponent from "utils/test-utils/renderComponent";
describe("Contact Component", () => {
  test("Render initial component in contact component", async () => {
    const { container } = RenderComponent(Contact);
    const getById = queryByAttribute.bind(null, "id");

    const contactInitialGrid = getById(container, "contact");
    const map = screen.getByTitle(/map/i);
    const getInputName = screen.getByPlaceholderText(/your name/i);
    const getInputEmail = screen.getByPlaceholderText(/Example@mail.com/i);
    const getInputQuestion = screen.getByPlaceholderText(/Your question/i);

    expect(contactInitialGrid).toBeInTheDocument();
    expect(map).toBeInTheDocument();
    expect(getInputName).toBeInTheDocument();
    expect(getInputEmail).toBeInTheDocument();
    expect(getInputQuestion).toBeInTheDocument();
  });

  test("User input form value", async () => {
    RenderComponent(Contact);

    const getInputName = screen.getByPlaceholderText(/your name/i);
    const getInputEmail = screen.getByPlaceholderText(/Example@mail.com/i);
    const getInputQuestion = screen.getByPlaceholderText(/Your question/i);

    userEvent.type(getInputName, "name");
    userEvent.type(getInputEmail, "email");
    userEvent.type(getInputQuestion, "my question is");
    expect(getInputName).toHaveValue("name");
    expect(getInputEmail).toHaveValue("email");
    expect(getInputQuestion).toHaveValue("my question is");
  });
});
