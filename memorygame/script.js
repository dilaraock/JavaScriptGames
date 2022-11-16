document.addEventListener('DOMContentLoaded', () => {

    // Card options
    const cardArray = [
        { name: "bee", img: "/memorygame/img/bee.png" },
        { name: "crocodile", img: "/memorygame/img/crocodile.png" },
        { name: "macaw", img: "/memorygame/img/macaw.png"},
        { name: "gorilla", img: "/memorygame/img/gorilla.png"},
        { name: "tiger", img: "/memorygame/img/tiger.png"},
        { name: "monkey", img: "/memorygame/img/monkey.png"},
        { name: "chameleon", img: "/memorygame/img/chameleon.png"},
        { name: "piranha", img: "/memorygame/img/piranha.png"},
        { name: "anaconda", img: "/memorygame/img/anaconda.png"},
        { name: "sloth", img: "/memorygame/img/sloth.png"},
        { name: "cockatoo", img: "/memorygame/img/cockatoo.png"},
        { name: "toucan", img: "/memorygame/img/toucan.png"},
        { name: "bee", img: "/memorygame/img/bee.png" },
        { name: "crocodile", img: "/memorygame/img/crocodile.png" },
        { name: "macaw", img: "/memorygame/img/macaw.png"},
        { name: "gorilla", img: "/memorygame/img/gorilla.png"},
        { name: "tiger", img: "/memorygame/img/tiger.png"},
        { name: "monkey", img: "/memorygame/img/monkey.png"},
        { name: "chameleon", img: "/memorygame/img/chameleon.png"},
        { name: "piranha", img: "/memorygame/img/piranha.png"},
        { name: "anaconda", img: "/memorygame/img/anaconda.png"},
        { name: "sloth", img: "/memorygame/img/sloth.png"},
        { name: "cockatoo", img: "/memorygame/img/cockatoo.png"},
        { name: "toucan", img: "/memorygame/img/toucan.png"},
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Create game board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', '/memorygame/img/block.png');
            card.setAttribute('data-id', i);
            card.classList.add('box');
            card.addEventListener('click', flipCard);
            card.classList.add('imgbox');
            grid.appendChild(card);
        }
    }

    // Check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', '/memorygame/img/star.png');
            cards[optionTwoId].setAttribute('src', '/memorygame/img/star.png');
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', '/memorygame/img/block.png');
            cards[optionTwoId].setAttribute('src', '/memorygame/img/block.png');
            
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    // Flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length == 2) {
            setTimeout(checkForMatch, 600)
        }

    }


    createBoard();



});

