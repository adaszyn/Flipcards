import { connect } from "react-redux"
import {FlipcardComponent} from "../components/FlipcardComponent";

const mapStateToProps = (state) => {
  return {
    content: "",
    title: ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwipeLeft: () => {console.log("swipe left")},
    onSwipedRight: () => {console.log("swipe right")}
  }
}

const FlipcardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlipcardComponent)

export default FlipcardContainer
