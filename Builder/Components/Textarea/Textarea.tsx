import React from 'react';
import { Textarea } from '../../Parts/Textarea/Textarea';
import { IRenderComponent } from '../IRenderComponents';

export default function TextareaPart({part}:IRenderComponent){
    var component = part as Textarea;

    return (
        <div className="input-group">
            <textarea className="form-control" >
                {component.text}
            </textarea>
        </div>
    )
}