import { IPart } from "../../Parts/IParts";


export enum StateAction {
    ADD_NEW_PART = "ADD_NEW_PART"
}

export interface IState{
    mode: "development" | "production";
    articleParts:Array<IPart>;
}

export interface IActionType<T>{
    type:string;
    data:T
}

