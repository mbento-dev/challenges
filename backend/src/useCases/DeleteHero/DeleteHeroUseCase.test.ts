import { DeleteHeroUseCase } from "./DeleteHeroUseCase";
import { HeroMockRepo } from "../../repositories/mocks/HeroRepo.mock";

test('Deve conseguir deletar um herói', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const deleteHeroUseCase = new DeleteHeroUseCase(heroMockRepo);

    async function deleteMock(){
            await deleteHeroUseCase.execute({id: '0', name: 'mockingBirb'})
    }

    await expect(deleteMock()).resolves.not.toThrow()
})

test('Deve retornar erro de autenticação', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const deleteHeroUseCase = new DeleteHeroUseCase(heroMockRepo);

    async function deleteMock(){
            await deleteHeroUseCase.execute({id: '90', name: 'mockingBirb'})
    }
    
    await expect(deleteMock()).rejects.toThrowError('Invalid Authentication ID.')
})

test('Deve retornar que não havia este nome', async () => {
    const heroMockRepo:HeroMockRepo = new HeroMockRepo();

    const deleteHeroUseCase = new DeleteHeroUseCase(heroMockRepo);

    async function deleteMock(){
            await deleteHeroUseCase.execute({id: '0', name: 'mockingBirber'})
    }
    
    await expect(deleteMock()).rejects.toThrowError('Hero doesn\'t exist.')
})
