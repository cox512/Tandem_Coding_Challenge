import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Score from "./components/Score";

const setup = (props = { score: 0 }) => {
  return shallow(<Score {...props} />);
};

test("Answers Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "score-component");
  expect(component.length).toBe(1);
});

test("score displays 0 at start", () => {
  const wrapper = setup();
  const score = findByTestAttr(wrapper, "score");
  expect(score.text()).toBe("0");
});
