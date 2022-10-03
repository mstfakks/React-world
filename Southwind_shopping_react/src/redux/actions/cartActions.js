import * as actionTypes from "./actionTypes"
//Burada actionTypes içerisinden gelen değişkenlere göre sepet fonksiyonlarını oluşturup bunları obje şeklinde return ediyoruz.


export function addToCart(cartItem){
    return {type:actionTypes.ADD_TO_CART, payload:cartItem}
}

export function removeFromCart(product){
    return {type:actionTypes.REMOVE_FROM_CART, payload:product}
}