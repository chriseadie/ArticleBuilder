import { ApplicationState } from "../../Models/AppState";
import createReducer from "../createReducer";
import { StateResolver } from "./resolver";
import { StateAction } from "./types";

export namespace StateReducer{

    export const initialState = new ApplicationState();

    export const AppStateReducer = createReducer(initialState,{
        [StateAction.ADD_NEW_PART]:StateResolver.resolveAddNewPart
    });

}