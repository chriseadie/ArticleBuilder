import React from 'react';
import { Accordion } from '../../Parts/Accordion/Accordion';
import { IRenderComponent } from '../IRenderComponents';

export default function AccordionPart({part}:IRenderComponent){
    const component = part as Accordion;

    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {component.content.map((item,index) => {
                return (
                <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`flush-heading-${index}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`flush-collapse-${index}`} aria-expanded="false" aria-controls={`flush-collapse-${index}`}>
                            {item.title}
                        </button>
                    </h2>
                    <div id={`flush-collapse-${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${index}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {item.description}
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}