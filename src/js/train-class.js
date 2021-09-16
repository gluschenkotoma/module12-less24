export default class FetchObject {
  constructor(BASE_URL, endPoints, options) {
    //   свойства класса
    this.BASE_URL = BASE_URL //вносить при создании через параметр
    this.endPoints = endPoints //вносить при создании через параметр
    this.options = options //вносить при создании через параметр
    this._query = ''
    this._page = 1
    this.perPage = 5
  }
  // пересвойства недометоды
  get query() {
    return this._query //возвращает текущее значение
  }
  set query(value) {
    return (this._query = value) //возвращает перезаписаное значение
  }
  get page() {
    return this._page //возвращает текущее значение
  }
  set page(value) {
    return (this._page = value) //возвращает перезаписаное значение
  }
  // методы класса
  // formRef, listRef параметры, что бы видно было что мы ждем ссылку на форму и на лист при вызове в экземпляре класса
  getFetchBySubmit(formRef, listRef) {
    //параметр form - ссылка на форму которую дадут при вызове
    formRef.addEventListener('submit', e => {
      e.preventDefault()
      console.log(e.target.elements.value) //значение инпута
      this._query = e.target.elements.input.value // сеттер,устанавливает новое значение, который запишется в свойство класа
      let params = `?query=${this._query}&per_page=${this.perPage}&page=${this._page}` //квери параметрыю (меняющиеся),пары с documentation, через &
      let url = this.BASE_URL + this.endPoints + params

      fetch(url, this.options) //this.options - передается при вызове через параметр
        .then(response => {
          console.log('Ответ', response)
          return response.json()
        })
        .then(data => {
          console.log(data.page, data.photos)
          return data.photos
        })
        .then(array => {
          console.log(array)
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
          listRef.insertAdjacentHTML('beforeend', result)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          formRef.reset //очистка формы
        })
    })
  }
  getFetchByClick() {
    loadMoreBtn.addEventListener('click', () => {
      page += 1

      // page - пакет с количества ответов, сколько пакетов нужно вернуть
      // per_page - записывается в params, ко-во ответов(фото), max:80;
      let params = `?query=${this._query}&per_page=${this.perPage}&page=${this._page}` //квери параметрыю (меняющиеся),пары с documentation, через &
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
  }
}
