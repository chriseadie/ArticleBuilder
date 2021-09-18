import { ApplicationState } from "../../Models/AppState";
import createReducer from "../createReducer";

export namespace StateReducer{

    export const initialState = new ApplicationState();

    export const AppStateReducer = createReducer(initialState,{

    });

}