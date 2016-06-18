import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import { FlipcardComponent } from "../../components/FlipcardComponent";
import sinon from "sinon";

// NOTE: 'shallow' component does not provide props()
// TODO: testing swipe events

describe("<FlipcardComponent/>", function () {

  it("should have props for front and back", function () {
    const back = "My Content";
    const front = "My Title";
    const wrapper = mount(<FlipcardComponent back={back}/>);
    expect(wrapper.props().front).to.be.defined;
    expect(wrapper.props().back).to.equal(back);
  });

});
