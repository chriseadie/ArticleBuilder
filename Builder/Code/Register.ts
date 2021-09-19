
export class Register {

    private dependencies:{[key:string]:any};

    constructor(){
        this.dependencies = {};
    }

    public addSingleton(key:string,dependency:any){
        this.dependencies[key] = dependency;
        return this;
    }

    public getDependency(key:string){
        return this.dependencies[key];
    }

}

export default new Register()