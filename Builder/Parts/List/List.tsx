import { CreateGuid } from "../../Code/Helpers";
import { IPart, PartType } from "../IParts";

export class List implements IPart{
    
    public readonly partType: string;
    public readonly id:string;
    public showNumbers:boolean;
    public content:Array<string>;

    constructor(){
        this.partType = PartType.List;
        this.id = CreateGuid()
        this.showNumbers = false;
        this.content = new Array<string>();
    }
    
    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }

}