import { CreateHeroUseCase } from "./CreateHeroUseCase"
import { Hero } from "../../entities/Hero"
import { HeroMockRepo } from "../../repositories/mocks/HeroRepo.mock"
import { validate } from "uuid"

test('Deve retornar true ao inserir', async () => {
    let heroes:Hero[] = []

    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const createHeroUseCase:CreateHeroUseCase = new CreateHeroUseCase(heroMockRepo);

    let id:string = await createHeroUseCase.execute({
        name: 'sadasd',
        heroPower: 90,
        lat: 33,
        lng: 33
    })

    expect(validate(id)).toBe(true);
})  


test('whatever', async () => {
    let heroes = []

    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const createHeroUseCase:CreateHeroUseCase = new CreateHeroUseCase(heroMockRepo);

    await createHeroUseCase.execute({
        name: 'sadasd',
        heroPower: 90,
        lat: 33,
        lng: 33
    })

    expect(createHeroUseCase.execute({
        name: 'sadasd',
        heroPower: 90,
        lat: 33,
        lng: 33
    })).toThrow(Error)
})  