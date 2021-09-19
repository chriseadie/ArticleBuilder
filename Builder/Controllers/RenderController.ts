import { PartFactory } from "../Code/PartsFactory";
import { PartType } from "../Parts/IParts";
import { addNewArticlePart } from "../Store/StateProvider/actions";
import { Controller } from "./Controller";


export class RenderController extends Controller{

    public addNewPart(key:PartType | undefined) {
        const partKey = key as string;
        const renderPart = new PartFactory(partKey)
        this.dispatch(addNewArticlePart(renderPart.Generate()));
    }
}