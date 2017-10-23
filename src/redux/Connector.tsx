
    import * as ReactRedux from 'react-redux';
    import * as tl         from '../tl';

    /*******************************************************************************************************************
    *   Specifies all redux connector methods.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class Connector
    {
        /***************************************************************************************************************
        *   Connects the react component 'TaskList' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        public static connectTaskList()
        {
            const mapStateToProps:any = ( state:any ) => {
                return {
                    taskList: state.taskList
                }
            };

            const mapDispatchToProps:any = ( dispatch:any ) => {
                return {
                    onTaskDelete:   ( index:number ) => dispatch( tl.Action.deleteTaskAction(   index ) ),
                    onTaskMoveUp:   ( index:number ) => dispatch( tl.Action.moveTaskUpAction(   index ) ),
                    onTaskMoveDown: ( index:number ) => dispatch( tl.Action.moveTaskDownAction( index ) ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( tl.TaskListUnconnected );
        }

        /***************************************************************************************************************
        *   Connects the react component 'TaskInput' with redux and returns the connected instance.
        *
        *   @return {Object} The connected react component.
        ***************************************************************************************************************/
        public static connectTaskInput()
        {
            const mapStateToProps:any = ( state:any ) => {
                return {
                    inputError: state.inputError,
                    inputText:  state.inputText
                }
            };

            const mapDispatchToProps:any = ( dispatch:any ) => {
                return {
                    onTaskCreate:      ( text:string ) => dispatch( tl.Action.createTaskAction(      text ) ),
                    onSetInputField:   ( text:string ) => dispatch( tl.Action.setInputFieldAction(   text ) ),
                    onClearInputField: ()              => dispatch( tl.Action.clearInputFieldAction()       ),
                    onSetInputError:   ()              => dispatch( tl.Action.setInputErrorAction()         ),
                    onClearInputError: ()              => dispatch( tl.Action.clearInputErrorAction()       ),
                }
            };

            return ReactRedux.connect(
                mapStateToProps,
                mapDispatchToProps
            )( tl.TaskInputUnconnected );
        }
    }
