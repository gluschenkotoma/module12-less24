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
    return (this._page += value) //возвращает перезаписаное значение
  }
  // методы класса
  // formRef, listRef параметры, что бы видно было что мы ждем ссылку на форму и на лист при вызове в экземпляре класса

  //  фу-я генерит разметку
  generateMarkup(array) {
    return array
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
  }

  // фу-я отправки запроса
  getFetch(listRef) {
    let params = `?query=${this._query}&per_page=${this.perPage}&page=${this._page}` //формировка параметров,квери параметрыю (меняющиеся),пары с documentation, через &
    let url = this.BASE_URL + this.endPoints + params //обьединяет в общий URL
    fetch(url, this.options) //this.options - передается при вызове через параметр
      .then(response => response.json())
      .then(data => data.photos)
      .then(array => {
        let result = this.generateMarkup(array) //вызов функции которая генерит разметку
        listRef.insertAdjacentHTML('beforeend', result) //встраивание сгенерированой разметки
      })
      .catch(error => {
        console.log(error)
      })
    //   .finally(() => formRef.reset()) //очистка формы
  }

  getFetchBySubmit(formRef, listRef) {
    //параметр form - ссылка на форму которую дадут при вызове
    formRef.addEventListener('submit', e => {
      e.preventDefault() //осановить дефолт событие
      console.log(e.target.elements.value) //смотрим значение инпута, целевого єлемента
      this.query = e.target.elements.input.value //перезаписать в свойство через сеттер значение инпута,устанавливает новое значение, который запишется в свойство класа
      listRef.innerHTML = '' //почистить список перед самим запросом
      //   проверка на ввод в инпут, если ввода нет, запрос не отправится
      if (this.query) {
        this.getFetch(listRef) //вызов фу-и - отправить новый запрос
      } else {
        e.target.elements.input.disabled = true //дает ввести ввод в инпут 1 раз
        alert(`enter the search value`)
      }
      formRef.reset()
    })
  }
  getFetchByClick(btnRef, listRef) {
    btnRef.addEventListener('click', () => {
      this.page = 1 //идет в сеттер
      this.getFetch(listRef) //вызов фу-и - отправить новый запрос
    })
  }
}

// git add .
// git commit -m "name of commit"
//git push
