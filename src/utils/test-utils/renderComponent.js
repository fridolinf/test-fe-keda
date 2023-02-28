import { render } from "@testing-library/react";
const RenderComponent = (Component) => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  return render(<Component />);
};

export default RenderComponent;
