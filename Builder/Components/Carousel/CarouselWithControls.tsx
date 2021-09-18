import React from 'react';
import { CarouselWithControls } from '../../Parts/Carousel/CarouselWithControls';


export default function CarouselWithControlsPart(part:CarouselWithControls){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {part.images.map(image => (
                    <div className="carousel-item">
                        <img src={image.src} className={`d-block w-100 ${image.class}`} alt={image.alt}/>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}