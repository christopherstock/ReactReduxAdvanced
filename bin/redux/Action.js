"use strict";
exports.__esModule = true;
/*******************************************************************************************************************
*   Specifies all redux action creators.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var Action = /** @class */ (function () {
    function Action() {
    }
    /***************************************************************************************************************
    *   Specifies the redux action 'create task'.
    *
    *   @param {string} taskName The name of the task to create.
    *
    *   @return {Object} The action object for creating a task.
    ***************************************************************************************************************/
    Action.createTaskAction = function (taskName) {
        return {
            type: Action.ACTION_CREATE_TASK,
            taskName: taskName
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'delete task'.
    *
    *   @param {number} taskIndex The index of the task to delete.
    *
    *   @return {Object} The action object for deleting a task.
    ***************************************************************************************************************/
    Action.deleteTaskAction = function (taskIndex) {
        return {
            type: Action.ACTION_DELETE_TASK,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'move task up'.
    *
    *   @param {number} taskIndex The index of the task to move up.
    *
    *   @return {Object} The action object for moving a task up.
    ***************************************************************************************************************/
    Action.moveTaskUpAction = function (taskIndex) {
        return {
            type: Action.ACTION_MOVE_TASK_UP,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'move task down'.
    *
    *   @param {number} taskIndex The index of the task to move down.
    *
    *   @return {Object} The action object for moving a task down.
    ***************************************************************************************************************/
    Action.moveTaskDownAction = function (taskIndex) {
        return {
            type: Action.ACTION_MOVE_TASK_DOWN,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'set input field'.
    *
    *   @param {string} inputText The text to set into the input field.
    *
    *   @return {Object} The action object for setting the input field.
    ***************************************************************************************************************/
    Action.setInputFieldAction = function (inputText) {
        return {
            type: Action.ACTION_SET_INPUT_FIELD,
            inputText: inputText
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'clear input field'.
    *
    *   @return {Object} The action object for clearing the input field.
    ***************************************************************************************************************/
    Action.clearInputFieldAction = function () {
        return {
            type: Action.ACTION_CLEAR_INPUT_FIELD
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'set input error'.
    *
    *   @return {Object} The action object for setting the input error.
    ***************************************************************************************************************/
    Action.setInputErrorAction = function () {
        return {
            type: Action.ACTION_SET_INPUT_ERROR
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'clear input error'.
    *
    *   @return {Object} The action object for clearing the input error.
    ***************************************************************************************************************/
    Action.clearInputErrorAction = function () {
        return {
            type: Action.ACTION_CLEAR_INPUT_ERROR
        };
    };
    Action.ACTION_CREATE_TASK = 'ACTION_CREATE_TASK';
    Action.ACTION_DELETE_TASK = 'ACTION_DELETE_TASK';
    Action.ACTION_MOVE_TASK_UP = 'ACTION_MOVE_TASK_UP';
    Action.ACTION_MOVE_TASK_DOWN = 'ACTION_MOVE_TASK_DOWN';
    Action.ACTION_SET_INPUT_FIELD = 'ACTION_SET_INPUT_FIELD';
    Action.ACTION_CLEAR_INPUT_FIELD = 'ACTION_CLEAR_INPUT_FIELD';
    Action.ACTION_SET_INPUT_ERROR = 'ACTION_SET_INPUT_ERROR';
    Action.ACTION_CLEAR_INPUT_ERROR = 'ACTION_CLEAR_INPUT_ERROR';
    return Action;
}());
exports.Action = Action;
//# sourceMappingURL=Action.js.map