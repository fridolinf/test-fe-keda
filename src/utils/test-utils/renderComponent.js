import { render } from "@testing-library/react";
const RenderComponent = (Component, props) => {
  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  return render(<Component {...props} />);
};

export default RenderComponent;
