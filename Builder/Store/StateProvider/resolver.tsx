import { IPart } from "../../Parts/IParts";
import { IActionType, IState } from "./types";


export class StateResolver {
    
    public static resolveAddNewPart(state:IState,data:IActionType<IPart>):IState{
        const partsCopy = [...state.articleParts,data.data];
        return{
            ...state,
            articleParts:partsCopy
        }
    }
}