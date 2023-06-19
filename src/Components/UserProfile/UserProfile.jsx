import { useNavigate } from 'react-router-dom';
import { logout } from '../../Firebase/firebase';
import './UserProfile.css'
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from '../../Redux/Actions/product';

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const userLoggedIn = Object.keys(user).length;

  const logoutHandler = () => {
    logout();
    dispatch(setLogout());
  };
  return (
    <>
      {userLoggedIn ? (
        <div className="user-profile">
            <img src={user.photoURL} alt="user" className="user-profile__img" />
            <div className="user-profile__name">{user.displayName}</div>
            <div className="user-profile__email">{user.email}</div>
            <button className="login-button"  onClick={logoutHandler}>Logout</button>
        </div>
      ) : (
        <div className="user-profile">Login First</div>
      )}
    </>
  );
};

export default UserProfile;
