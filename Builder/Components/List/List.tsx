import React from 'react';
import { List } from '../../Parts/List/List';
import { IRenderComponent } from '../IRenderComponents';

export default function ListPart({part}:IRenderComponent){
    const component = part as List;

    if(component.showNumbers){
        return (
            <ol className="list-group list-group-flush">
                {component.content.map((listItem,index) => (
                    <li key={index} className="list-group-item">{listItem}</li>
                ))}
            </ol>
        )
    }

    return (
        <ul className="list-group list-group-flush list-group-numbered">
            {component.content.map((listItem,index) => (
                <li key={index} className="list-group-item">{listItem}</li>
            ))}
        </ul>
    )
}