import { v4 } from "uuid";

export class Occurrence{
    public readonly id: string;

    public monsterName: string;
    public dangerLevel: string;
    public lat: number;
    public lng: number;
    

    constructor(props: Omit<Occurrence, 'id'>, id?:string){
        //Object.assign(this, props);

        if(!id) {
            this.id = v4();
        }
    }
}