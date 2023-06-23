import FilterSection from '../ProductPageComponents/FilterSection'
import ProductList from '../ProductPageComponents/ProductList'
import Sort from '../ProductPageComponents/Sort'
import './Products.css'

const Products = () => {
  return (
    <div className='Products-Wrapper'>
        <div className="grid-filter-column">
            <div>
                <FilterSection/>
            </div>
            <div className='product-view-sort'>
                <div className='sort-filter'>
                    <Sort/>
                </div>
                <div className='main-product'>
                    <ProductList/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products