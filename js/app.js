const clickBtn = document.getElementById('click_menu')
const containerHeader = document.querySelector('.header__main')
const btnText = clickBtn.querySelector('.btn-text')

clickBtn.addEventListener('click', () => {
	if (containerHeader.classList.contains('show')) {
		containerHeader.classList.remove('show')
		setTimeout(() => {
			containerHeader.style.display = 'none'
		}, 500)
		btnText.style.transform = 'rotate(0deg)'
	} else {
		containerHeader.style.display = 'block'
		setTimeout(() => {
			containerHeader.classList.add('show')
		}, 10)
		btnText.style.transform = 'rotate(90deg)'
	}
})

const btnObj = document.querySelectorAll('.button-obj')
const textObj = document.querySelectorAll('.text-obj')

btnObj.forEach((button, index) => {
	button.addEventListener('click', () => {
		const text = textObj[index]

		if (text.style.display === 'none') {
			text.style.display = 'block'
		} else {
			text.style.display = 'none'
		}
	})
})

const cardContainerContent = document.querySelector(
	'.card-information-container'
)

const geeseData = [
	{
		name: 'Сірий гусак',
		description: 'Дикий гусак, що мешкає в Європі та Азії.',
		img: '/imges/goosebackground.webp',
	},
	{
		name: 'Канадський гусак',
		description: 'Відомий мігруючий гусак Північної Америки.',
		img: '/imges/goosebackground.webp',
	},
	{
		name: 'Домашній гусак',
		description: 'Популярний у фермерських господарствах.',
		img: '/imges/goosebackground.webp',
	},
]

let cardsHTML = ''
geeseData.forEach((element) => {
	cardsHTML += `
    <div class="card">
      <img src="${element.img}" alt="${element.name}">
      <h3>${element.name}</h3>
      <p>${element.description}</p>
      <button class="btn-delete">Закрити інформацію про гусочок 🦢</button>
    </div>`
})

cardContainerContent.innerHTML = cardsHTML

const deleteButtons = document.querySelectorAll('.btn-delete')

deleteButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		const card = event.target.closest('.card')
		card.remove()
	})
})

const btnOpen = document.getElementById('btn_open')
const textOpen = document.getElementById('open-text')

btnOpen.addEventListener('click', () => {
	if (textOpen.textContent.trim() === '') {
		textOpen.textContent = `1. Гуси, що врятували Рим (Давній Рим)
Коли галли вночі підкралися до Капітолія, священні гуси з храму Юнони здійняли галас і розбудили римлян, які змогли відбити напад. Відтоді гусей шанували як символ пильності.

2. Чарівна гусяча шия (Українська казка)
Бідний хлопець врятував поранену гуску, а вона подарувала йому перо, що виконувало три бажання. Завдяки цьому він отримав багатство, мудрість і щасливе життя.

3. Дика гуска та її відданість (Китайська легенда)
Дика гуска врятувала мисливця, привівши людей до нього. Вдячний чоловік зрозумів мудрість цих птахів і відмовився від полювання.

4. Гусак із золотою шийкою (Німецька казка)
Дівчина отримала чарівного гусака, до якого прилипали всі жадібні люди. Так вона викрила нечестивців і отримала винагороду.

5. Гуси, що несуть дитину (Скандинавський міф)
Гуси у міфах літали між світами, несучи душі дітей до їхніх батьків. Саме з цієї легенди виник образ лелеки, що приносить немовлят.`
	} else {
		textOpen.textContent = ''
	}
})

const btnClickGame = document.getElementById('click-btn')
const clickerText = document.getElementById('click-message')
const gooseImg = document.getElementById('goose-img')
let count = 0

btnClickGame.addEventListener('click', () => {
	count++
	clickerText.textContent = count

	if (count === 25) {
		gooseImg.src = 'imges/litle.webp'
	} else if (count === 50) {
		gooseImg.src = 'imges/Goose.webp'
	} else if (count === 75) {
		gooseImg.src = 'imges/modGoose.webp'
	} else if (count === 100) {
		gooseImg.src = '/imges/floating.webp'
	} else if (count === 200) {
		gooseImg.src = '/imges/fisher.webp'
	} else if (count === 333) {
		gooseImg.src = '/imges/arm.webp'
	}
})

const infoAbout = document.querySelector('.information-Goose')
const btnInfoAbout = document.querySelector('.btnOpenContainer')

btnInfoAbout.addEventListener('click', () => {
	if (infoAbout.style.display === 'none' || infoAbout.style.display === '') {
		infoAbout.style.display = 'block'
	} else {
		infoAbout.style.display = 'none'
	}
})

function toggleAnswer(element) {
	const answer = document.getElementById(`answer${element}`)
	if (answer.style.display === 'none' || answer.style.display === '') {
		answer.style.display = 'block'
	} else {
		answer.style.display = 'none'
	}
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('modalOverlay').style.display = 'block'
})

function closeModal() {
	document.getElementById('modalOverlay').style.display = 'none'
}
