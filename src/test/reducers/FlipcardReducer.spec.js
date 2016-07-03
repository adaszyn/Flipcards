import React from "react";
import { expect } from "chai";
import { FlipcardReducer } from "../../reducers/FlipcardReducer";
import { AddFlipcard, setFlipcardGlobalIndex, RemoveFlipcard, getNextFlipcard, getPreviousFlipcard } from "../../actions/FlipcardActions";

describe("FlipcardReducer", function () {

  beforeEach(() => {
      setFlipcardGlobalIndex(0);
  });

  it("should return valid default state", function () {
    expect(FlipcardReducer(undefined, {})).to.be.a("object");
  });

  it("should add new flipcard", function () {
    const front = "My front";
    const back = "My back";
    var state = FlipcardReducer(undefined, AddFlipcard({front, back}));
    expect(state.flipcards).to.have.lengthOf(1);
    expect(state.flipcards[0].id).to.equal(0);
    expect(state.flipcards[0].front).to.equal(front);
    expect(state.flipcards[0].back).to.equal(back);
  });

  it("add valid ids", function () {
    var state = FlipcardReducer(
      FlipcardReducer(
        FlipcardReducer(undefined, AddFlipcard()),
        AddFlipcard()),
       AddFlipcard());
    expect(state.flipcards).to.have.lengthOf(3);
    expect(state.flipcards[0].id).to.equal(0);
    expect(state.flipcards[1].id).to.equal(1);
    expect(state.flipcards[2].id).to.equal(2);
  });

  it("Should remove specific element", function() {
    var state = FlipcardReducer(
      FlipcardReducer(
        FlipcardReducer(undefined, AddFlipcard()),
        AddFlipcard()),
       AddFlipcard());
    state = FlipcardReducer(state, RemoveFlipcard(0));
    expect(state.flipcards).to.have.lengthOf(2);
    expect(state.flipcards.filter((entry) => entry.id === 0)).to.have.lengthOf(0);
    expect(state.flipcards.filter((entry) => entry.id !== 0)).to.have.lengthOf(2);
  });

  it("Shoud circularly iterate over flipcards.", function() {
    let state = FlipcardReducer(undefined, AddFlipcard({front:"1", back: "a"}));
    state = FlipcardReducer(state, AddFlipcard({front:"2", back: "b"}));
    expect(state.selectedFlipcardIndex).to.equal(-1);
    state = FlipcardReducer(state, getNextFlipcard());
    expect(state.selectedFlipcardIndex).to.equal(0);
    state = FlipcardReducer(state, getPreviousFlipcard());
    expect(state.selectedFlipcardIndex).to.equal(1);


  });

});
