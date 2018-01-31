//an object that holds all the items and their checked status

const shoppingList = [];

// console.log(shoppingList[0].name)
// console.log(shoppingList[0][name]);



// an event listener that takes the form input item and pushes into the list Object, then renders the list

$('#js-shopping-list-form').on('submit', function (event){
  event.preventDefault();

  let submittedItem = $('input[name=shopping-list-entry]').val();

  shoppingList.push({name: submittedItem, checked: false});
  $('ul.shopping-list').empty();
  renderList(shoppingList);
   $('.js-shopping-list-entry').val('');
});


// //a function that renders the itemObject to the DOM

function renderList(listArray){
  for (let i = 0; i <listArray.length; i++){
    $('ul.shopping-list').prepend(
      `<li class="js-itemIndexNumber" itemIndexNumber="${i}">
        <span class="shopping-item">${listArray[i].name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
    );
  }
}

// an event listener on 'check' button that adda a class to the object item

$('.shopping-list').on('click', '.shopping-item-toggle', function(event){

  $(this).closest('.shopping-item').addClass('.strike-through');
  const selected = $(this).closest('li').find('.shopping-item');
  $(selected).toggleClass('strike-through');
});





//an event listener on 'delete' button that removes html content

// $('.shopping-list').on('click', '.shopping-item-delete', function(event){

//   $(this).closest('li').remove();
//   const selected = $(this).closest('li');
//   $(selected).toggleClass('strike-through');
// });




$('.shopping-list').on('click', '.shopping-item-delete', function(event){
  let itemIndex = $(this).closest('.js-itemIndexNumber').attr('itemIndexNumber');
  console.log(itemIndex);
    shoppingList.splice(itemIndex, 1);
    $('ul.shopping-list').empty();
    renderList(shoppingList);
});
