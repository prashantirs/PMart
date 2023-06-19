import "./Header.css";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


import {  getRedirectResult,GoogleAuthProvider } from "firebase/auth";
import { signInWithGoogle ,auth} from "../../Firebase/firebase";
import { setUser } from "../../Redux/Actions/product";
import { debounce } from "../../helpers/utils";
import { searchProducts } from "../../helpers/products";

import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import product  from "../../API/products";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

//get local starage
const getLocalData = () => {
    let user= localStorage.getItem('user-name');
    if(user){
      return JSON.parse(localStorage.getItem('user-name'));
    }else{
      return "Login";
    }
  }
  
  const Header = () => {  

  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState([]);
  const isFavourite = window.location.pathname === "/favourite"
  const navigate = useNavigate();
  const [name, setName] = useState(getLocalData())
  const [displayName, setDisplayName] = useState(name)
  const cart  = useSelector((state => state.cart));
  const favourite  = useSelector((state => state.favourite));
  const favouriteItems = favourite.length;
  const CartItems = cart.length;

  const [open, setOpen] = useState(false);
  const setUserHelper = (user)=> dispatch(setUser(user))

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseLogin = () => {
    setOpen(false);
    setDisplayName(name)
  };
  
  const handleCloseLogout = () => {
    setOpen(false);
    setName("Login");
    setDisplayName("Login")
    localStorage.setItem('user-name', JSON.stringify("Login"));
  };

  const nameHandler = (e) => {
    setName(e.target.value)
    localStorage.setItem('user-name', JSON.stringify(e.target.value));
    
  }
  const googleLoginHandler = () => {
    signInWithGoogle(setUserHelper);
    } 
  const searchHandler = (e,result) => {
    console.log(e)
    // debounce(()=>setSearchItem(searchProducts(e.target.value)))
  }

  // }

  const handleOnSearch = (e) => {
    debounce(()=>setSearchItem(searchProducts(e.target.value)))
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    window.location = `/product/${item.id}`;
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

    console.log(searchItem)
  return (
    
 
    <div className="header">
      <div className="header-left">
         <h1 className="company-name" onClick={()=>{navigate("/")}}>PMart</h1>
      </div>
      <div className="header-center">
        {/* <div className="menu">Shop</div>
        <div className="menu">New Arrivals</div>
        <div className="menu">Brands</div> */}
        <ReactSearchAutocomplete
          items={product}
          onSearch={searchHandler}
          placeholder="Search for product, brands and more"
          onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            className="search-bar"
        />
      
      </div>
      <div className="header-right">
        <div className="header-right-search">
          {/* <SearchIcon fontSize="large" className="search-icon" />
          <input type="text" placeholder="Search" onChange={searchHandler}/> */}
        


        </div>
        <div className="header-right-icons">
          {isFavourite ? 
            <StyledBadge fontSize={window.innerWidth < 600 ? "small" : "large"} badgeContent={favouriteItems} color="info">
              <FavoriteIcon style={{color:"#d02525"}} onClick={()=>{navigate("/favourite")}} fontSize={window.innerWidth < 600 ? "small" : "large"}/>
            </StyledBadge> :
            <StyledBadge fontSize={window.innerWidth < 600 ? "small" : "large"} badgeContent={favouriteItems} color="error">
              <FavoriteBorderIcon onClick={()=>{navigate("/favourite")}} fontSize={window.innerWidth < 600 ? "small" : "large"}/>
             </StyledBadge>
          }
        
            
            

          <div className="cart" onClick={()=>{navigate("/cart")}}>
            <StyledBadge fontSize={window.innerWidth < 600 ? "small" : "large"} badgeContent={CartItems} color="secondary">
              <ShoppingCartOutlinedIcon fontSize={window.innerWidth < 600 ? "small" : "large"} />
            </StyledBadge>
          </div>
          {/* <div className="login-user" >
            
            <div className="svg-icon">{displayName === "Login" || "" ? <SentimentDissatisfiedIcon className="login-icon" fontSize="large" /> : <InsertEmoticonIcon fontSize="large" />}</div>
            <Button className="dialog-button"onClick={handleClickOpen}>
              <div className="login-user-name">{displayName}</div>
            </Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Name</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="User Name"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={nameHandler}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseLogout}>Logout</Button>
                <Button onClick={handleCloseLogin}>Login</Button>
              </DialogActions>
            </Dialog> */}
            <div className="login-user">
              <button className="login-button" onClick={googleLoginHandler}>Login</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
