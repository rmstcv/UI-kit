dropdownHandler ();

function dropdownHandler () {
  const dropdownCounter = document.querySelectorAll('.dropdown');
  for(item of dropdownCounter) {
    item.addEventListener('click' , (e) => {
      dropdownHide(e.target);
      itemIterator(e.target);
      dropdownClearValue(e.target); 
      addTextToField(e.target); 
      hideClearButton(e.target);
    }); 
  }
};

function getDropdownData (node) {
  let data = JSON.parse(node.closest('.dropdown').getAttribute('data-dropdown-content'));
  return data;
};

function setDropdownData (node, data) {
  let dataNew = data;
  node.closest('.dropdown').setAttribute('data-dropdown-content',  JSON.stringify(dataNew));
};

function checkExtrimValues (item) {
  const elems = item.closest('.dropdown').lastChild.firstChild.children;
  const data = getDropdownData(item);
  for (let i = 0; i < elems.length; i ++) {
    if (data[i].value == data[i].min ) {
      elems[i].lastChild.firstChild.classList.add('dropdown__counter_extreme-value');
    } else {
      elems[i].lastChild.firstChild.classList.remove('dropdown__counter_extreme-value');
    }

    if (data[i].value == data[i].max) {
      elems[i].lastChild.lastChild.classList.add('dropdown__counter_extreme-value');
    } else {
      elems[i].lastChild.lastChild.classList.remove('dropdown__counter_extreme-value');
    }
  }
};

function dropdownHide (item) {
  if(item.classList.contains('dropdown__check-wrapper')) {
    item.parentNode.nextSibling.classList.toggle('dropdown__content-wrapper_show');
    item.parentNode.classList.toggle('dropdown__field_darker');
    checkExtrimValues (item);
  }
};

function itemIterator (item) {
  if (item.classList.contains('dropdown__counter')) {
    let elem = 0;
    const allItems = item.closest('.dropdown__content').children;
    for (let i = 0; i <allItems.length; i++) {
      if (allItems[i].closest('.dropdown__item-wrapper') === item.closest('.dropdown__item-wrapper')) {
        elem = i
      }
    }
    let data = getDropdownData(item);
    let count = data[elem].value;
    if (item.classList.contains('dropdown__counter_next') && count < data[elem].max) {
      count++;
    } 
    if (item.classList.contains('dropdown__counter_prev') && count > data[elem].min) {
      count--;
    }
    item.closest('.dropdown__item-counter').children[1].innerHTML = count;
    data[elem].value = count;
    setDropdownData(item, data);
    checkExtrimValues (item);
  }
};

function dropdownClearValue (item) {
  if (item.classList.contains('dropdown__confirm-button_clear')) {
    const dropdown = item.closest('.dropdown');
    const elems = item.closest('.dropdown__content-wrapper').firstChild.children;
    let data = getDropdownData (item);
    for (i = 0; i < elems.length; i++) {
      elems[i].lastChild.children[1].innerHTML = data[i].min;
      data[i].value = data[i].min;
      elems[i].lastChild.children[0].classList.add('dropdown__counter_extreme-value');
      elems[i].lastChild.children[2].classList.remove('dropdown__counter_extreme-value');
    }
    setDropdownData(item, data);
  }
};

function addTextToField(item) {
  if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear')) {
    const dropdown = item.closest('.dropdown');
    const dropdownField = dropdown.children[1];
    let arr = [];
    let name, value;
    const items = dropdownField.nextSibling.firstChild.children;
    const data = getDropdownData(item);
    for (i = 0; i < items.length; i++) {
      name = data[i].name;
      value = data[i].value;
      arr[i] = {name: name, value: value};
    }
    dropdownField.firstChild.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
  }
};

function hideClearButton (item) {
  if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear') || item.classList.contains('dropdown__check-wrapper')) {
    const dropdown = item.closest('.dropdown');
    let sumItemsValues = 0;
    const confirmPanel = dropdown.lastChild.lastChild;
    const data = getDropdownData(item);
    for (value of data) {
      sumItemsValues += +value.value;
    }
     if (confirmPanel.classList.contains('dropdown__confirm-panel')) {
       if (sumItemsValues != 0) {
        confirmPanel.firstChild.classList.remove('dropdown__confirm-button_hide');
       } else {
         confirmPanel.firstChild.classList.add('dropdown__confirm-button_hide');
         dropdown.children[1].firstChild.innerHTML = dropdown.getAttribute('data-dropdown-content-default');
       }
     }
  }
};