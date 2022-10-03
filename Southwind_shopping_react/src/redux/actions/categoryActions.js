//Bizim ilk etaptaki amacımız kategorileri listelemek.


import * as actionTypes from "./actionTypes"

export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY, payload:category} 
}

export function getCategoriesSuccess(categories){ //reducer a gönderebilmek için bu yapıyı oluşturuyoruz.
    return {type: actionTypes.GET_CATEGORIES_SUCCESS, payload:categories}
}

export function getCategories(){ 
    //kategorileri getirmesi için bir fonksiyon oluşturuyoruz.
    //Kategorileri listelemek için biz veri tabanına bağlanacağız. Bu kısımda karşımıza redux-thunk adında bir yapı çıkıyor.
    //paket kurulumu için --> "npm install redux-thunk"
    return function(dispatch){//getCategories bize bir fonksiyon döndürecek döndüreceği fonksiyonu buraya yazıyoruz.
        let url = "http://localhost:3000/categories" //api url i burada veriyoruz.
        return fetch(url).then(response => response.json()) //api den verileri almak için fetch içerisinde url geçip .then ile dönen response alınıyor.
        .then(result => dispatch(getCategoriesSuccess(result)))//Bir üstteki then içerisinden gelen response result olarak yeni bir then içerisinde alınabilir.
        //Daha sonra dispatch ile result ı getCategoriesSuccess diyerek bunun içerisine geçiyoruz.

    }

}