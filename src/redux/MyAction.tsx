
    import * as Redux from 'redux';

    /*******************************************************************************************************************
    *   Specifies all redux actions for the application.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export interface MyAction extends Redux.Action
    {
        type       :string;
        taskName?  :string;
        taskIndex? :number;
        inputText? :string;
    }
