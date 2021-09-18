import React from 'react';
import { Carousel } from '../../Parts/Carousel/Carousel';


export default function CarouselPart(part:Carousel){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {part.images.map(image => (
                    <div className="carousel-item">
                        <img src={image.src} className={`d-block w-100 ${image.class}`} alt={image.alt}/>
                    </div>
                ))}
            </div>
        </div>
    )
}