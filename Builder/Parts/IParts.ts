
export interface IPart {
    partType:string;
    renderSlideOut():JSX.Element;
}

export enum PartType {
    Carousel = "Carousel",
    CarouselWithControls = "CarouselWithControls",
    CarouselWithIndicator = "CarouselWithIndicator"
}