handleCounter();
handleHide();
handleClear();

function handleCounter () {
  const dropdownCounter = document.querySelectorAll('.dropdown');
  for(item of dropdownCounter) {
    item.addEventListener('click' , (e) => {itemIterator(e.target), addTextToField(e.target), hideClearButton(e.target)}); 
  }
}

function handleHide () {
  const dropdownMenu = document.querySelectorAll('.dropdown__field');
  for(item of dropdownMenu) {
    item.addEventListener('click' , (e) => {dropdownHide(e.target)}); 
  }
}

function handleClear () {
  const dropdownClear = document.querySelectorAll('.dropdown__confirm-button_clear');
  for(item of dropdownClear) {
    item.addEventListener('click' , (e) => {dropdownClearValue(e.target)}); 
  }
}

function dropdownHide (item) {
  if(item.classList.contains('dropdown__check-wrapper')) {
    item.parentNode.nextSibling.classList.toggle('dropdown__content-wrapper_show')
  }
}

function itemIterator (item) {
  if (item.classList.contains('dropdown__counter')) {
    const maxCount = 3;
    const minCount = 0;
    let count = item.closest('.dropdown__item-wrapper').getAttribute('data-dropdown-item-value');
    count = Number(count);
    if (item.classList.contains('dropdown__counter_next') && count < maxCount) {
      count++;
    } 
    if (item.classList.contains('dropdown__counter_prev') && count > minCount) {
      count--;
    }
    if (count == minCount ) {
    item.parentNode.firstChild.classList.add('dropdown__counter_extreme-value');
    } else {
      item.parentNode.firstChild.classList.remove('dropdown__counter_extreme-value');
    }
    if (count == maxCount) {
      item.parentNode.lastChild.classList.add('dropdown__counter_extreme-value');
    } else {
      item.parentNode.lastChild.classList.remove('dropdown__counter_extreme-value');
    }

  item.closest('.dropdown__item-counter').children[1].innerHTML = count;
  item.closest('.dropdown__item-wrapper').setAttribute('data-dropdown-item-value',  count);
  }
}

function dropdownClearValue (item) {
 const elems = item.parentNode.previousSibling.children;
 for (i = 0; i < elems.length; i++) {
  elems[i].lastChild.children[1].innerHTML = 0;
  elems[i].setAttribute('data-dropdown-item-value',  0);
  elems[i].lastChild.children[0].classList.add('dropdown__counter_extreme-value');
  elems[i].lastChild.children[2].classList.remove('dropdown__counter_extreme-value');
 }
}

function addTextToField(item) {
  if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear')) {
    const dropdown = item.closest('.dropdown');
    const dropdownField = dropdown.children[1];
    let arr = [];
    let name, value;
    const items = dropdownField.nextSibling.firstChild.children;
    for (i = 0; i < items.length; i++) {
      name = items[i].getAttribute('data-dropdown-item-name');
      value = items[i].getAttribute('data-dropdown-item-value');
      arr[i] = {name: name, value: value};
    }
    dropdown.setAttribute('data-dropdown-content', JSON.stringify(arr));
    dropdownField.firstChild.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
  }
}

function hideClearButton (item) {
  if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear')) {
    const dropdown = item.closest('.dropdown');
    let sumItemsValues = 0;
    const confirmPanel = item.closest('.dropdown__content-wrapper').lastChild;
    const data = JSON.parse(dropdown.getAttribute('data-dropdown-content'));
    for (value of data) {
      sumItemsValues += +value.value;
    }
     if (confirmPanel) {
       if (sumItemsValues != 0) {
        confirmPanel.firstChild.classList.remove('dropdown__confirm-button_hide');
       } else {
         confirmPanel.firstChild.classList.add('dropdown__confirm-button_hide');
       }
     }
  }
}

// handleCounter();
// handleHide();
// handleClear();

