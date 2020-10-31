import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";

import Reaction from "./components/Reaction";

const setup = (props = {}) => {
  return shallow(<Reaction {...props} />);
};

test("Reaction component renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "reaction-component");
  expect(component.length).toBe(1);
});

test("amount of points earned this round displays", () => {
  const wrapper = setup();
  const points = findByTestAttr(wrapper, "points-earned");
  expect(points.text().length).not.toBe(0);
});

test("text displays in the answer-field", () => {
  const wrapper = setup({ correctAnswer: "correct answer" });
  const answer = findByTestAttr(wrapper, "correct-answer");
  expect(answer.text().length).not.toBe(0);
});
