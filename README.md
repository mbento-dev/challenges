## Instrução de execução

## Backend

O backend tem como base de dados SQLite ja montado em (./backend/src/database/db.sqlite) caso seja necessário remontar o banco exclua este arquivo e rode o seguinte comando no diretório backend.

```sh
npm run migrate:latest
```

Uma seed com alguns heróis prontos foi utilizada. Caso o banco seja desmontado e seja interessante utilizar estes heróis prontos rode o seguinte comando no diretório backend.

```sh
npm run seed
```

Para rodar o backend é necessário executar os seguintes comandos no diretório backend.


```sh
npm install
npm run start
```

## Seed de heróis

[
  {
    "id": "1",
    "name": "Careca da Capa",
    "heroPower": 4,
    "lat": -23.678120573363277,
    "lng": -53.71158383773698
  },
  {
    "id": "2",
    "name": "Tornado de Terror",
    "heroPower": 90,
    "lat": 52.429844295872414,
    "lng": 13.56350255859534
  },
  {
    "id": "3",
    "name": "Nevasca do Inferno",
    "heroPower": 4,
    "lat": -58.64891,
    "lng": -54.94572
  },
  {
    "id": "4",
    "name": "Marco zero",
    "heroPower": 4,
    "lat": -23.458788656702264,
    "lng": -57.41827163629626
  },
  {
    "id": "5",
    "name": "Ciclista Sem Licença",
    "heroPower": 1,
    "lat": 45.843053674656446,
    "lng": 18.859412687837064
  }
]


## Frontend

Para rodar o backend é necessário executar os seguintes comandos no diretório backend.


```sh
npm install
npm run start
```



## Heróis


# Estrutura de dados de um herói

id: UUID gerado durante a criação do herói
name: string/varchar(255) único não nulo.
heroPower: number/integer não nulo
lat: number/float não nulo
lng: number/float não nulo

# Criação de heróis

Não poderão ser criados heróis com nomes iguais.

Heróis se autenticarão através do UUID gerado e fornecido durante a sua criação.

# Listagem de heróis

Heróis poderam ser encontrados a partir dos seus nomes, ids ou heroPowers.

# Remoção de heróis

Para remover um herói é necessário o nome e seu id falhando na ausência de qualquer um dos dois.

# Edição de heróis

Só é possivel editar um herói que se conheça o id, todos os campos podem ser alterados exceto o id.



## Ocorrências


# Estrutura de dados de uma ocorrência

id: UUID gerado durante a criação do herói
dangerLevel: string/varchar(255) não nulo.
monsterName: string/varchar(255) não nulo.
lat: number/float não nulo
lng: number/float não nulo

# Ocorrências em andamento

As ocorrências em andamento são carregadas no banco de dados antes de serem processadas, caso não possam ser concluídas permaneceram separadas até que um herói adequado esteja disponível.

# Ocorrências em andamento

As ocorrências concluídas são conectadas aos heróis que participaram da sua conclusão através de uma tabela intermediária uma vez que a interação das duas tabelas é de muitos pra muitos.

# Estrutura de dados da tabela intermediaria Ocorrencia/Herói

heroId: string/varchar(255)
occurrenceId: string/varchar(255)



## Deployment de heróis


O ranque do heróis será tratado pelo backend como uma variável numérica onde os ranques [S,A,B,C] serão [90,15,4,1] isso foi feito para facilitar o tratamento do deploy de multiplos heróis de baixo nível em uma ocorrência perigosa. Vale lembrar que esta mudança será apenas no backend e não deve ter influencia no front.

Da mesma forma os níveis de perigo serão tratados como uma varíavel numérica onde os níveis [God,Dragon,Tiger,Wolf] serão [60,12,3,1] os níveis de heróis e perigo diferem para dar pesos diferentes para os heróis de ranques diferentes.

Foi colocado também como restrição o fato de um herói de ranque mais alto não poder pegar trabalho de rank mais baixo, por exemplo um herói S se reserva a enfrentar apenas ameaças God.

A escolha de heróis a ser designado a uma ocorrência é dada da seguinte forma.
Heróis dos ranques adequados são selecionados e ordenados pela sua distancia da ocorrência.
Os heróis então são reordenados por ranque garantindo que o heróis de ranque mais alto que esteja mais proximo da ocorrência seja chamado primeiro.

Ao ser designado um herói será movido para a localização da ocorrência.

Ao ser concluída uma ocorrência será movida para a tabela secundária complete_occurrences e será registrado que herói completou através da tabela intermediária log_occurrences.



## MISC


O sistema foi construído procurando se atentar aos princípios SOLID.

Cada caso de uso do sistema foi separado em um package dentro de src este package possui uma classe do caso de uso uma classe controladora e possivelmente um DTO.

Cada caso de uso foi baseado em uma interface localizada no package repositories e a implementação de cada interface está localizada no package implementations.

Cada caso de uso foi implementado através do index.ts que acompanha o seu devido caso de uso.