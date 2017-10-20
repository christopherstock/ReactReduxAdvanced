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
/*******************************************************************************************************************
*   Represents the input component that lets the user create new tasks.
*   This is an example for a stateful and controlled component.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var TaskInputUnconnected = /** @class */ (function (_super) {
    __extends(TaskInputUnconnected, _super);
    function TaskInputUnconnected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /***************************************************************************************************************
    *   Being invoked every time this component renders.
    *
    *   @return The rendered JSX.
    ***************************************************************************************************************/
    TaskInputUnconnected.prototype.render = function () {
        var _this = this;
        console.log("TaskInput.render() being invoked");
        return React.createElement("form", { onSubmit: function (event) { _this.onFormSubmit(event); } },
            React.createElement("input", { id: "newTask", type: "text", maxLength: 50, className: this.props.inputError ? "input error" : "input", value: this.props.inputText, onChange: function (event) { _this.onInputChange(event); } }),
            React.createElement("br", null),
            React.createElement("input", { id: "submitButton", type: "submit", value: "Create Task", className: "button" }));
    };
    /***************************************************************************************************************
    *   Being invoked when the input field value changes.
    *
    *   @param event The event when the input field value changes.
    ***************************************************************************************************************/
    TaskInputUnconnected.prototype.onInputChange = function (event) {
        console.log("TaskInput.onInputChange being invoked");
        // assign text to input field
        this.props.onClearInputError();
        this.props.onSetInputField(event.target.value);
    };
    /***************************************************************************************************************
    *   Being invoked when the form is submitted.
    *
    *   @param event The form submission event.
    ***************************************************************************************************************/
    TaskInputUnconnected.prototype.onFormSubmit = function (event) {
        console.log("TaskInput.onFormSubmit being invoked");
        // suppress page reload
        event.preventDefault();
        // trim entered text
        var enteredText = this.props.inputText.trim();
        // check entered text
        console.log("Trimmed text in the box is [" + enteredText + "]");
        if (enteredText.length === 0) {
            console.log("Empty text input detected.");
            // set error state
            this.props.onSetInputError();
            this.props.onClearInputField();
        }
        else {
            // clear error state
            this.props.onClearInputError();
            this.props.onClearInputField();
            // invoke parent listener
            this.props.onTaskCreate(enteredText);
        }
    };
    ;
    return TaskInputUnconnected;
}(React.Component));
exports.TaskInputUnconnected = TaskInputUnconnected;
//# sourceMappingURL=TaskInput.js.map