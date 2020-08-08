import { IDeployRepo } from "../IDeployRepo";
import { Occurrence } from "../../entities/Occurrence";
import { connection } from "../../database/connection";
import { Hero } from "../../entities/Hero";
import { getDistance } from 'geolib';

export class DeployHeroRepo implements IDeployRepo{
    async getOccurrence(id?:string): Promise<Occurrence[]> {
        if(!id){
            let occurrence = await connection('ongoing_occurrences')
                .select('*').from<Occurrence>('ongoing_occurrences')
            return occurrence;
        } else {
            let occurrence = await connection('ongoing_occurrences')
                .select('*').from<Occurrence>('ongoing_occurrences')
                .where('id', id)
            return occurrence;
        }
    }

    async getHeroes(heroMaxPower: number, dangerLevelPower: number, occurrence: Occurrence): Promise<string[]> {
        //getHero by power

        let heroes:Hero[] = (await connection('heroes')
            .select('*').from<Hero>('heroes')
            .where('heroPower','<=', heroMaxPower +1))
            .sort((a , b) => {
                return(
                    getDistance({lng: a.lng , lat: a.lat} , {lng: occurrence.lng , lat: occurrence.lat})
                    - getDistance({lng: b.lng , lat: b.lat} , {lng: occurrence.lng , lat: occurrence.lat}) 
                ) 
                
            })
            .sort((a , b) => a.heroPower - b.heroPower);

        let assignedHeroes:string[] = [];
        let tempHero:Hero;
        // checar se tem heróis na lista
        // remover heróis até cumprir o heroPowerNecessary
        while(heroes.length > 0 && dangerLevelPower > 0) {
            tempHero = heroes.pop();
            dangerLevelPower -= tempHero.heroPower;
            assignedHeroes.push(tempHero.id);
        }

        assignedHeroes.push(dangerLevelPower.toString());
        console.log(assignedHeroes)

        return assignedHeroes;
    }

    async deploy(occurrence: Occurrence, heroIds: string[]): Promise<void> {
        await connection('complete_occurrences').insert(
            {
                id: occurrence.id, 
                dangerLevel: occurrence.dangerLevel, 
                monsterName: occurrence.monsterName,
                lat: occurrence.lat,
                lng: occurrence.lng,
            })
        heroIds.forEach(async hero => {
            await connection('log_occurrences').insert({
                heroId: hero,
                occurrenceId: occurrence.id,
            })
            await connection('heroes')
                .where('id', heroIds)
                .update({
                    lat: occurrence.lat,
                    lng: occurrence.lng,
                });
        });

        await connection('ongoing_occurrences').where('id', occurrence.id).del()
    }
}