import React from 'react';
import { CreateGuid } from '../../Code/Helpers';
import { IPart, PartType } from '../IParts';

export class Table implements IPart {

    public readonly partType: string;
    public readonly id: string;

    public rows:Array<Array<string>>;
    public columns:Array<string>;

    constructor(){
        this.partType = PartType.Table;
        this.id = CreateGuid();
        this.rows = new Array();
        this.columns = new Array();
    }
    renderSlideOut(): JSX.Element {
        throw new Error('Method not implemented.');
    }

}