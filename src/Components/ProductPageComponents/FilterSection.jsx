import { useDispatch } from 'react-redux'
import './FilterSection.css'
import { setFilterProducts} from '../../Redux/Actions/product'
import products from '../../API/products'
import { useEffect } from 'react'

const mobile = products.filter((product) => product.catogeries=== "Electronics")
const fashion = products.filter((product) => product.catogeries=== "fashion")
const BeautyCosmetics = products.filter((product) => product.catogeries=== "Beauty and Cosmetics")
const Sports = products.filter((product) => product.catogeries=== "Sports")

const FilterSection = () => {
  const dispatch = useDispatch()
  const filterAllHandler = () => {
    dispatch(setFilterProducts(products))
  }
  const filterMobileHandler = () => {
    dispatch(setFilterProducts(mobile))
  }
  const filterSportsHandler = () => {
    dispatch(setFilterProducts(Sports))
  }
  const filterBeautyHandler = () => {
    dispatch(setFilterProducts(BeautyCosmetics))
  }
  useEffect(() => {
    dispatch(setFilterProducts(products))
  }, [])
  return (
    <div className='FilterSection'>
      <div className='filter-section' onClick={filterAllHandler}>All</div>
      <div className='filter-section' onClick={filterMobileHandler}>Mobile</div>
      <div className='filter-section' onClick={filterSportsHandler}>Sports</div>
      <div className='filter-section' onClick={filterBeautyHandler}>Beauty</div>
    </div>
  )
}

export default FilterSection