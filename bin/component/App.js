"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var tl = require("../tl");
/*******************************************************************************************************************
*   The entire application component.
*   This is an example for a stateful component.
*
*   TODO ASAP Add visibility modifiers to all methods.
*   TODO ASAP Fix all doc blocks.
*   TODO ASAP Alter all :any types to discreet classes.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***************************************************************************************************************
    *   Being invoked every time this component renders.
    *
    *   @return The rendered JSX.
    ***************************************************************************************************************/
    App.prototype.render = function () {
        console.log("App.render() being invoked");
        // TODO outsource!
        var TaskInput = tl.Connector.connectTaskInput();
        var TaskList = tl.Connector.connectTaskList();
        return React.createElement("div", null,
            React.createElement("h1", { id: "appTitle" }, this.props.title),
            React.createElement(TaskInput, null),
            React.createElement(TaskList, null));
    };
    return App;
}(React.Component));
exports.App = App;
//# sourceMappingURL=App.js.map