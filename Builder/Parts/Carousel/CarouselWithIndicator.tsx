import React from 'react';
import { CreateGuid } from '../../Code/Helpers';
import { IPart, PartType } from "../IParts";
import { ICarouselImage } from './ICarousel';

export class CarouselWithIndicator implements IPart {

    public readonly partType: string;
    public link:string;
    public images:Array<ICarouselImage>;
    public readonly id:string;

    constructor(){
        this.partType = PartType.CarouselWithIndicator;
        this.link = "";
        this.images = new Array<ICarouselImage>();
        this.id = CreateGuid();
    }
    
    renderSlideOut(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}