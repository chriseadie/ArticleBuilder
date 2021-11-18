import { IPart } from "../Parts/IParts";


export interface IRenderComponent{
    part:IPart
    render(key:string,part:IPart)
}