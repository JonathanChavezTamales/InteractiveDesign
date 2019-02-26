import React from 'react';

//Stateless component
const Navbar = () => {

    return( 
        <div className='navbar-fixed'>
            <nav className='red darken-1'>
                <div className='nav-wrapper'>
                    <span className='brand-logo center'>Pokedex</span>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;