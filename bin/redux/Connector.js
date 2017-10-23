"use strict";
exports.__esModule = true;
var ReactRedux = require("react-redux");
var tl = require("../tl");
/*******************************************************************************************************************
*   Specifies all redux connector methods.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var Connector = /** @class */ (function () {
    function Connector() {
    }
    /***************************************************************************************************************
    *   Connects the react component 'TaskList' with redux and returns the connected instance.
    *
    *   @return The connected react component.
    ***************************************************************************************************************/
    Connector.connectTaskList = function () {
        var mapStateToProps = function (state) {
            return {
                taskList: state.taskList
            };
        };
        var mapDispatchToProps = function (dispatch) {
            return {
                onTaskDelete: function (index) { return dispatch(tl.ActionCreator.deleteTaskAction(index)); },
                onTaskMoveUp: function (index) { return dispatch(tl.ActionCreator.moveTaskUpAction(index)); },
                onTaskMoveDown: function (index) { return dispatch(tl.ActionCreator.moveTaskDownAction(index)); }
            };
        };
        return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(tl.TaskListUnconnected);
    };
    /***************************************************************************************************************
    *   Connects the react component 'TaskInput' with redux and returns the connected instance.
    *
    *   @return The connected react component.
    ***************************************************************************************************************/
    Connector.connectTaskInput = function () {
        var mapStateToProps = function (state) {
            return {
                inputError: state.inputError,
                inputText: state.inputText
            };
        };
        var mapDispatchToProps = function (dispatch) {
            return {
                onTaskCreate: function (text) { return dispatch(tl.ActionCreator.createTaskAction(text)); },
                onSetInputField: function (text) { return dispatch(tl.ActionCreator.setInputFieldAction(text)); },
                onClearInputField: function () { return dispatch(tl.ActionCreator.clearInputFieldAction()); },
                onSetInputError: function () { return dispatch(tl.ActionCreator.setInputErrorAction()); },
                onClearInputError: function () { return dispatch(tl.ActionCreator.clearInputErrorAction()); }
            };
        };
        return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(tl.TaskInputUnconnected);
    };
    return Connector;
}());
exports.Connector = Connector;
//# sourceMappingURL=Connector.js.map