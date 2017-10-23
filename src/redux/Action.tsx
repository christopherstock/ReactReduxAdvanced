
    /*******************************************************************************************************************
    *   Specifies all redux action creators.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Action
    {
        public  static  readonly    ACTION_CREATE_TASK       = 'ACTION_CREATE_TASK';
        public  static  readonly    ACTION_DELETE_TASK       = 'ACTION_DELETE_TASK';
        public  static  readonly    ACTION_MOVE_TASK_UP      = 'ACTION_MOVE_TASK_UP';
        public  static  readonly    ACTION_MOVE_TASK_DOWN    = 'ACTION_MOVE_TASK_DOWN';
        public  static  readonly    ACTION_SET_INPUT_FIELD   = 'ACTION_SET_INPUT_FIELD';
        public  static  readonly    ACTION_CLEAR_INPUT_FIELD = 'ACTION_CLEAR_INPUT_FIELD';
        public  static  readonly    ACTION_SET_INPUT_ERROR   = 'ACTION_SET_INPUT_ERROR';
        public  static  readonly    ACTION_CLEAR_INPUT_ERROR = 'ACTION_CLEAR_INPUT_ERROR';

        /***************************************************************************************************************
        *   Specifies the redux action 'create task'.
        *
        *   @param {string} taskName The name of the task to create.
        *
        *   @return {Object} The action object for creating a task.
        ***************************************************************************************************************/
        public static createTaskAction( taskName:string ) : any
        {
            return {
                type:     Action.ACTION_CREATE_TASK,
                taskName: taskName,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'delete task'.
        *
        *   @param {number} taskIndex The index of the task to delete.
        *
        *   @return {Object} The action object for deleting a task.
        ***************************************************************************************************************/
        public static deleteTaskAction( taskIndex:number ) : any
        {
            return {
                type:      Action.ACTION_DELETE_TASK,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task up'.
        *
        *   @param {number} taskIndex The index of the task to move up.
        *
        *   @return {Object} The action object for moving a task up.
        ***************************************************************************************************************/
        public static moveTaskUpAction( taskIndex:number ) : any
        {
            return {
                type:      Action.ACTION_MOVE_TASK_UP,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'move task down'.
        *
        *   @param {number} taskIndex The index of the task to move down.
        *
        *   @return {Object} The action object for moving a task down.
        ***************************************************************************************************************/
        public static moveTaskDownAction( taskIndex:number ) : any
        {
            return {
                type:      Action.ACTION_MOVE_TASK_DOWN,
                taskIndex: taskIndex,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'set input field'.
        *
        *   @param {string} inputText The text to set into the input field.
        *
        *   @return {Object} The action object for setting the input field.
        ***************************************************************************************************************/
        public static setInputFieldAction( inputText:string ) : any
        {
            return {
                type:      Action.ACTION_SET_INPUT_FIELD,
                inputText: inputText,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input field'.
        *
        *   @return {Object} The action object for clearing the input field.
        ***************************************************************************************************************/
        public static clearInputFieldAction() : any
        {
            return {
                type: Action.ACTION_CLEAR_INPUT_FIELD,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'set input error'.
        *
        *   @return {Object} The action object for setting the input error.
        ***************************************************************************************************************/
        public static setInputErrorAction() : any
        {
            return {
                type: Action.ACTION_SET_INPUT_ERROR,
            }
        }

        /***************************************************************************************************************
        *   Specifies the redux action 'clear input error'.
        *
        *   @return {Object} The action object for clearing the input error.
        ***************************************************************************************************************/
        public static clearInputErrorAction() : any
        {
            return {
                type: Action.ACTION_CLEAR_INPUT_ERROR,
            }
        }
    }
