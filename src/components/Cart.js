import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
 class Cart extends React.Component {

    //to remove the item completely
    handleRemove = (name)=>{
        this.props.removeItem(name);
    }
    //to add the quantity
    handleAddQuantity = (name)=>{
        this.props.addQuantity(name);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (name)=>{
        this.props.subtractQuantity(name);
    }
    render(){
        let addedItems = this.props.items.length;
        let items = this.props.items
        console.log(addedItems+"UANITY")
        console.log(items)
        return(
            (addedItems>0?
            <div className="container">
                {items.map((item) =>(
                    <li className="collection-item avatar" key={item.name}>
                    <div className="item-img"> 
                        <img src={item.image} alt={item.desc} className=""/>
                    </div>
                
                    <div className="item-desc">
                        <span className="title">{item.desc}</span>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p> 
                        <p>
                            <b>Quantity: {item.quantity}</b> 
                        </p>
                        <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                        <button className="Remove">Remove</button>
                    </div>
                    
                </li>
                ))}
            </div>:
            <p>Nothing.</p>
        ))
    }
}



       /* <Fragment>
            <div>
           <ul>
           list={this.props.basketItems}
           </ul>
                
            </div>
        </Fragment>
        
    )
}*/
    const mapStateToProps = (state) => {
        return{
            items: state.basketState.products
           // items: state.addedItems
        }
        //basketProps : state.basketState.products
    }
   /* const mapDispatchToProps(dispatch) =>{
        return{
            ...
        }
    } */

    export default connect (mapStateToProps) (Cart);




