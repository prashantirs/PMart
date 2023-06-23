import { toast } from "react-hot-toast";
import "./ListElement.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocalData } from "../../helpers/utils";
import { addToCart, addToFavorite, removeFromFavorite, setLiked } from "../../Redux/Actions/product";
import { useState } from "react";

const ListElement = ({ image, name, productObj, liked }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FirstLetterCapital = name.charAt(0).toUpperCase();
  const changedName = FirstLetterCapital + name.slice(1);
  const EditedName = changedName.slice(0, 25);
  const [isLiked, setIsLiked] = useState(false || liked);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      dispatch(setLiked(productObj.id));
      dispatch(addToFavorite(productObj));
      setLocalData("favourite", productObj);
      toast.success("Added To Favorite");
    } else {
      toast.error("Removed From Favorite");
      dispatch(removeFromFavorite(productObj.id));
    }
  };

  const addToCartHandler = () => {
    if (isAddedToCart) {
      toast.error("Already Added to Cart");
      return;
    }
    setLocalData("cart", productObj);
    dispatch(addToCart(productObj));
    setIsAddedToCart(true);
    toast.success("Added to Cart");
  };

  const productCardHandler = () => {
    navigate(`/product/${productObj.id}`);
  };

  return (
    <div className="ListElement-container">
      <div className="list-image">
        <img
          src={image[0]}
          alt={"Hi"}
          className="list-inside-image"
          onClick={productCardHandler}
        />
      </div>
      <div className="list-description">
        <div className="ProductDescription" onClick={productCardHandler}>
          {/* <h3 className="product-name">{`${EditedName}...`}</h3> */}
          <h3 className="product-name">{`${name}`}</h3>
          <p className="product-price">{productObj.price}</p>
          <p>{productObj.discription}</p>
        </div>
        <div className="product-cart-icon" onClick={addToCartHandler}>
          <button className="add-to-cart" disabled={isAddedToCart}>
            <ShoppingCartIcon fontSize="medium" style={{ color: "white" }} />
          </button>
          
            <div className="heart" onClick={handleLike}>
                {isLiked ? (
                <AiFillHeart style={{ color: "red" }} />
                ) : (
                <AiOutlineHeart style={{ color: "grey" }} />
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListElement;
