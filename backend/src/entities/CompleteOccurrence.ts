export class CompleteOccurrence{
    public id: string;
    public name: string[];
    public monsterName: string;
    public dangerLevel: string;
    public lat: number;
    public lng: number;
    

    constructor(props: CompleteOccurrence){
        Object.assign(this, props);
    }
}