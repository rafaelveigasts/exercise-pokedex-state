import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Button from './Components/Button';

class App extends React.Component {
  constructor() {
    super()
    this.nextPoke = this.nextPoke.bind(this);
    this.state = {
      initialClick: 0,
    }
  };

  nextPoke() {
    this.setState( (prev, _props) => ({
     initialClick: prev.initialClick + 1
    }),
    console.log(this))
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} nextPokemon={this.state.initialClick} />
        <Button onClickButton={ this.nextPoke } labelButton='Next Pokemon' />
      </div>
    );
  }
}

export default App;

/*
Resolução: a lógica aqui é que o botão inicia com o estado 0,
esse estado representa o index do objeto pokemon
quando clicado é adicionado 1 ao estado,
e esse número 1 está ligado ao indice do pokemon no objeto.

importar o react, pagina de estilo css
importar o objeto pokemons de data (linha 103 do arquivo data)
importar o componente botão

Dentro do componente app:

alterar a classe contructor com super()
amarrar o this a função nextPoke com o bind
definir o estado inicial da lógica que vai no botão

função nextPoke:
agora com o bind conseguimos usar o this.setState (estado anterior, _parâmetro obrigarótio não usado)
inicialClick definido na linha 12 é 0: +1, como o evento só é disparado no clique, a função só roda depois da ação.

Dentro do render():
o componente pokedex recebe a props pokemons que recebe o objeto inteiro do pokemons
depois recebe outra props chamada nextPokemon que recebe o estado inicial, 
isso significa que ele vai receber o pokemon no indice 0
o componente botão recebe um evento de click e executa a função nextPoke
ao clicado o inicial state vai para 1 e o nextPokemon vai para 1 também assim seguindo para o indice 1 do objeto
*/