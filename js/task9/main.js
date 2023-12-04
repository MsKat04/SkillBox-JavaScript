(() => {
  //заголовок
  function createAppTitle(title) {
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    appTitle.classList.add('app_title');
    return appTitle;
  }

  const formContainer = document.querySelector('.header');
  const gameAppTitle = createAppTitle('Игра в пары');

  formContainer.append(gameAppTitle);

  //пары номеров
  var randNum = [];
    function createNumbersArray(count) {
      for (let i = 1; i <= count; i++) {
        randNum.push(i,i)
      }
    return randNum;
  }
  
  //перемешиваем
  function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) 
    {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;      
    }
    return arr;
  }

  var shuffledNumbers = shuffle(createNumbersArray(8)); 

  function createCard(cardNumber) {
    const cardContainersDDD = document.createElement('div');
    const card = document.createElement('li');
    card.classList.add('card');
    cardContainersDDD.classList.add('container-small');
    cardContainersDDD.appendChild(card);

    card.addEventListener('click',() => {
      if (!card.classList.contains('show') && !card.classList.contains('matched')) {
        card.classList.add('show');
        // Проверяем, сколько карточек с классом "show" уже есть
        const shownCards = document.querySelectorAll('.card.show');

        if (shownCards.length === 2) {
          // Получаем номера открытых карточек
          const cardNumbers = Array.from(shownCards).map(function (shownCard) {
            return parseInt(shownCard.innerText);
          });
          // Проверяем, совпадают ли номера открытых карточек
          if (cardNumbers[0] === cardNumbers[1]) {
            Array.from(shownCards).forEach(function (shownCard) {
              shownCard.classList.add('matched');
              shownCard.classList.remove('show');
            });
          }
            else {
              // Закрываем карточки
              setTimeout(function () {
                Array.from(shownCards).forEach(function (shownCard) {
                  shownCard.classList.remove('show');
                });
              }, 500);
            };
            const matchedCards = document.querySelectorAll('.card.matched');
            if (matchedCards.length === 16) {
              const btn = document.createElement('button');
              cardsContainer.append(btn);
              btn.classList.add('bth');
              btn.textContent = "Сыграть ещё";

              btn.addEventListener('click', () => {
                location.reload();
              });
            }
          }
      }
    });
    
    card.innerText = cardNumber;
    
    return cardContainersDDD;
  }
  var cardsContainer = document.createElement('div');
  cardsContainer.classList.add('container');

  shuffledNumbers.forEach((number)=> {
    var card = createCard(number);
    cardsContainer.append(card);
  });

  document.body.appendChild(cardsContainer);
})();