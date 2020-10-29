import { shallow } from "enzyme";

import { findByTestAttr } from "../test/testUtils";
import Question from "./components/Question";

const setup = (props = "") => {
  return shallow(<Question {...props} />);
};

test("Question Component Renders", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "question-component");
  expect(component.length).toBe(1);
});

test("Question component has a question in it", () => {
  const wrapper = setup({ question: "question" });
  const question = findByTestAttr(wrapper, "question");
  expect(question.text().length).not.toBe(0);
});
