import React from 'react';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getAction';


class Navbar extends React.Component{
    render(){
        return(
            <header>
                <nav>
                    <h2>Shop</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="Cart">Cart</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;