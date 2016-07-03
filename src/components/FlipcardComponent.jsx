import React, {Component} from "react";
import Swipeable from "react-swipeable";
import ReactFitText from "react-fittext";

// TODO: stop flip amimation after swipe right/left 

export class FlipcardComponent extends Component {
    constructor() {
      super();
      this.state = {flipped: false}
    }
    render() {
        return (
              <Swipeable onSwipedRight={this.props.onSwipeRight} onSwipedLeft={this.props.onSwipeLeft}>
                  <div className="Flipcard" onClick={() => {this.setState({flipped: !this.state.flipped})}}>
                      <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                          <div className={"flipper" + (this.state.flipped ? " flipped" : "")}>
                              <div className="front">
                                <ReactFitText>
                                  <p className="Text">{this.props.front}</p>
                                </ReactFitText>
                              </div>
                              <div className="back">
                                <ReactFitText>
                                  <p className="Text">{this.props.back}</p>
                                </ReactFitText>
                              </div>
                          </div>
                      </div>
                  </div>
              </Swipeable>

        );
    }
    componentWillReceiveProps() {
      this.setState({flipped: false});
    }
}

FlipcardComponent.propTypes = {
    back: React.PropTypes.string,
    front: React.PropTypes.string,
    onSwipeLeft: React.PropTypes.func,
    onSwipeRight: React.PropTypes.func
};
