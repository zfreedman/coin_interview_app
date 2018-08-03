import React from "react";
import { mount } from "enzyme";

import App from "components/app";
import CoinList from "components/coinList";
import Root from "root";
import TopBar from "components/topBar";


describe("existence checks", () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App testCoins={[]} />
      </Root>
    );
  });

  it("renders a <TopBar />", () => {
    expect(wrapped.find(TopBar).length).toEqual(1);
  });

  it("renders a <CoinList />", () => {
    expect(wrapped.find(CoinList).length).toEqual(1);
  });
});
