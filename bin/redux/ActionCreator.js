"use strict";
exports.__esModule = true;
/*******************************************************************************************************************
*   Specifies all redux action creators.
*
*   @author  Christopher Stock
*   @version 1.0
*******************************************************************************************************************/
var ActionCreator = /** @class */ (function () {
    function ActionCreator() {
    }
    /***************************************************************************************************************
    *   Specifies the redux action 'create task'.
    *
    *   @param taskName The name of the task to create.
    *
    *   @return The action object for creating a task.
    ***************************************************************************************************************/
    ActionCreator.createTaskAction = function (taskName) {
        return {
            type: ActionCreator.ACTION_CREATE_TASK,
            taskName: taskName
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'delete task'.
    *
    *   @param taskIndex The index of the task to delete.
    *
    *   @return The action object for deleting a task.
    ***************************************************************************************************************/
    ActionCreator.deleteTaskAction = function (taskIndex) {
        return {
            type: ActionCreator.ACTION_DELETE_TASK,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'move task up'.
    *
    *   @param taskIndex The index of the task to move up.
    *
    *   @return The action object for moving a task up.
    ***************************************************************************************************************/
    ActionCreator.moveTaskUpAction = function (taskIndex) {
        return {
            type: ActionCreator.ACTION_MOVE_TASK_UP,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'move task down'.
    *
    *   @param taskIndex The index of the task to move down.
    *
    *   @return The action object for moving a task down.
    ***************************************************************************************************************/
    ActionCreator.moveTaskDownAction = function (taskIndex) {
        return {
            type: ActionCreator.ACTION_MOVE_TASK_DOWN,
            taskIndex: taskIndex
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'set input field'.
    *
    *   @param inputText The text to set into the input field.
    *
    *   @return The action object for setting the input field.
    ***************************************************************************************************************/
    ActionCreator.setInputFieldAction = function (inputText) {
        return {
            type: ActionCreator.ACTION_SET_INPUT_FIELD,
            inputText: inputText
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'clear input field'.
    *
    *   @return The action object for clearing the input field.
    ***************************************************************************************************************/
    ActionCreator.clearInputFieldAction = function () {
        return {
            type: ActionCreator.ACTION_CLEAR_INPUT_FIELD
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'set input error'.
    *
    *   @return The action object for setting the input error.
    ***************************************************************************************************************/
    ActionCreator.setInputErrorAction = function () {
        return {
            type: ActionCreator.ACTION_SET_INPUT_ERROR
        };
    };
    /***************************************************************************************************************
    *   Specifies the redux action 'clear input error'.
    *
    *   @return The action object for clearing the input error.
    ***************************************************************************************************************/
    ActionCreator.clearInputErrorAction = function () {
        return {
            type: ActionCreator.ACTION_CLEAR_INPUT_ERROR
        };
    };
    ActionCreator.ACTION_CREATE_TASK = 'ACTION_CREATE_TASK';
    ActionCreator.ACTION_DELETE_TASK = 'ACTION_DELETE_TASK';
    ActionCreator.ACTION_MOVE_TASK_UP = 'ACTION_MOVE_TASK_UP';
    ActionCreator.ACTION_MOVE_TASK_DOWN = 'ACTION_MOVE_TASK_DOWN';
    ActionCreator.ACTION_SET_INPUT_FIELD = 'ACTION_SET_INPUT_FIELD';
    ActionCreator.ACTION_CLEAR_INPUT_FIELD = 'ACTION_CLEAR_INPUT_FIELD';
    ActionCreator.ACTION_SET_INPUT_ERROR = 'ACTION_SET_INPUT_ERROR';
    ActionCreator.ACTION_CLEAR_INPUT_ERROR = 'ACTION_CLEAR_INPUT_ERROR';
    return ActionCreator;
}());
exports.ActionCreator = ActionCreator;
//# sourceMappingURL=ActionCreator.js.map