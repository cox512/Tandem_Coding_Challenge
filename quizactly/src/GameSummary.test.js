import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import GameSummary from "./components/GameSummary";

const setup = (props = {}) => {
  return shallow(<GameSummary {...props} />);
};

test("GameSummary Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "game-summary-component");
  expect(component.length).toBe(1);
});

test("renders replay button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "replay-button");
  expect(button.length).toBe(1);
});
