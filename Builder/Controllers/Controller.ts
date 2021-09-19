import React from "react"
import { DependencyKey } from "../Code/Interface"
import register from "../Code/Register"

export class Controller {

    private readonly dispatcher:React.Dispatch<any>;
    constructor(){
        this.dispatcher = register.getDependency(DependencyKey.State)
    }

    public dispatch<T>(action:{type:string,data:T}){
        const dispatcher = register.getDependency(DependencyKey.State)
        return dispatcher(action);
    }
    
}