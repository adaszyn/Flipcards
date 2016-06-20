import React, {Component} from "react";
import Swipeable from "react-swipeable";

export const FlipcardComponent = ({
    back,
    front,
    onSwipeRight,
    onSwipeLeft,
    flipped
}) => {
    return (
    <Swipeable onSwipedRight={onSwipeRight} onSwipedLeft={onSwipeLeft}>
        <div className="Flipcard" onClick={() => {}}>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
                <div className={"flipper" + (flipped ? " flipped" : "")} >
                    <div className="front">{front}</div>
                    <div className="back">{back}</div>
                </div>
            </div>
        </div>
    </Swipeable>
);
}

FlipcardComponent.propTypes = {
    back: React.PropTypes.string,
    front: React.PropTypes.string,
    onSwipeLeft: React.PropTypes.func,
    onSwipeRight: React.PropTypes.func
};
