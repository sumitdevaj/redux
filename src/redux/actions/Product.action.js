import { SET_PRODUCT } from "../constants/Product.constent"

export const setProduct = (products)=>({
    type:SET_PRODUCT,
    payload:products
})