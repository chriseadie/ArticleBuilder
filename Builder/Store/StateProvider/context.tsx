import React, { createContext, useContext, useReducer, useMemo } from 'react';

import { StateReducer } from './reducer';
import { IState } from './types';

export const StateContext = createContext<[IState,React.Dispatch<any>]>([StateReducer.initialState,() => null]);

export const StateProvider = ({ children }) => {

    let [state, dispatch] = useReducer(
        StateReducer.AppStateReducer,
        StateReducer.initialState
    );

    let contextValue:[IState,React.Dispatch<any>] = useMemo(() => {
        return [state, dispatch];
    }, [state, dispatch]);

    return (
        <StateContext.Provider value={contextValue}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateProvider = () => useContext(StateContext);