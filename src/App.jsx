import React, {Component} from "react";
import {render} from "react-dom";
import AppStore from "./stores/AppStore";
import {Provider} from "react-redux";
import {FlipcardContainer} from "./containers/FlipcardContainer";
import {FlipcardComponent} from "./components/FlipcardComponent";
import "./stylesheets/_all.scss";
import {AddFlipcard, GetNextFlipcard} from "./actions/FlipcardActions";
var sample = require("json!../sample.json");

export default class App extends Component {
    componentDidMount() {
      console.log(sample)
      sample.flipcards.map((flipcard) => AppStore.dispatch(AddFlipcard(flipcard)))
      AppStore.dispatch(GetNextFlipcard())
    }
    render() {
        return (
            <Provider store={AppStore}>
                <FlipcardContainer/>
            </Provider>
        );
    }

}