// function handleCounter () {
//   const dropdownCounter = document.querySelectorAll('.dropdown__counter');
//   for(item of dropdownCounter) {
//     item.addEventListener('click' , (e) => {itemIterator(e.target), addTextToField(), hideClearButton()}); 
//   }
// }

// function handleHide () {
//   const dropdownMenu = document.querySelectorAll('.dropdown__field');
//   for(item of dropdownMenu) {
//     item.addEventListener('click' , (e) => {dropdownHide(e.target)}); 
//   }
// }

// function handleClear () {
//   const dropdownClear = document.querySelectorAll('.dropdown__confirm-button_clear');
//   for(item of dropdownClear) {
//     item.addEventListener('click' , (e) => {dropdownClearValue(e.target), addTextToField(), hideClearButton()}); 
//   }
// }

// function dropdownHide (item) {
//   if(item.classList.contains('dropdown__check-wrapper')) {
//     item.parentNode.nextSibling.classList.toggle('dropdown__content-wrapper_show')
//   }
// }

// function itemIterator (item) {
//   const maxCount = 3;
//   const minCount = 0;
//   let count = item.closest('.dropdown__item-wrapper').getAttribute('data-dropdown-item-value');
//   count = Number(count);
//   if (item.classList.contains('dropdown__counter_next') && count < maxCount) {
//     count++;
//   } 
//   if (item.classList.contains('dropdown__counter_prev') && count > minCount) {
//     count--;
//   }

//   if (count == minCount ) {
//     item.parentNode.firstChild.classList.add('dropdown__counter_extreme-value');
//   } else {
//     item.parentNode.firstChild.classList.remove('dropdown__counter_extreme-value');
//   }
//   if (count == maxCount) {
//     item.parentNode.lastChild.classList.add('dropdown__counter_extreme-value');
//   } else {
//     item.parentNode.lastChild.classList.remove('dropdown__counter_extreme-value');
//   }

//   item.closest('.dropdown__item-counter').children[1].innerHTML = count;
//   item.closest('.dropdown__item-wrapper').setAttribute('data-dropdown-item-value',  count);
// }

// function dropdownClearValue (item) {
//  const elems = item.parentNode.previousSibling.children;
//  for (i = 0; i < elems.length; i++) {
//   elems[i].lastChild.children[1].innerHTML = 0;
//   elems[i].setAttribute('data-dropdown-item-value',  0);
//   elems[i].lastChild.children[0].classList.add('dropdown__counter_extreme-value');
//   elems[i].lastChild.children[2].classList.remove('dropdown__counter_extreme-value');
//  }
// }

// function addTextToField() {
//   const dropdownFields = document.querySelectorAll('.dropdown__field');
//   for (item of dropdownFields) {
//     let arr = [];
//     let name, value;
//     const items = item.nextSibling.firstChild.children;
//     for (i = 0; i < items.length; i++) {
//       name = items[i].getAttribute('data-dropdown-item-name');
//       value = items[i].getAttribute('data-dropdown-item-value');
//       arr[i] = {name: name, value: value};
//     }
//     item.parentNode.setAttribute('data-dropdown-content', JSON.stringify(arr));
//     item.firstChild.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
//   }
// }

// function hideClearButton () {
//   const items = document.querySelectorAll('.dropdown__content');
//   for (item of items) {
//     let sumItemsValues = 0;
//     for (let i = 0; i < item.children.length; i++) {
//       item.children[i].getAttribute('data-dropdown-item-value');
//       sumItemsValues += Number(item.children[i].getAttribute('data-dropdown-item-value'));
//     }
//     if (item.nextSibling && sumItemsValues != 0) {
//       item.nextSibling.firstChild.classList.remove('dropdown__confirm-button_hide');
//     } else {
//       if (item.nextSibling && sumItemsValues === 0) {
//         item.nextSibling.firstChild.classList.add('dropdown__confirm-button_hide');
//       }
//     }
//   }
// }