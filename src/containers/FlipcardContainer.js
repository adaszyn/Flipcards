import { connect } from "react-redux"
import { FlipcardComponent } from "../components/FlipcardComponent";
import { getPreviousFlipcard, getNextFlipcard } from "../actions/FlipcardActions";

const mapStateToProps = (state) => {
  const flipcard = state.flipcards.flipcards[state.flipcards.selectedFlipcardIndex];
  return {
    front: (flipcard ? flipcard.front : null),
    back: (flipcard ? flipcard.back : null)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwipeLeft: () => {
      dispatch(getPreviousFlipcard())
    },
    onSwipeRight: () => {
      dispatch(getNextFlipcard())
    }
  }
}

export const FlipcardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipcardComponent)

export default FlipcardContainer
