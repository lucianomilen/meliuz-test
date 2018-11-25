# Teste Méliuz Desenvolvedor Front End (Pl. e Sr.)

##Arquitetura
* [React](https://github.com/facebook/react)
* [MobX](https://github.com/mobxjs/mobx)
* [MobX Router](https://github.com/kitze/mobx-router)
* [styled-components](https://github.com/styled-components/styled-components)
* [lodash](https://github.com/lodash/lodash)
* [react-select](https://github.com/JedWatson/react-select)
* [react-modal](https://github.com/reactjs/react-modal)
* [Presentational e Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

### Presentational e Container Components
O padrão utilizado envolve a criação de componentes Containers, onde reside a lógica de comunicação com a store e service.
Os componentes funcionais apresentam somente elementos de interface.

### MobX
O uso de MobX invés de Redux foi por:
1. Familiaridade
2. Redux traz mais complexidade que o necessário. O desenvolvimento com o MobX é mais rápido.

### lodash
O uso do ``lodash`` se deve exclusivamente ao `debounce`, que foi feito para
melhorar a experiência e eficiência da busca de artistas.

### styled-components
Para lidar com JSS a ferramenta mais completa é o styled-components. Dá diversos poderes,
como o uso de `props` nos estilos de forma bem intuitiva. Além disso, organiza melhor o código,
passando a sensação de estar lidando com classes do CSS.

### react-modal
A maneira mais fácil de lidar com `modal` em React. A implementação do 0 gastaria muito tempo.

### react-select
Para o autocomplete funcionar foi mais fácil utilizar esta lib.

## Issues
O sistema funciona perfeitamente. Não houve nenhum problema de execução nos meus testes.

Um detalhe: a descrição conforme mostrada nas imagens de design do sistema **não está disponível** na API do
Discogs. Consegui encontrá-la na Wikipedia, mas fiquei com receio de utilizar dados de outra API.
Para substituir esta informação, coloquei uma tracklist das releases.


O uso de `@decorators` no MobX exige um [rewire](https://github.com/timarney/react-app-rewired) do app, com a
reestruturação do arquivo `config-overrides.js`, conforme explicado neste [link](https://github.com/timarney/react-app-rewired/tree/master/packages/react-app-rewire-mobx). 
## Execução do app
Após baixar o projeto, rodar
 
 ``npm install``
 
 Em seguida,
 
 ``npm run start``
 
 ou
 
 ``yarn start``