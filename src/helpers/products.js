import products from '../API/products'

export const getProductByID = (id) => {
    if(!id) return null
    return products.find(product => product.id === id)
}
