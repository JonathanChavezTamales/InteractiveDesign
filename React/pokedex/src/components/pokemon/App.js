import React, {Component} from 'react'
import Navbar from '../layout/Navbar';
import PokemonList from './PokemonList'

class App extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <p>Pokemon List</p>
                <PokemonList/>
            </div>
        )
    }
}

export default App;