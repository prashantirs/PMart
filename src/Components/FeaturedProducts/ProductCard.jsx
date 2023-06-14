import './ProductCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react';

const ProductCard = ({image,name}) => {
  const FirstLetterCapital = name.charAt(0).toUpperCase();
  const changedName = FirstLetterCapital + name.slice(1);
  const EditedName = changedName.slice(0,25);

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };


  return (
    <div className='ProductCard'>
            <div className='heart' onClick={handleLike}>
              {isLiked ? <AiFillHeart style={{color:"red"}}/> : <AiOutlineHeart  style={{color:"grey"}}/>}
             </div>
        <div className='product-image'>
            <img src={image[0]} alt={"Hi"} className='image'/>
        </div>
        <div className="description">
            <div className="ProductDescription">
                <h3 className='product-name'>{`${EditedName}...`}</h3>
                <p className='product-price'>Rs. 1000</p>
            </div>
            <div className="cart">
                <button className='add-to-cart'>
                  <ShoppingCartIcon fontSize='medium' style={{color:"white"}}/>
                </button>
            </div>
        </div>    
    </div>
  )
}

export default ProductCard