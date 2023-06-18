import './ProductCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSelectedProduct, addToCart, removeSelectedProduct } from '../../Redux/Actions/product';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({image,name,productObj}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FirstLetterCapital = name.charAt(0).toUpperCase();
  const changedName = FirstLetterCapital + name.slice(1);
  const EditedName = changedName.slice(0,25);

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked)
    if(!isLiked){
      toast.success("Added To Favorite");
    }else{
      toast.error("Removed From Favorite");
    }
  };
  
  const addToCartHandler = () => {
    if(isAddedToCart){
      toast.error("Already Added to Cart");
      return;
    }
    dispatch(addToCart(productObj));
    setIsAddedToCart(true);
    toast.success("Added to Cart");
  }
  
  const productCardHandler = () =>{
    navigate(`/product/${productObj.id}`)
  }



  return (
    <div className='ProductCard'>
            <div className='heart' onClick={handleLike}>
              {isLiked ? <AiFillHeart style={{color:"red"}}/> : <AiOutlineHeart  style={{color:"grey"}}/>}
             </div>
        <div className='product-image' >
            <img src={image[0]} alt={"Hi"} className='image'  onClick={productCardHandler}/>
        </div>
        <div className="description" >
            <div className="ProductDescription"  onClick={productCardHandler}>
                <h3 className='product-name'>{`${EditedName}...`}</h3>
                <p className='product-price'>{productObj.price}</p>
            </div>
            <div className="product-cart-icon" onClick={addToCartHandler}>
                <button className='add-to-cart' disabled={isAddedToCart}>
                  <ShoppingCartIcon fontSize='medium' style={{color:"white"}}/>
                </button>
            </div>
        </div>    
    </div>
  )
}

export default ProductCard