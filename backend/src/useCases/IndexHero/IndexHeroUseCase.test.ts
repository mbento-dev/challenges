import { HeroMockRepo } from "../../repositories/mocks/HeroRepo.mock";
import { IndexHeroUseCase } from "./IndexHeroUseCase";
import { Hero } from "../../entities/Hero";

test('Deve retornar a lista falsa de heróis', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const indexHeroUseCase:IndexHeroUseCase = new IndexHeroUseCase(heroMockRepo);

    const heroes:Hero[] = await indexHeroUseCase.execute()
    const expectedHeroes:Hero[] = [
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

    expect(heroes).toMatchObject(expectedHeroes);
})  

test('Deve retornar o herói mockingBirb', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const indexHeroUseCase:IndexHeroUseCase = new IndexHeroUseCase(heroMockRepo);

    const heroes:Hero[] = await indexHeroUseCase.execute('0')
    const expectedHeroes:Hero[] = [
        {
            id: '0',
            name: 'mockingBirb',
            heroPower: 90,
            lat: 33,
            lng: 33
        }
    ];

    expect(heroes).toMatchObject(expectedHeroes);
})  

test('Deve retornar a lista falsa de heróis', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const indexHeroUseCase:IndexHeroUseCase = new IndexHeroUseCase(heroMockRepo);

    const heroes:Hero[] = await indexHeroUseCase.execute(null, 'mockingBirb')
    const expectedHeroes:Hero[] = [
        {
            id: '0',
            name: 'mockingBirb',
            heroPower: 90,
            lat: 33,
            lng: 33
        }
    ];

    expect(heroes).toMatchObject(expectedHeroes);
})    

test('Deve retornar a lista falsa de heróis', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const indexHeroUseCase:IndexHeroUseCase = new IndexHeroUseCase(heroMockRepo);

    const heroes:Hero[] = await indexHeroUseCase.execute(null, null, 90)
    const expectedHeroes:Hero[] = [
        {
            id: '0',
            name: 'mockingBirb',
            heroPower: 90,
            lat: 33,
            lng: 33
        }
    ];

    expect(heroes).toMatchObject(expectedHeroes);
})  