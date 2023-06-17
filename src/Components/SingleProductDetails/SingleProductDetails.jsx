import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import products from "../../API/products";
import { getProductByID } from "../../helpers/products";
import { checkArraySanity, checkObjectSanity } from "../../helpers/utils";
import './SingleProductDetails.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToCart, decreaseQuantity, increaseQuantity } from "../../Redux/Actions/product";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Alert from '@mui/material/Alert';

const SingleProductDetails = () => {
  const [productInfo, setProductInfo] = useState();
  const [addedToCart, setAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [selected, setSelected] = useState({
    S: true,
    M: false,
    L: false,
  });
  
  const [selectedImage, setSelectedImage] = useState(productInfo?.image[0]);
  const navigate = useNavigate();
  const { productID } = useParams();
  const [quantity, setQuantity] = useState(0);

    

  useEffect(() => {
    const selectedPRoduct = getProductByID(productID);
    if (!checkObjectSanity(selectedPRoduct)) {
      navigate("/");
    }
    setProductInfo(selectedPRoduct);
    setSelectedImage(selectedPRoduct?.image[0]);
  }, [productID]);
  const checkQuantity = () =>{
    const index = cart.findIndex((item)=>item.id === productID);
    if(index === -1){
      setQuantity(0);
    }else{
      setQuantity(cart[index].quantity);
    }
  }

  const increaceQuantityHandler = () =>{
    dispatch(increaseQuantity(productID));
    setQuantity((prev)=>prev+1);
    setAddedToCart(false);
  }
  const decreaseQuantityHandler = () =>{
    if(quantity > 0){
      dispatch(decreaseQuantity(productID))
      setQuantity((prev)=>prev-1);
    }
  }
  const addToCartHandler = () => {
    if(quantity === 0){
      toast.error("Please select quantity");
      return;
    }
    dispatch(addToCart(productInfo));
    setAddedToCart(true);
    toast.success("Added to Cart");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    checkQuantity();
  }, []);

  return (
    <div className="product-details-container">
      <div className="product-details-top">
        <div className="product-details-top-left">
          <div className="image-top-container">
            <img src={selectedImage} alt="" className="image-top"/>
          </div>
          <div className="image-bottom-container">
            <img src={productInfo?.image[0]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[0])}}/>
            <img src={productInfo?.image[1]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[1])}}/>
            <img src={productInfo?.image[2]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[2])}}/>
            <img src={productInfo?.image[3]} alt="" className="image-bottom" onClick={()=>{setSelectedImage(productInfo?.image[3])}}/>
          </div>
        </div>
        <div className="product-details-top-right">
          <div className="single-product-name">{productInfo?.name}</div>
          <div className="single-product-rating">Rating {productInfo?.rating} Star</div>
          <div className="single-product-price">{productInfo?.price}</div>
          <div className="single-product-size">
            <div className="size-top">Available Size</div>
            <div className="size-bottom">
              <div className={`size ${selected.S && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                return {
                  S: true,
                  M: false,
                  L: false,
                }
              })}}>S</div>
              <div className={`size ${selected.M && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                return {
                  S: false,
                  M: true,
                  L: false,
                }
              })}}>M</div>
              <div className={`size ${selected.L && "size-selected"}`} onClick={()=>{setSelected((prev)=>{
                return {
                  S: false,
                  M: false,
                  L: true,
                }
              })}}>L</div>
            </div>
          </div>
          <div className="single-product-quantity">
            <div className="quantity-top">Quantity</div>
            <div className="quantity-bottom">
            {/* <Alert  onClose={() => {}} severity="warning" >Please Select Quantity !</Alert> */}
              <div className="quantity">
                <div className="add-quantity" onClick={increaceQuantityHandler}>+</div>
                <div className="quantity-number">{quantity}</div>
                <div className="sub-quantity" onClick={decreaseQuantityHandler}>-</div>
            </div>
            <div className="product-cart-icon" >
                <button className='add-to-cart cartaddicon' onClick={addToCartHandler} disabled={addedToCart}>
                  Add to Cart
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-bottom">Review</div>
    </div>
  );
};

export default SingleProductDetails;
