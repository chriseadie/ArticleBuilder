
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
    List = "List"
}
