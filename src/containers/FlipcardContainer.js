import { connect } from "react-redux"
import {FlipcardComponent} from "../components/FlipcardComponent";

const mapStateToProps = (state) => {
  const flipcard = state.flipcards.flipcards[state.flipcards.selectedFlipcardIndex];
  return {
    front: (flipcard ? flipcard.front : null),
    back: (flipcard ? flipcard.back : null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwipeLeft: () => {console.log("swipe left")},
    onSwipedRight: () => {console.log("swipe right")}
  }
}

export const FlipcardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipcardComponent)

export default FlipcardContainer
