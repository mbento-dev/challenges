import { IDeployRepo } from "../IDeployRepo";
import { Occurrence } from "../../entities/Occurrence";
import { connection } from "../../database/connection";
import { Hero } from "../../entities/Hero";

export class DeployHeroRepo implements IDeployRepo{
    async getOccurrence(): Promise<Occurrence> {
        let occurrence = (await connection('ongoing_occurrences')
            .select('*').from<Occurrence>('ongoing_occurrences')
            .limit(1))
        return occurrence[0];
    }

    async getHeroes(heroMaxPower: number, dangerLevelPower: number): Promise<string[]> {
        //getHero by power
        let heroes:Hero[] = (await connection('heroes')
            .select('*')
            .where('hero_power', heroMaxPower))

        //let heroes = (getHeroByMaxPower(8001)).sort((a , b) => a.heroPower - b.heroPower)
        
        let assignedHeroes:string[]

        // checar se tem heróis na lista
        // remover heróis até cumprir o heroPowerNecessary
        while(heroes && dangerLevelPower > 0) {
            let tempHero = heroes.pop()
            dangerLevelPower -= tempHero.heroPower
            assignedHeroes.push(tempHero.id)
        }

        assignedHeroes.push(dangerLevelPower.toString())

        return assignedHeroes;
    }

    async deploy(occurrence: Occurrence, heroIds: string[]): Promise<void> {
        await connection('complete_occurrences').insert(
            {
                id: occurrence.id, 
                danger_level: occurrence.dangerLevel, 
                monster_name: occurrence.monsterName,
                lat: occurrence.lat,
                lng: occurrence.lng,
            })
        heroIds.forEach(async hero => {
            await connection('log_occurrances').insert({
                hero_id: hero,
                occurrence_id: occurrence.id,
            })
        });
    }
}