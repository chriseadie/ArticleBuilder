import React from 'react';
import { CarouselWithControls } from '../../Parts/Carousel/CarouselWithControls';
import { IPart } from '../../Parts/IParts';
import { IRenderComponent } from '../IRenderComponents';


export default function CarouselWithControlsPart({part}:IRenderComponent){
    const component = part as CarouselWithControls;
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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