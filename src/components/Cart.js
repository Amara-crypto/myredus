import React, {Fragment} from 'react';
import {connect} from 'react-redux';
 class Cart extends React.Component {

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
                        <img src={item.img} alt={item.img} className=""/>
                    </div>
                
                    <div className="item-desc">
                        <span className="title">{item.title}</span>
                        <p>{item.desc}</p>
                        <p><b>Price: {item.price}$</b></p> 
                        <p>
                            <b>Quantity: {item.quantity}</b> 
                        </p>
                      
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




