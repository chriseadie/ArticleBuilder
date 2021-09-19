import { Fragment } from "react";
import { Figures } from "../../Parts/Image/Figures";
import { IRenderComponent } from "../IRenderComponents";


export default function FiguresPart({part}:IRenderComponent){
    const component = part as Figures;

    if(component.link.length > 0){
        return (
            <a href={component.link}>
                <figure className="figure">
                    <img src={component.image} className="figure-img img-fluid rounded" alt={component.altText}/>
                    <figcaption className="figure-caption">{component.caption}</figcaption>
                </figure>
            </a>
        )
    }
    
    return (
        <figure className="figure">
            <img src={component.image} className="figure-img img-fluid rounded" alt={component.altText}/>
            <figcaption className="figure-caption">{component.caption}</figcaption>
        </figure>
    )
}