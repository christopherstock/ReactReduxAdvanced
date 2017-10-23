
    import * as React    from 'react';
    import * as tl       from '../tl';

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
    export class App extends React.Component<tl.AppProps, null>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        public render() : JSX.Element
        {
            console.log( "App.render() being invoked" );

            // TODO outsource!
            const TaskInput:any = tl.Connector.connectTaskInput();
            const TaskList:any  = tl.Connector.connectTaskList();

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </div>;
        }
    }
