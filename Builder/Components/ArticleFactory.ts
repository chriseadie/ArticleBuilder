
export class ArticleFactory {
    private readonly parts: {
        [key:string]:any
    }

    constructor(){
        this.parts = {

        }
    }

    public addPart(key:string,part:any){
        this.parts[key] = part;
        return this
    }

    public renderPart(key:string,partData:any){
        try{
            const articlePart = this.parts[key];
            return articlePart.render();
        }catch(err){
            return null;
        }
    }
}