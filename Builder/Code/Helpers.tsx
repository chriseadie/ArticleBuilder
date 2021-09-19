import AccordionPart from "../Components/Accordion/Accordion";
import CarouselPart from "../Components/Carousel/Carousel";
import CarouselwithCaptionsPart from "../Components/Carousel/CarouselWithCaptions";
import CarouselWithControlsPart from "../Components/Carousel/CarouselWithControls";
import CarouselWithIndicatorPart from "../Components/Carousel/CarouselWithIndicator";
import ListPart from "../Components/List/List";
import TextareaPart from "../Components/Textarea/Textarea";
import { IPart, PartType } from "../Parts/IParts";


export default function GetPartByType(part:IPart){
    
    const partComponentMap = new Map([
        [PartType.Accordion,<AccordionPart part={part}/>],
        [PartType.Carousel,<CarouselPart part={part}/>],
        [PartType.CarouselWithControls,<CarouselWithControlsPart part={part}/>],
        [PartType.CarouselWithIndicator,<CarouselWithIndicatorPart part={part}/>],
        [PartType.CarouselWithCaptions,<CarouselwithCaptionsPart part={part}/>],
        [PartType.List,<ListPart part={part}/>],
        [PartType.Textarea,<TextareaPart part={part}/>]
    ])

    return partComponentMap.get(part.partType as PartType);
}

export function CreateGuid() {  
    function s4() {  
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);  
    }  
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();  
 }  