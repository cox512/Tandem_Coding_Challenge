import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Gameboard from "./components/Gameboard";

const setup = (props = {}) => {
  return shallow(<Gameboard {...props} />);
};

test("Game Board Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "gameboard-component");
  expect(component.length).toBe(1);
});
