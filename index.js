let words = [
    "Абажур",
    "Молоко",
    "Солнце",
    "Любовь",
    "Арбуз",
    "Барабан",
    "Брусок",
    "Доска",
    "Авакадо",
    "Ананас",
    "Календарь",
    "Клетка",
    "Мыло",
    "Машина",
    "Морковь",
    "Дыня",
    "Двор",
    "Яблоко",
    "Яблоня",
    "Молодость",
    "Певец",
    "Перец",
    "Арматура",
    "Волк",
    "Валун",
    "Деревня",
    "Игра",
    "Казино",
    "Каракатица",
    "Крокодил",
    "Ящерица",
    "Кошка",
    "Крапива",
    "Корона",
    "Новости",
    "Носорог",
    "Мальчик",
    "Девочка",
]

let randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase()

let answerArray = new Array(randomWord.length).fill("_")

let remainingLetters = randomWord.length

let userLetter

let gameDone = false

document.getElementById("word").innerHTML = answerArray.join(" ")

const exitGame = () => {
    document.getElementById("rules").innerHTML = "Спасибо за игру"
    setTimeout(() => {
        location.reload()
    }, 1500)
}

function chekValueLetter(letter) {
    let guess = letter.toLowerCase()
    for (let i = 0; i < randomWord.length; i++) {
        switch (randomWord[i] === guess) {
            case true :
                document.getElementById("rules").innerHTML = "Угадал"
                setTimeout(() => {
                    document.getElementById("rules").innerHTML = "Напиши одну букву ниже"
                }, 1500)
                answerArray[i] = guess
                document.getElementById("word").innerHTML = answerArray.join(" ")
                remainingLetters--
                break
            case false:
                document.getElementById("rules").innerHTML = "Не угадал"
                setTimeout(() => {
                    document.getElementById("rules").innerHTML = "Напиши одну букву ниже"
                }, 1500)
                break
        }
    }
    if (remainingLetters === 0) {
        setTimeout(() => {
            gameDone = true
            alert(`Поздравляю, ты угадал слово: ${randomWord}`)
            location.reload()
        }, 1500)
    }
}

const getLetter = () => {
    userLetter = document.getElementById("answerInput").value
    if (userLetter.length > 1) {
        document.getElementById("rules").innerHTML = "Напиши только одну букву"
        document.getElementById("answerInput").value = null
        setTimeout(() => {
            document.getElementById("rules").innerHTML = "Напиши одну букву ниже"
        }, 1500)
    } else if (Number(userLetter)) {
        document.getElementById("rules").innerHTML = "Исользуй только буквы"
        document.getElementById("answerInput").value = null
        setTimeout(() => {
            document.getElementById("rules").innerHTML = "Напиши одну букву ниже"
        }, 1500)
    } else if (userLetter === "") {
        document.getElementById("rules").innerHTML = "Ты не написал букву"
        document.getElementById("answerInput").value = null
        setTimeout(() => {
            document.getElementById("rules").innerHTML = "Напиши одну букву ниже"
        }, 1500)
    } else {
        document.getElementById("answerInput").value = null
        document.getElementById("answerInput").autofocus
        chekValueLetter(userLetter)
    }
}








