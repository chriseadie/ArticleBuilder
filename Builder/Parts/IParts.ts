
export interface IPart {
    partType:string;
    id:string;
    renderSlideOut():JSX.Element;
}

export enum PartType {
    Carousel = "Carousel",
    CarouselWithControls = "CarouselWithControls",
    CarouselWithIndicator = "CarouselWithIndicator",
    CarouselWithCaptions = "CarouselWithCaptions",
    Accordion = "Accordion",
    Textarea = "Textarea",
    List = "List",
    Images = "Images",
    Figures = "Figures",
    Videos = "Videos",
    Table = "Table"
}

export const partTypeList = [
    {
        title:"Accordion",
        partType:PartType.Accordion,
        type:"button"
    },
    {
        title:"Carousel",
        type:"accordion",
        children:[
            {
                title:"Carousel",
                partType:PartType.Carousel,
                type:"button"
            },
            {
                title:"Carousel With Controls",
                partType:PartType.CarouselWithControls,
                type:"button"
            },
            {
                title:"Carousel With Indicator",
                partType:PartType.CarouselWithIndicator,
                type:"button"
            },
            {
                title:"Carousel With Captions",
                partType:PartType.CarouselWithCaptions,
                type:"button"
            }
        ]
    },
    {
        title:"TextArea",
        partType:PartType.Textarea,
        type:"button"
    },
    {
        title:"Images",
        type:"accordion",
        children:[
            {
                title:"Image",
                partType:PartType.Images,
                type:"button"
            },
            {
                title:"Figure",
                partType:PartType.Figures,
                type:"button"
            }
        ]
    },
    {
        title:"Videos",
        partType:PartType.Videos,
        type:"button"
    },
    {
        title:"List",
        partType:PartType.List,
        type:"button"
    },
    {
        title:"Table",
        partType:PartType.Table,
        type:"button"
    }
]