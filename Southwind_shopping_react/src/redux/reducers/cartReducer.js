import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"
//Sepetteki ürünler için state yönetiminin yapıldığı reducer oluşturuldu.

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c=>c.product.id === action.payload.product.id); //Öncelikle sepete ürünün eklenip eklenmediğine bu şekilde bakabiliriz. Böyle bir ürün varsa bunu 
            //addedItem içerisine ekliyoruz.
            if(addedItem){
                var newState = state.map(cartItem => { //newState ile referans güncellemesi yaparak state güncelliyoruz
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1}) //Burada Object.assign ile eklenen ürün adedi arttırılabilir.
                    }
                    return cartItem;
                })
                return newState;
            }
            else{ //Sepette aynı ürün yoksa sıfırdan eklioruz.
                return [...state,{...action.payload}] //üç nokta kopyalama anlamına gelmektedir.
            }
        
        case actionTypes.REMOVE_FROM_CART:
            const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id );
            return newState2;

            
    
        default:
            return state;
    }
}