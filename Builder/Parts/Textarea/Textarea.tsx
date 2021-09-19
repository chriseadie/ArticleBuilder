import { CreateGuid } from "../../Code/Helpers";
import { IPart, PartType } from "../IParts";


export class Textarea implements IPart {
    public readonly partType: string;
    public readonly id:string;
    public text:string;

    constructor(){
        this.partType = PartType.Textarea;
        this.id = CreateGuid()
        this.text = "";
    }

    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }

}