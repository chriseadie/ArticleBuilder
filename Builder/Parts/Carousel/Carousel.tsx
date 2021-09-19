import React from 'react';
import { CreateGuid } from '../../Code/Helpers';
import { IPart, PartType } from "../IParts";
import { ICarouselImage } from "./ICarousel";

export class Carousel implements IPart {
    
    public readonly partType: string;
    public link:string;
    public readonly id:string;
    public images:Array<ICarouselImage>;

    constructor(){
        this.partType = PartType.Carousel;
        this.link = "";
        this.images = new Array<ICarouselImage>();
        this.id = CreateGuid();
    }



    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }
    
}