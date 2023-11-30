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
  var numbersCouples = [];
  for (let i = 1; i <=8; i+=1) {
      numbersCouples.push(i, i);
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

  //массив перемешанных пар
  const mixedCouples = shuffle(numbersCouples);
  
  //заполняем
  let i = 0;
  function fillingOutCards(){
      let value = mixedCouples[i];
      i++;
      return value;
  }

  let arrayCards = []
  let openedCards = [];
  const container = document.querySelector('.container')
  let countOpenedCards = [];

  //сoздаём 16 карт
  for (let i = 1; i <= 16; i += 1) {
      let card = document.createElement('li');      
      card.classList.add('card');
         
      let value = {
        cardValue: card, 
        cardNumber: fillingOutCards()
      }

      arrayCards.push(value);
      container.append(value.cardValue); 

      function createCard(){
          card.textContent = `${value.cardNumber}`; 
          openedCards.push(value);

          if (openedCards.length === 2) {
            function clearValues(card1, card2) {
                card1.textContent = '';
                card2.textContent = '';
            }
            //при несовпадении очищаем
            if (openedCards[0].cardNumber !== openedCards[1].cardNumber) {
                setTimeout(clearValues, 300, openedCards[0].cardValue, openedCards[1].cardValue);
            }
            
            else {
                const item = openedCards[0].cardNumber;
                openedCards[0].cardValue.textContent = `${item}`;
                openedCards[1].cardValue.textContent = `${item}`;
        
                countOpenedCards.push(openedCards[0], openedCards[1]);
                
                for (const card of countOpenedCards) {
                  card.cardValue.removeEventListener('click', createCard); 
                }                
            }

            openedCards = [];
        }
  
          if(countOpenedCards.length === 16){
              const btn = document.createElement('button');
              container.append(btn);
              btn.classList.add('bth');
              btn.textContent = "Сыграть ещё";

              btn.addEventListener('click', () =>{
                location.reload();
              }); 

          }
      }

      if(openedCards.length < 2){
          card.addEventListener('click', createCard);   
      }            
  } 
})();