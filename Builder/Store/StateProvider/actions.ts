import { IPart } from "../../Parts/IParts";
import { StateAction } from "./types";


export function addNewArticlePart(part:IPart){
    return {
        type:StateAction.ADD_NEW_PART,
        data:part
    }
}