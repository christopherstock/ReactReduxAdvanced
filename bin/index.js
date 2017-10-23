"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var Redux = require("redux");
var ReactRedux = require("react-redux");
var tl = require("./tl");
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page are fully loaded.
*******************************************************************************************************************/
window.onload = function () {
    // specify the application title
    var APPLICATION_TITLE = "React Task List";
    // acclaim debug console and set page title
    console.log(APPLICATION_TITLE);
    document.title = APPLICATION_TITLE;
    // create redux store
    var store = Redux.createStore(tl.Reducer.taskListReducer);
    // dispatch default items
    store.dispatch(tl.ActionCreator.createTaskAction("Müll rausbringen"));
    store.dispatch(tl.ActionCreator.createTaskAction("Abwaschen"));
    store.dispatch(tl.ActionCreator.createTaskAction("Wäsche waschen"));
    // render the App component into the main container
    ReactDOM.render(React.createElement(ReactRedux.Provider, { store: store },
        React.createElement(tl.App, { title: APPLICATION_TITLE })), document.getElementById('mainContainer'));
};
/*******************************************************************************************************************
*   Being invoked when all components of the HTML page are fully unloaded.
*******************************************************************************************************************/
window.onunload = function () {
};
//# sourceMappingURL=index.js.map