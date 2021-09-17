import refs from './refs'
import FetchObject from './train-class'
const { loadMoreBtn, list, form } = refs

const BASE_URL = `https://api.pexels.com/v1/` //базовый URL
let endPoints = `search` //точка входа
const API_KEY = '563492ad6f91700001000001c5f4390118fe4b9888de9886a26b26a9' //ключ api сдоку-ции pexels
const options = {
  headers: {
    Authorization: API_KEY,
  },
}

// cсоздание екземпляра класса
const myFetch = new FetchObject(BASE_URL, endPoints, options)
console.log(myFetch)
myFetch.getFetchBySubmit(form, list) //сылка на форму исписок, в классе это параметры formRef, listRef
myFetch.getFetchByClick(loadMoreBtn, list) //в классе btnRef/ listRef
