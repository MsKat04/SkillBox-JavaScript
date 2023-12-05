(function () {

  function setData(id, data) {
      let jsonData = JSON.stringify(data);
      localStorage.setItem(id, jsonData);
  }

  function getData(id) {
      let data = localStorage.getItem(id);
      data = data ? JSON.parse(data) : [];
      return data;
  }

  function createAppTitle(title) {
      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
  }

  function createTodoItemForm() {
      let form = document.createElement('form');
      let input = document.createElement('input');
      let buttonWrapper = document.createElement('div');
      let button = document.createElement('button');

      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = 'Введите название нового дела';
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Добавить дело';

      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);

      button.disabled = true;
      
      input.addEventListener('input', function() {
          if (input.value === '') {
              button.disabled = true;
          }
          else button.disabled = false;
      });

      return {
          form,
          input,
          button,
      };
  }

  function createTodoList() {
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
  }

  function createTodoItem (object, things, keyName) {
      let item = document.createElement('li');
      let buttonGroup = document.createElement('div');
      let doneButton = document.createElement('button');
      let deleteButton = document.createElement('button');

      item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      item.textContent = object.name;        

      buttonGroup.classList.add('btn-group', 'btn-group-sm');
      doneButton.classList.add('btn', 'btn-success');
      doneButton.textContent = 'Готово';
      deleteButton.classList.add('btn', 'btn-danger');
      deleteButton.textContent = 'Удалить';

      buttonGroup.append(doneButton);
      buttonGroup.append(deleteButton);
      item.append(buttonGroup);

      if (object.done === true) item.classList.toggle('list-group-item-success');
      
      doneButton.addEventListener('click', function() {
          item.classList.toggle('list-group-item-success');
          const foundThing = things.find(thing => thing.id.toString() === item.id);
          if (foundThing) {
            foundThing.done = !foundThing.done;
          }
          setData(keyName, things);                
      });

      deleteButton.addEventListener('click', function() {
          if (confirm('Вы уверены?')) {
              item.remove();
              const currentName = object.id;
              const indexToRemove = things.findIndex(item => item.id === currentName);
              
              if (indexToRemove !== -1) {
                things.splice(indexToRemove, 1);
              }
          }
          setData(keyName, things);
      });

      return {
          item,
          doneButton,
          deleteButton,
      };
  }

  function randomId(){
      return Math.round(Math.random() * 100000);
  }

  function createTodoApp(container, title = 'Список дел', keyName) {
      let todoAppTitle = createAppTitle(title);
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();
      let getDates = getData(keyName);

      if (getDates.length !== 0) {
          for (let thing of getDates) {
              let thisTodoItem = createTodoItem(thing, getDates, keyName);
              thisTodoItem.item.id = thing.id;
              todoList.append(thisTodoItem.item);  
          }
      }             

      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);
      
      //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
      todoItemForm.form.addEventListener('submit', function(e) {
          //эта строчка необходима, чтобы предотвратить стандартное поведение браузера (в данном случае, перезагрузка при отправке формы)
          e.preventDefault();
          let thisItem = 
          {
            id: randomId(), 
            name: todoItemForm.input.value, 
            done: false
          };

          getDates.push(thisItem);
             
          if (!todoItemForm.input.value) {                
              return;
          }

          let todoItem = createTodoItem(thisItem, getDates, keyName);
          todoItem.item.id = thisItem.id; 

          todoList.append(todoItem.item);

          todoItemForm.input.value = '';
          todoItemForm.button.disabled = true;
          setData(keyName, getDates);  
      });
  }    

  window.createTodoApp = createTodoApp;
}) ();