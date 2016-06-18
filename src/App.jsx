import React, {Component} from "react";
import { render } from "react-dom";
import AppStore from "./stores/AppStore";
import { Provider } from "react-redux";
import {FlipcardContainer} from "./containers/FlipcardContainer";
import {FlipcardComponent} from "./components/FlipcardComponent";
import "./stylesheets/_all.scss";

export default class App extends Component {
    render() {
      return (<Provider store={AppStore}>
          <FlipcardComponent front="Hello" back="World" onSwipeRight={() => {console.log("right")}} onSwipeLeft={() => {console.log("left")}}/>
        </Provider>
      );
    }

}
