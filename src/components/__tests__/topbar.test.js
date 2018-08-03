import React from "react";
import { shallow } from "enzyme";

import TopBar from "../topBar";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<TopBar />);
});

it("should show a title", () => {
  expect(wrapped.text()).toEqual("Coin");
});
