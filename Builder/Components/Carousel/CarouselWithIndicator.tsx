import React from 'react';
import { CarouselWithIndicator } from '../../Parts/Carousel/CarouselWithIndicator';


export default function CarouselWithIndicatorPart(part:CarouselWithIndicator){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {part.images.map((_,index) => {
                    if(index === 0){
                        return (
                            <button type="button" data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                        )
                    }
                    return (
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index +1}`}></button>
                    )
                })}
            </div>
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