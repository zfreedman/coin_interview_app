import React from "react";
import { shallow } from "enzyme";

import App from "../app";
import TopBar from "../topbar";


describe("shallow renders", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it("renders a <TopBar />", () => {
    expect(wrapped.find(TopBar).length).toEqual(1);
  });
});
