import { CreateGuid } from "../../Code/Helpers";
import { IPart, PartType } from "../IParts";

export class Images implements IPart {
    
    public readonly partType: string;
    public readonly id: string;
    public isThumbnail:boolean;
    public image:string;
    public altText:string;
    public width:number|string;
    public height:number|string;
    public alignment:string;

    constructor(){
        this.partType = PartType.Images;
        this.id = CreateGuid();
        this.image = "";
        this.width = "auto";
        this.height = "auto";
        this.alignment = ""
        this.isThumbnail = false;
        this.altText = "";
    }

    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }

}