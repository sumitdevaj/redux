import { GET_PRODUCT, SET_PRODUCT } from "../constants/Product.constent";


const initialState = {
}

const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case SET_PRODUCT:
            return {products:[action.payload]};
        default:
            return state
    }
}

export default ProductReducer