import React, {Component} from 'react';
import Axios from 'axios';

class PokemonCard extends Component{
    state = { number: 0 }

    fecthPokemonDetail = () => {
        if(this.state.data) return;
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.number}/`).then(
            response =>{
                console.log(response);
            }
        );
    }

    render(){
        return(
            <div className="col s12 m6">
                <div className='card grey lighten-4 hoverable'>
                    {this.props.pokemon}
                    <div className='card-image waves-effect'>
                       <img src={
                           `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.number}.png`
                       } 
                       alt="pokeimage"></img>
                    </div>
                    <div className="card content">

                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard;