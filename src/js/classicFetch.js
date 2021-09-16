import refs from './refs'
import FetchObject from './functions'
const { loadMoreBtn, list, form } = refs

const BASE_URL = `https://api.pexels.com/v1`
let ednPoint = `/search`
const API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`
const options = {
  headers: {
    Authorization: API_KEY,
  },
}

const myFetch = new FetchObject(BASE_URL, ednPoint, options)
console.log(myFetch)
myFetch.getFetchBySubmit(form, list)
myFetch.getFetchByClick(loadMoreBtn, list)

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   console.log(e.target.elements.input.value)
//   query = e.target.elements.input.value
//   let params = `?query=${query}&per_page=5&page=${page}`
//   let url = BASE_URL + ednPoint + params
//   fetch(url, options)
//     .then(response => {
//       // console.log(response)
//       return response.json()
//     })
//     .then(data => {
//       console.log(data.page, data.photos)
//       return data.photos
//     })
//     .then(array => {
//       //   console.log(array)
//       let result = array
//         .map(elem => {
//           //   console.log(elem) // src.original, src.tiny photographer
//           const {
//             photographer,
//             src: { tiny, original },
//           } = elem
//           return `
//         <li>
//           <img src="${tiny}" data-src="${original}" alt="${photographer}" />
//         </li>
//         `
//         })
//         .join('')
//       //   console.log(result)
//       list.insertAdjacentHTML('beforeend', result)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     .finally(() => form.reset())
// })

// loadMoreBtn.addEventListener('click', () => {
//   page += 1
//   let params = `?query=${query}&per_page=5&page=${page}`
//   let url = BASE_URL + ednPoint + params
//   fetch(url, options)
//     .then(response => {
//       // console.log(response)
//       return response.json()
//     })
//     .then(data => {
//       console.log(data.page, data.photos)
//       return data.photos
//     })
//     .then(array => {
//       let result = array
//         .map(elem => {
//           //   console.log(elem) // src.original, src.tiny photographer
//           const {
//             photographer,
//             src: { tiny, original },
//           } = elem
//           return `
//         <li>
//           <img src="${tiny}" data-src="${original}" alt="${photographer}" />
//         </li>
//         `
//         })
//         .join('')
//       //   console.log(result)
//       list.insertAdjacentHTML('beforeend', result)
//     })
// })
