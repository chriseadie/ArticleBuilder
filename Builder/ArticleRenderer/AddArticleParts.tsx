import React from "react";
import { RenderController } from "../Controllers/RenderController";
import { partTypeList } from "../Parts/IParts";

interface IAddArticleParts{
    controller:RenderController
}
export default function AddArticleParts({controller}:IAddArticleParts): JSX.Element{

    return (
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="partHeadingOne">
                <button className="accordion-button text-center" style={{display:"block"}} type="button" data-bs-toggle="collapse" data-bs-target="#partCollapseOne" aria-expanded="true" aria-controls="partCollapseOne">
                    Add Article Part
                </button>
                </h2>
                <div id="partCollapseOne" className="accordion-collapse collapse" aria-labelledby="partHeadingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body mt-0">
                        <div className="row">
                        {partTypeList.map((part,index) => {

                            if(part.type === "button"){
                                return (
                                <div className="col-6 mt-2" key={`${index}-${part.partType}`}>
                                    <button type="button" onClick={() => controller.addNewPart(part.partType)} className="btn btn-outline-secondary w-100">{part.title}</button>
                                </div>
                                )
                            }

                            return (
                                <div className="col-6 mt-2" key={`${index}-${part.partType}`}>
                                    <button className="btn btn-outline-secondary w-100" id={`accordion-${index}-carousel`} 
                                        style={{display:"block"}} type="button" data-bs-toggle="collapse" data-bs-target={`#part-col-${index}`} aria-expanded="true" aria-controls={`part-col-${index}`}>
                                        {part.title}
                                    </button>
                                    <div id={`part-col-${index}`} className="accordion-collapse collapse" aria-labelledby={`part-col-${index}`} data-bs-parent={`#accordion-${index}-carousel`}>
                                        {part.children?.map((item,key) => {
                                            if(item.type === "button"){
                                                return (
                                                    <div className="col-12 mt-2" key={`${key}-${item.partType}`}>
                                                        <button key={`${key}-${item.partType}`} onClick={() => controller.addNewPart(item.partType)} type="button" className="btn btn-outline-secondary w-100">{item.title}</button>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>) 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}