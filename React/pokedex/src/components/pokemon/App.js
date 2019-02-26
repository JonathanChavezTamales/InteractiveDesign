import React, {Component} from 'react'
import Navbar from '../layout/Navbar';
import PokemonCard from './pokemonCard'

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <p>Pokemon List</p>
                <PokemonCard/>
            </div>
        )
    }
}

export default App;