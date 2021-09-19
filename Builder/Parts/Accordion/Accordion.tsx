import { CreateGuid } from "../../Code/Helpers";
import { IPart, PartType } from "../IParts";
import { IAccordionContent } from "./IAccoridion";


export class Accordion implements IPart {
    
    public readonly partType: string;
    public content: Array<IAccordionContent>;
    public readonly id:string;

    constructor(){
        this.partType = PartType.Accordion;
        this.content = new Array<IAccordionContent>();
        this.id = CreateGuid();
    }

    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }

}