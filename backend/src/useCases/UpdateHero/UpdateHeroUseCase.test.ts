import { HeroMockRepo } from "../../repositories/mocks/HeroRepo.mock"
import { validate } from "uuid"
import { UpdateHeroUseCase } from "./UpdateHeroUseCase";

test('Deve resolver sem problemas', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const updateHeroUseCase:UpdateHeroUseCase = new UpdateHeroUseCase(heroMockRepo);

    

    await expect(updateHeroUseCase.execute({
        id: '0',
        name: 'mockingBirb',
        heroPower: 90,
        lat: 33,
        lng: 33
    })).resolves.not.toThrow();
})  

test('Deve retornar que não havia este nome', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const updateHeroUseCase:UpdateHeroUseCase = new UpdateHeroUseCase(heroMockRepo);
    
    await expect(updateHeroUseCase.execute({
        id: '9',
        name: 'mockingBirb',
        heroPower: 90,
        lat: 33,
        lng: 33
    })).rejects.toThrowError('Hero doesn\'t exists.')
})