import React, {Component} from 'react';
import Axios from 'axios';
import PokemonCard from './pokemonCard';

class PokemonList extends Component{
    
    state={
        pokemons:[{name:'', url:''}]
    };

    componentDidMount(){
        Axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then(response =>{
            this.setState({pokemons: response.data.results});
        });
    }

    renderPokemonList = () => {
        return this.state.pokemons.map((pokemon, index ) => {
            return (
                <PokemonCard 
                    pokemon={pokemon.name} 
                    url={pokemon.url}
                    key = {index+1}
                    number={index+1}
                />
            );
        });
    };

    render(){
        return (
                <div className="container">
                    <div className="row">
                        {this.renderPokemonList()}
                    </div>
                </div>
        );
    };
};

export default PokemonList;