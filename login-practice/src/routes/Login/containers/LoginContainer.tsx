import * as React from 'react';

/**
 * This is basically a class that holds several Objects in it. ie. the Object 'IState' contains the 'instance' fields username and password.
 * It will be passed into Login.tsx, where it is initialized, accessed, and used
 */
export namespace LoginProps {
    export interface IStateProps {
        errorMessage?: string; // if I don't make these properties option, then in App.tsx, it will be expecting errorMessage and error to be assigned
        error?: boolean;
    }

    export interface IDispatchProps { }
    export interface IOwnProps { }
    export interface IProps extends IStateProps, IDispatchProps, IOwnProps { }

    export interface IState {
        username: string;
        password: string;
    }

}