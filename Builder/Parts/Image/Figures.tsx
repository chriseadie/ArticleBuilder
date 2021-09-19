import React from 'react';
import { CreateGuid } from '../../Code/Helpers';
import { IPart, PartType } from '../IParts';

export class Figures implements IPart {
    
    public readonly partType: string;
    public readonly id: string;

    public link:string;
    public image:string;
    public altText:string;
    public caption:string;

    constructor(){
        this.partType = PartType.Figures;
        this.id = CreateGuid();
        this.link = "";
        this.image = "";
        this.caption = "";
        this.altText = "";
    }

    renderSlideOut(): JSX.Element {
        throw new Error('Method not implemented.');
    }

}