import { IDeployRepo } from "../IDeployRepo";
import { Occurrence } from "../../entities/Occurrence";
import { Hero } from "../../entities/Hero";

export class DeployHeroMockRepo implements IDeployRepo{
    private occurrences:Occurrence[] = [
        {
            id: '0',
            monsterName: 'mockingBirb',
            dangerLevel: 'God',
            lat: 33,
            lng: 33
        },
        {
            id: '1',
            monsterName: 'mockingJay',
            dangerLevel: 'Tiger',
            lat: 33,
            lng: 33
        }
    ];

    private heroes:Hero[] = [
        {
            id: '0',
            name: 'mockingBirb',
            heroPower: 90,
            lat: 33,
            lng: 33
        },
        {
            id: '1',
            name: 'mockingJay',
            heroPower: 15,
            lat: 33,
            lng: 33
        }
    ];

    async getOccurrence(): Promise<Occurrence[]> {
            return this.occurrences;
    }

    async getHeroes(heroMaxPower: number, dangerLevelPower: number, occurrence: Occurrence): Promise<string[]> {
        //getHero by power

        let heroes:Hero[] = this.heroes.sort((a , b) => a.heroPower - b.heroPower)

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

        return assignedHeroes;
    }

    async deploy(occurrence: Occurrence, heroIds: string[]): Promise<void> {
        
    }
}