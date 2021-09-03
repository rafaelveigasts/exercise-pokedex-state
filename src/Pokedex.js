import React from 'react';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
    render() {
    const { nextPokemon } = this.props;
    
        return (
            <div className="pokedex">
                {/* {this.props.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)} */}
                <Pokemon pokemon={this.props.pokemons[nextPokemon]} />
            </div>
        );
    }
}

export default Pokedex;

/*
Resolução:

inicialmente os pokemons apareciam todos na tela, e queremos que apareça um por vez
puxamos o nextPokemon que é o inicialclick, ou seja inicialmente 0 e fazemos ele de props
chamamos o componente Pokemon passando a props pokemon que vai ser o {this.props.pokemons[nextPokemon]} , ou seja, 

this.props = nextpokemon = initialClick = 0
this.props.pokemons = estado inicial do objeto pokemon do arquivo data.js
[nextPokemon] = initialClick ou seja 0;

traduzindo: o componente Pokemon recebe uma props que vai atribuir o initialClick ao objeto pokemon no índice 0

*/