O sistema foi construído procurando se atentar aos princípios SOLID.

Cada caso de uso do sistema foi separado em um package dentro de src este package possui uma classe do caso de uso uma classe controladora e possivelmente um DTO.

Cada caso de uso foi baseado em uma interface localizada no package repositories e a implementação de cada interface está localizada no package implementations.

Cada caso de uso foi implementado através do index.ts que acompanha o seu devido caso de uso.

## Criação de heróis

Não poderão ser criados heróis com nomes iguais.

Heróis se autenticarão através do UUID gerado e fornecido durante a sua criação.

## Deployment de heróis

O ranque do heróis será tratado pelo backend como uma variável numérica onde os ranques [S,A,B,C] serão [90,15,4,1] isso foi feito para facilitar o tratamento do deploy de multiplos heróis de baixo nível em uma ocorrência perigosa. Vale lembrar que esta mudança será apenas no backend e não deve ter influencia no front.

Da mesma forma os níveis de perigo serão tratados como uma varíavel numérica onde os níveis [God,Dragon,Tiger,Wolf] serão [60,12,3,1] os níveis de heróis e perigo diferem para dar pesos diferentes para os heróis de ranques diferentes.

Foi colocado também como restrição o fato de um herói de ranque mais alto não poder pegar trabalho de rank mais baixo, por exemplo um herói S se reserva a enfrentar apenas ameaças God.

A escolha de heróis a ser designado a uma ocorrência é dada da seguinte forma.
Heróis dos ranques adequados são selecionados e ordenados pela sua distancia da ocorrência.
Os heróis então são reordenados por ranque garantindo que o heróis de ranque mais alto que esteja mais proximo da ocorrência seja chamado primeiro.

Ao ser designado um herói será movido para a localização da ocorrência.

Ao ser concluída uma ocorrência será movida para a tabela secundária complete_occurrences e será registrado que herói completou através da tabela intermediária log_occurrences.
