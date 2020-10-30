import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Answers from "./components/Answers";

const setup = (props = { incorrectAnswers: [] }) => {
  return shallow(<Answers {...props} />);
};

test("Answers Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "answers-component");
  expect(component.length).toBe(1);
});

test("answer item renders in answer component", () => {
  const wrapper = setup();
  const choice = findByTestAttr(wrapper, "answer-choice");
  expect(choice.length).toBe(1);
});
