import './EachCartItems.css'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity } from '../../Redux/Actions/product';
import { useEffect, useState } from 'react';

const EachCartItem = ({id,image,name,rating,quantity,price,productObj,oncalculatePrice}) => {
  const cart = useSelector((state) => state.cart);
  const realQuantity = cart.find((item) => item.id === id).quantity;

  const dispatch = useDispatch();
  const deleteHandler = () =>{
    dispatch({type:"REMOVE_FROM_CART",payload:productObj})
  }
  const increaceQuantityHandler = () =>{
    dispatch(increaseQuantity(id));
    oncalculatePrice()
  }
  const decreaseQuantityHandler = () =>{
    dispatch(decreaseQuantity(id))
    oncalculatePrice()
  }
  useEffect(() => {
    if(realQuantity === 0){
      dispatch({type:"REMOVE_FROM_CART",payload:productObj})
    }
  }, [realQuantity])
  return (
    <div className='cart-box'>
        <div className="cart-box-left">
            <div className="cart-image">
                 <img src={image[0]} alt="mobile" className='cart-box-left-image'/>
            </div>
            <div className="cart-product-desc">
                <div className="cart-product-name">{name}</div>
                <div className="cart-product-rating">Rating : {rating}</div>
            </div>
        </div>
        <div className="cart-box-right">
            <div className="quantity">
              <div className="add-quantity" onClick={increaceQuantityHandler}>+</div>
              <div className="quantity-number">{quantity}</div>
              <div className="sub-quantity" onClick={decreaseQuantityHandler}>-</div>
            </div>
            <div className="price">{price}</div>
        </div>
      <ClearIcon style={{position:"relative",bottom:"1.5rem",left:"1.5rem",cursor:"pointer"}} onClick={deleteHandler}/>
    </div>
  )
}

export default EachCartItem