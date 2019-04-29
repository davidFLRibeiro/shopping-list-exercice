//handle new item
function handleNewItem() {
  $('#js-shopping-list-form').on('submit', function (event) {
    event.preventDefault(); 
    const item = $(this).find('#shopping-list-entry').val();
    renderNewItem(item);
  });
}

//render item to the dom
function renderNewItem(item) {
  $('.shopping-list').append(generateHTMLItem(item))
}

function generateHTMLItem(item) {
  return `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
}

//delete item

function deleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
  });
}




//check item

function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    debugger;
  });
  
  
}
