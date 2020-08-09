import { CreateHeroUseCase } from "./CreateHeroUseCase"
import { HeroMockRepo } from "../../repositories/mocks/HeroRepo.mock"
import { validate } from "uuid"

test('Deve retornar true ao inserir', async () => {
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


test('Deve retornar erro contendo hero na mensagem', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const createHeroUseCase:CreateHeroUseCase = new CreateHeroUseCase(heroMockRepo);

    async function createSame(){
        await createHeroUseCase.execute({
            name: 'sadasd',
            heroPower: 90,
            lat: 33,
            lng: 33
        })
        await createHeroUseCase.execute({
            name: 'sadasd',
            heroPower: 90,
            lat: 33,
            lng: 33
        })
    }

    await expect(createSame()).rejects.toThrowError("Hero already exists.")
})