import React from 'react'
import { ArticleRenderSwitch } from './ArticleRenderer/ArticleRenderSwitch';
import { Carousel } from './Parts/Carousel/Carousel'
import { CarouselWithControls } from './Parts/Carousel/CarouselWithControls';
import { CarouselWithIndicator } from './Parts/Carousel/CarouselWithIndicator';
import { Textarea } from './Parts/Textarea/Textarea';
import Provider from './Store/provider'

export default function Application(){

    // const part = new CarouselWithIndicator();
    // part.images.push({src:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"})
    // part.images.push({src:"https://images.pexels.com/photos/274131/pexels-photo-274131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})

    const part = new Textarea()
    part.text = "some new awesome text";
    const part2 = new Textarea()
    part2.text = "super awesome inserted text";

    var arr = [part2,part];
    return (
        <Provider>
            {arr.map(pt => ArticleRenderSwitch(pt))}
        </Provider>
    )
}

