import './Offer.css'
import lady from '../../Assets/Offer/lady3.avif'
import { BsArrowRight } from "react-icons/bs";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Offer = () => {
  return (
    <div className='Offer'>
        <div className="offer-image-section">
            <img src={lady} alt={"offerimage"} className="offer-image"/>
        </div>
        <div className="offer-content">
            <div className="offer-content-one">LIMITED OFFER</div>
            <div className="offer-content-two">35% off only this friday and get special gifts</div>
            <div className="offer-content-three">
                 <div style={{paddingTop:"0.4rem",fontSize:"1.1rem"}}>Grab it now</div>
                 <ArrowRightAltIcon fontSize='large'/>
            </div>
        </div>
    </div>
  )
}

export default Offer