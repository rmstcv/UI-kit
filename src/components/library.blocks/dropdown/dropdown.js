
handleCounter();
handleHide();
handleClear();

function handleCounter () {
  let dropdownCounter = document.querySelectorAll('.dropdown__counter');
  for(item of dropdownCounter) {
    item.addEventListener('click' , (e) => {itemIterator(e.target), addText(e.target), addTexttoField()}); 
  }
}

function handleHide () {
  let dropdownMenu = document.querySelectorAll('.dropdown__field');
  for(item of dropdownMenu) {
    item.addEventListener('click' , (e) => dropdownHide(e.target)); 
  }
}

function handleClear () {
  let dropdownClear = document.querySelectorAll('.dropdown__confirm-button_clear');
  for(item of dropdownClear) {
    item.addEventListener('click' , (e) => dropdownClearValue(e.target)); 
  }
}

function dropdownHide (item) {
  if(item.classList.contains('dropdown__check-wrapper')) {
    item.parentNode.nextSibling.classList.toggle('dropdown__content-wrapper_show')
  }
}

function itemIterator (item) {
  let maxCount = 3;
  let minCount = 0;
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

function addText(item) {
  let arr = [];
  if (item.parentNode.classList.contains('dropdown')) {
    while (!item.previousSibling.classList.contains('dropdown__field')) {
      item = item.previousSibling
    }
    
    for (i = 0; i < item.firstChild.children.length; i++) {
      let name = item.firstChild.children[i].getAttribute('data-dropdown-item-name');
      let value = item.firstChild.children[i].getAttribute('data-dropdown-item-value');
      arr[i] = {name: name, value: value};
    }
    console.log(JSON.stringify(arr));
    item.parentNode.setAttribute('data-dropdown-content', JSON.stringify(arr));
    item.previousSibling.firstChild.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
  } 
  else {
    item = item.parentNode;
    addText(item);
  } 
}

function dropdownClearValue (item) {
 let elem = item.parentNode.previousSibling.children;
 for (i = 0; i < item.parentNode.previousSibling.children.length; i++) {
  elem[i].lastChild.children[1].innerHTML = 0;
  elem[i].setAttribute('data-dropdown-item-value',  0);
  elem[i].lastChild.children[0].classList.add('dropdown__counter_extreme-value');
  elem[i].lastChild.children[2].classList.remove('dropdown__counter_extreme-value');
 }
}

function addTexttoField() {
  
  let dropdownFields = document.querySelectorAll('.dropdown__field');
  console.log(dropdownFields);

  for (item of dropdownFields) {
    let data = item.parentNode.getAttribute('data-dropdown-content');
    
    // item.firstChild.innerHTML = JSON.parse(data);
    console.log(data);
  }


  // if (item.parentNode.classList.contains('dropdown')) {
  //   for (i = 0; i < item.firstChild.children.length; i++) {
  //     let name = item.firstChild.children[i].getAttribute('data-dropdown-item-name');
  //     let value = item.firstChild.children[i].getAttribute('data-dropdown-item-value');
  //     arr[i] = {name: name, value: value};
  //   }
  //   item.parentNode.setAttribute('data-dropdown-content', JSON.stringify(arr));
  //   item.previousSibling.firstChild.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
  // } 
  // else {
  //   item = item.parentNode;
  //   addText(item);
  // } 
}

