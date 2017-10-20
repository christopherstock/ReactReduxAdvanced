"use strict";
exports.__esModule = true;
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
    *   @return {Object} The connected react component.
    ***************************************************************************************************************/
    Connector.connectTaskList = function () {
        var mapStateToProps = function (state) {
            return {
                taskList: state.taskList
            };
        };
        var mapDispatchToProps = function (dispatch) {
            return {
                onTaskDelete: function (index) { return dispatch(Action.deleteTaskAction(index)); },
                onTaskMoveUp: function (index) { return dispatch(Action.moveTaskUpAction(index)); },
                onTaskMoveDown: function (index) { return dispatch(Action.moveTaskDownAction(index)); }
            };
        };
        return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TaskListUnconnected);
    };
    /***************************************************************************************************************
    *   Connects the react component 'TaskInput' with redux and returns the connected instance.
    *
    *   @return {Object} The connected react component.
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
                onTaskCreate: function (text) { return dispatch(Action.createTaskAction(text)); },
                onSetInputField: function (text) { return dispatch(Action.setInputFieldAction(text)); },
                onClearInputField: function () { return dispatch(Action.clearInputFieldAction()); },
                onSetInputError: function () { return dispatch(Action.setInputErrorAction()); },
                onClearInputError: function () { return dispatch(Action.clearInputErrorAction()); }
            };
        };
        return ReactRedux.connect(mapStateToProps, mapDispatchToProps)(TaskInputUnconnected);
    };
    return Connector;
}());
exports.Connector = Connector;
//# sourceMappingURL=Connector.js.map