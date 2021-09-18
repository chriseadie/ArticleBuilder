import CarouselPart from "../Components/Carousel/Carousel";
import CarouselwithCaptionsPart from "../Components/Carousel/CarouselWithCaptions";
import CarouselWithControlsPart from "../Components/Carousel/CarouselWithControls";
import CarouselWithIndicatorPart from "../Components/Carousel/CarouselWithIndicator";
import { IPart, PartType } from "../Parts/IParts";


export default function GetPartByType(part:IPart){
    const partComponentMap = new Map([
        [PartType.Carousel,<CarouselPart part={part}/>],
        [PartType.CarouselWithControls,<CarouselWithControlsPart part={part}/>],
        [PartType.CarouselWithIndicator,<CarouselWithIndicatorPart part={part}/>],
        [PartType.CarouselWithCaptions,<CarouselwithCaptionsPart part={part}/>]
    ])

    return partComponentMap.get(part.partType as PartType);
}