import { Accordion } from "../Parts/Accordion/Accordion";
import { Carousel } from "../Parts/Carousel/Carousel";
import { CarouselWithCaptions } from "../Parts/Carousel/CarouselWithCaptions";
import { CarouselWithControls } from "../Parts/Carousel/CarouselWithControls";
import { CarouselWithIndicator } from "../Parts/Carousel/CarouselWithIndicator";
import { IPart, PartType } from "../Parts/IParts";
import { Textarea } from "../Parts/Textarea/Textarea";


export class PartFactory {

    private readonly key:string;
    private readonly partDictionary:{[key:string]:any}

    constructor(key:string){

        this.key = key;
        this.partDictionary = {
            [PartType.Accordion]:Accordion,
            [PartType.Carousel]:Carousel,
            [PartType.CarouselWithControls]:CarouselWithControls,
            [PartType.CarouselWithIndicator]:CarouselWithIndicator,
            [PartType.CarouselWithCaptions]:CarouselWithCaptions,
            [PartType.Textarea]:Textarea
        }
    }
    public Generate():IPart{
        return new this.partDictionary[this.key]();
    }


}