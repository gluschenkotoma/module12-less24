import refs from './refs'
const { loadMoreBtn, list, form } = refs

// пагинация - отрисовка какого то ко-ва изоб-й
// создание options
const API_KEY = '563492ad6f91700001000001c5f4390118fe4b9888de9886a26b26a9' //ключ api сдоку-ции pexels
const options = {
  headers: {
    Authorization: API_KEY,
  },
}

// создание адреса URL
const BASE_URL = `https://api.pexels.com/v1/` //базовый URL
let query = `frower` //hardcode
let endpoints = `search` //точка входа
let page = 1
// let params = `?query=${query}&per_page=5&page=${page}` //квери параметрыю (меняющиеся),пары с documentation, через &
// let url = BASE_URL + endpoints + params

// ===========================================================================
//ввести в инпут значение и получить ответ на запрос
form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(e.target.elements.input) //ссылка на инпут
  console.log(e.target.elements.value) //значение инпута
  query = e.target.elements.value
  let params = `?query=${query}&per_page=5&page=${page}` //квери параметрыю (меняющиеся),пары с documentation, через &
  let url = BASE_URL + endpoints + params

  fetch(url, options)
    .then(response => {
      //   console.log('Ответ', response)
      return response.json()
    })
    .then(data => {
      console.log(data.page, data.photos)
      return data.photos
    })
    .then(array => {
      //   console.log(array)
      let result = array
        .map(elem => {
          console.log(elem)
          const {
            photographer,
            src: { original, tiny },
          } = elem
          return `<li>
    <img src="${tiny}" data-src="${original}" alt="${photographer}" />
  </li>`
        })
        .join('')
      //   console.log(result)//отрисовка массива
      list.insertAdjacentHTML('beforeend', result)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      form.reset //очистка формы
    })
})
// =============================================================================
//изменить значение page при нажатии клика,после изменения page
// передаem в переменную с параметрами,
//  а параметры передавать в запросс
loadMoreBtn.addEventListener('click', () => {
  page += 1

  // page - пакет с количества ответов, сколько пакетов нужно вернуть
  // per_page - записывается в params, ко-во ответов(фото), max:80;
  let params = `?query=${query}&per_page=5&page=${page}` //квери параметрыю (меняющиеся),пары с documentation, через &
  let url = BASE_URL + endpoints + params

  //fetch запрос возвращает промис, и что бы его получить, доб-м метод then,
  // в then - колбек с параметром response c возвратом обьекта в чит.виде response.json(),
  // то что возвращает первый then, получает, принимает через параметр колбека 2й then

  fetch(url, options)
    .then(response => {
      console.log('Ответ', response)
      return response.json()
    })
    .then(data => {
      console.log(data.page, data.photos)
      return data.photos
    })
    .then(array => {
      let result = array
        .map(elem => {
          console.log(elem)
          const {
            photographer,
            src: { original, tiny },
          } = elem
          return `<li>
    <img src="${tiny}" data-src="${original}" alt="${photographer}" />
  </li>`
        })
        .join('')
      //   console.log(result)
      list.insertAdjacentHTML('beforeend', result)
    })
})
