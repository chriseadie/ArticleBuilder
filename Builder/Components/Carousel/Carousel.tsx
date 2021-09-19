import React from 'react';
import { Carousel } from '../../Parts/Carousel/Carousel';

import { IRenderComponent } from '../IRenderComponents';


export default function CarouselPart({part}:IRenderComponent){
    const component = part as Carousel;
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {component.images.map((image,index) => {
                    if(index === 0){
                        return (
                            <div key={index} className="carousel-item active">
                                <img src={image.src} className={`d-block w-100 ${image.class}`} alt={image.alt}/>
                            </div>
                        )
                    }
                    return (<div key={index} className="carousel-item">
                        <img src={image.src} className={`d-block w-100 ${image.class}`} alt={image.alt}/>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}