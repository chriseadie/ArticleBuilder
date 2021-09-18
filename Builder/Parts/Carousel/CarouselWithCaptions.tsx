import React from 'react';
import { IPart, PartType } from "../IParts";
import { ICarouselImage } from "./ICarousel";

export class CarouselWithCaptions implements IPart {
    
    public partType: string;
    public link:string;
    public images:Array<ICarouselImage>;

    constructor(){
        this.partType = PartType.CarouselWithCaptions;
        this.link = "";
        this.images = new Array<ICarouselImage>();
    }



    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    
}