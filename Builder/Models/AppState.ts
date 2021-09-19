import { IPart } from "../Parts/IParts";
import { IState } from "../Store/StateProvider/types";

export class ApplicationState implements IState{

    mode: "development" | "production";
    articleParts: IPart[];

    constructor() {
        this.mode = "development";
        this.articleParts = new Array<IPart>();
    }
    
}