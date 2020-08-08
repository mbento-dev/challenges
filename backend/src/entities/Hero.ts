import { v4 } from 'uuid'

export class Hero{
    public readonly id: string;

    public name: string;
    public heroPower: number;
    public lat: number;
    public lng: number;

    constructor(props: Omit<Hero, 'id'>, id?: string){
        Object.assign(this, props);

        if(!id) {
            this.id = v4();
        }
    }
}