import React, {Component} from 'react';

class PokemonCard extends Component{
    state = { number: 0 }

    render(){
        return(
            <div>
                <div className='card grey lighten-4 hoverable'>
                    <div className='card-image waves-effect'>
                        <img src="https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png">
                        
                        </img>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokemonCard;