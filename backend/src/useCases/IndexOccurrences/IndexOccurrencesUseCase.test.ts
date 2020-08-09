import { IndexOccurrencesUseCase } from "./IndexOccurrencesUseCase";
import { OccurrenceMockRepo } from "../../repositories/mocks/OccurrencesRepo.mock"
import { CompleteOccurrence } from "../../entities/CompleteOccurrence";

test('Deve retornar a lista falsa de ocorrências', async () => {
    const occurrenceMockRepo:OccurrenceMockRepo = new OccurrenceMockRepo();

    const indexOccurrenceUseCase:IndexOccurrencesUseCase = new IndexOccurrencesUseCase(occurrenceMockRepo);

    const occurrences:CompleteOccurrence[] = await indexOccurrenceUseCase.execute()
    const expectedOccurrences:CompleteOccurrence[] = [
        {
            id: '0',
            name: ['mockingBirb', 'mockingJay'],
            monsterName: 'mockingBirb',
            dangerLevel: 'God',
            lat: 33,
            lng: 33
        },
        {
            id: '1',
            name: ['mockingBirb', 'mockingJay'],
            monsterName: 'mockingJay',
            dangerLevel: 'Tiger',
            lat: 33,
            lng: 33
        }
    ];

    expect(occurrences).toMatchObject(expectedOccurrences);
})  

test('Deve retornar a lista falsa de ocorrências danger level god', async () => {
    const occurrenceMockRepo:OccurrenceMockRepo = new OccurrenceMockRepo();

    const indexOccurrenceUseCase:IndexOccurrencesUseCase = new IndexOccurrencesUseCase(occurrenceMockRepo);

    const occurrences:CompleteOccurrence[] = await indexOccurrenceUseCase.execute('God')
    const expectedOccurrences:CompleteOccurrence[] = [
        {
            id: '0',
            name: ['mockingBirb', 'mockingJay'],
            monsterName: 'mockingBirb',
            dangerLevel: 'God',
            lat: 33,
            lng: 33
        }
    ];

    expect(occurrences).toMatchObject(expectedOccurrences);
})  