import GetPartByType from '../Code/Helpers';
import { IPart } from "../Parts/IParts";



export function ArticleRenderSwitch(part:IPart){
    try{
        return GetPartByType(part);
    }catch(err){
            return null;
    } 
}