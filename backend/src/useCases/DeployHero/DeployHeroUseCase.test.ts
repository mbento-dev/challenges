import { DeployHeroUseCase } from "./DeployHeroUseCase";
import { DeployHeroMockRepo } from "../../repositories/mocks/DeployHeroRepo.mock";

test('Deve conseguir dar deploy em um herói', async () => {
    const deployHeroMockRepo:DeployHeroMockRepo = new DeployHeroMockRepo();

    const deleteHeroUseCase = new DeployHeroUseCase(deployHeroMockRepo);

    await expect(deleteHeroUseCase.execute()).resolves.not.toThrow()
})