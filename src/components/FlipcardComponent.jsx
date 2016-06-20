import React, {Component} from "react";
import Swipeable from "react-swipeable";

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
                            <div className="front">{this.props.front}</div>
                            <div className="back">{this.props.back}</div>
                        </div>
                    </div>
                </div>
            </Swipeable>
        );
    }
}

FlipcardComponent.propTypes = {
    back: React.PropTypes.string,
    front: React.PropTypes.string,
    onSwipeLeft: React.PropTypes.func,
    onSwipeRight: React.PropTypes.func
};
