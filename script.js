// СЕТКА ЭЛЕМЕНТОВ С ФИЛЬТРОМ
const filterBtns = document.querySelectorAll('.filter__btn');
const gridItems = document.querySelectorAll('.grid__item');

for (const btn of filterBtns) {
  btn.addEventListener('click', function() {
    const filter = this.dataset.filter;
    
    filterBtns.forEach(btn => btn.classList.remove('active'));
 
    this.classList.add('active');

    gridItems.forEach(item => {
      if (filter === 'all') {
        item.classList.remove('hidden');
      } else if (!item.classList.contains(filter)) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  });
}


// ФОРМА и ТАБЛИЦА
const addRecordForm = document.getElementById("add-record-form")
const recordsTableBody = document.querySelector("#records-table tbody")
const company = document.getElementById("company")
const position = document.getElementById("position")

company.addEventListener("change", (event) => {
  position.innerHTML = '<option value="">Выберите должность</option>'
  position.disabled = false

  switch (event.target.value) {
    case 'ООО "Рога и копыта"':
      position.innerHTML += `
        <option value="Программист">Программист</option>
        <option value="Разработчик">Разработчик</option>
        <option value="Менеджер">Менеджер</option>
      `
      break
    case 'ИП "Иванов Иван Иванович"':
      position.innerHTML += `
        <option value="Кассир">Кассир</option>
        <option value="Продавец">Продавец</option>
        <option value="Директор">Директор</option>
      `
      break
    default:
      break
  }
})

// Обработчик отправки формы
addRecordForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const id = document.getElementById("id").value.trim()
  if (!id) {
    alert('Поле "ID" не должно быть пустым')
    return
  }
  const firstName = document.getElementById("first-name").value.trim()
  if (!firstName) {
    alert('Поле "Имя" не должно быть пустым')
    return
  }
  const lastName = document.getElementById("last-name").value.trim()
  if (!lastName) {
    alert('Поле "Фамилия" не должно быть пустым')
    return
  }
  const email = document.getElementById("email").value.trim()
  if (!email) {
    alert('Поле "Email" не должно быть пустым')
    return
  } else if (!/^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})$/i.test(email)) {
    alert('Поле "Email" должно быть заполнено в формате email@domen.ru')
    return
  }
  const company = document.getElementById("company").value.trim()
  if (!company) {
    alert('Поле "Компания" не должно быть пустым')
    return
  }
  const position = document.getElementById("position").value.trim()
  if (!position) {
    alert('Поле "Должность" не должно быть пустым')
    return
  }

  // Создаем новую запись
  const newRow = document.createElement("tr")
  newRow.innerHTML = `
    <td>${id}</td>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${email}</td>
    <td>${company}</td>
    <td>${position}</td>
  `

  // Добавляем новую запись в таблицу
  recordsTableBody.appendChild(newRow)

  // Сбрасываем значения полей формы
  addRecordForm.reset()
  position.disabled = true
  position.innerHTML = '<option value="">Выберите должность</option>'
})
