import React from 'react';
import {connect} from 'react-redux';
import addBasket from '../actions/addAction';

const items = [{name:'Samsung',price:430, desc:'samsung s10'},
{ name:'Samsung',price:430, desc:'samsung s10'},
{name:'Samsung',price:430, desc:'samsung s10'},
{name:'Samsung',price:430, desc:'samsung s10'},
]

class Home extends React.Component{
    render(){
        return(
            <div>
                {items.map((item) =>(
                    <div> 
                        <img src={item.name} alt={item.name} />
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                    </div>
                ))}
            </div>
        )
    }

}

export default Home;