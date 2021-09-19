import React from 'react';
import { Images } from '../../Parts/Image/Image';
import { IRenderComponent } from '../IRenderComponents';

export default function ImagesPart({part}:IRenderComponent){
    const component = part as Images;

    if(component.isThumbnail){
        return <img src={component.image} className="img-thumbnail" alt={component.altText}/>
    }

    return (
        <img src={component.image} className="img-fluid" alt={component.altText}/>
    )
}