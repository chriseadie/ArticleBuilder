import React from 'react';
import { CarouselWithIndicator } from '../../Parts/Carousel/CarouselWithIndicator';
import { IRenderComponent } from '../IRenderComponents';


export default function CarouselWithIndicatorPart({part}:IRenderComponent){
    const component = part as CarouselWithIndicator;
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {component.images.map((_,index) => {
                    if(index === 0){
                        return (
                            <button key={index}type="button" data-bs-target="#carouselExampleIndicators" 
                                data-bs-slide-to={index} className="active" aria-current="true" aria-label={`Slide ${index + 1}`}></button>
                        )
                    }
                    return (
                        <button key={index}type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`Slide ${index +1}`}></button>
                    )
                })}
            </div>
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
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}