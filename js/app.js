
const clickBtn = document.getElementById('click_menu');
const containerHeader = document.querySelector('.header__main');
const btnText = clickBtn.querySelector('.btn-text');

clickBtn.addEventListener('click', () => {
  if (containerHeader.classList.contains('show')) {
    containerHeader.classList.remove('show');
    setTimeout(() => {
      containerHeader.style.display = 'none';
    }, 500);
    btnText.style.transform = 'rotate(0deg)';
  } else {
    containerHeader.style.display = 'block';
    setTimeout(() => {
      containerHeader.classList.add('show');
    }, 10);
    btnText.style.transform = 'rotate(90deg)';
  }
});


const gallery = document.querySelector('.gallery')
const images = document.querySelectorAll('.image')
const fullImageContainer = document.querySelector('.fullImageContainer')
const fullImage = document.createElement('img')

let currentIndex = 0

fullImageContainer.classList.add('full-image-container')
fullImage.classList.add('full-image')
fullImageContainer.appendChild(fullImage)
document.body.appendChild(fullImageContainer)

function openImage(index) {
	currentIndex = index
	fullImage.src = images[currentIndex].src
	fullImageContainer.style.display = 'flex'
}

function closeImage() {
	fullImageContainer.style.display = 'none'
}

function handleKeydown(event) {
	if (fullImageContainer.style.display === 'flex') {
		if (event.key === 'ArrowRight') {
			currentIndex = (currentIndex + 1) % images.length
			fullImage.src = images[currentIndex].src
		} else if (event.key === 'ArrowLeft') {
			currentIndex = (currentIndex - 1 + images.length) % images.length
			fullImage.src = images[currentIndex].src
		} else if (event.key === 'Escape') {
			closeImage()
		}
	}
}

images.forEach((image, index) => {
	image.addEventListener('click', () => openImage(index))
})

fullImageContainer.addEventListener('click', closeImage)

document.addEventListener('keydown', handleKeydown)

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

const btnOpen = document.getElementById('btn_open');
const textOpen = document.getElementById('open-text');

btnOpen.addEventListener('click', () => {
    textOpen.textContent = `1. Гуси, що врятували Рим (Давній Рим)

Колись галли намагалися захопити Капітолійський пагорб у Римі. Вони підібралися вночі, сподіваючись, що ніхто їх не помітить. Але в храмі богині Юнони жили священні гуси, які здійняли гучний галас, коли відчули небезпеку. Їхній крик розбудив римлян, і ті змогли відбити напад. З того часу римляни шанували гусей як символ пильності.

2. Чарівна гусяча шия (Українська казка)

Одного разу бідний хлопець врятував поранену гуску, не знаючи, що вона чарівна. У подяку вона подарувала йому перо, яке могло виконати три бажання. Хлопець забажав багатства, мудрості та доброї дружини. Його життя змінилося, і він завжди пам’ятав про свою рятівницю.

3. Дика гуска та її відданість (Китайська легенда)

В давні часи одна дика гуска врятувала свого господаря, китайського мисливця, який потрапив у пастку. Вона прилетіла до людей і вказала їм дорогу до нього. Коли господаря знайшли, він відмовився від полювання на гусей, розуміючи їхню мудрість і відданість.

4. Гусак із золотою шийкою (Німецька казка)

Одного разу бідна дівчина допомогла старій бабусі, і та подарувала їй гусака із золотою шийкою. Гусак мав чарівну силу – кожен, хто намагався його вкрасти, прилипав до нього. Так дівчина викрила жадібних і злих людей, а добрі люди отримали винагороду.

5. Гуси, що несуть дитину (Скандинавський міф)

У північних легендах гуси асоціювалися з духами дітей, що ще не народилися. Вважалося, що вони літають між світом живих і світом духів, несучи новонароджених до їхніх батьків. Саме з цієї легенди згодом з’явився образ лелеки, що приносить немовлят.`;
});
