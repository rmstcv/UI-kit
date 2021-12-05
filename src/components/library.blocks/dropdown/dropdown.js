class Dropdown {
  constructor (dropdown) {
    this.dropdown = dropdown;
  }

  addDropdownHandler () {
      
    this.dropdown.addEventListener('click' , (e) => {
      this.dropdownHide(e.target);
      this.itemIterator(e.target);
      this.dropdownClearValue(e.target); 
      this.addTextToField(e.target);
      this.hideClearButton(e.target);
    });
    
  }

  initDropdown () {
    this.checkExtrimValues();
    this.addDropdownHandler();
  }

  getDropdownData () {
    const data = JSON.parse(this.dropdown.getAttribute('data-dropdown-content'));
    return data;
  }

  setDropdownData (data) {
    const dataNew = data;
    this.dropdown.setAttribute('data-dropdown-content',  JSON.stringify(dataNew));
  }

  findElems (elemsClass) {
    const elems = document.querySelectorAll(elemsClass);
    let newElems = [];

    for (let i = 0; i < elems.length; i++) {
      if (elems[i].closest('.js-dropdown') ==  this.dropdown) {
        newElems.push(elems[i]);
      }
    }

    return newElems;
  }

  findElem (elemsClass) {
    const elems = document.querySelectorAll(elemsClass);

    for (let i = 0; i < elems.length; i++) {
      if (elems[i].closest('.js-dropdown') ==  this.dropdown) {
        return elems[i];
      }
    }
    
  }

  checkExtrimValues () {
    const elemsNext = this.findElems('.js-dropdown__counter_next');
    const elemsPrev = this.findElems('.js-dropdown__counter_prev');
    const data = this.getDropdownData();

    for (let i = 0; i < elemsPrev.length; i ++) {
      if (data[i].value == data[i].min) {
        elemsPrev[i].classList.add('dropdown__counter_extreme-value');
      } else {
        elemsPrev[i].classList.remove('dropdown__counter_extreme-value');
      }
    }

    for (let i = 0; i < elemsNext.length; i ++) {
      if (data[i].value == data[i].max) {
        elemsNext[i].classList.add('dropdown__counter_extreme-value');
      } else {
        elemsNext[i].classList.remove('dropdown__counter_extreme-value');
      }
    }

  }

  dropdownHide (item) {
    if (item.classList.contains('dropdown__check-wrapper')) {
      const content = this.findElem('.js-dropdown__content-wrapper');
      const field = this.findElem('.js-dropdown__field');
      content.classList.toggle('dropdown__content-wrapper_show');
      field.classList.toggle('dropdown__field_darker');
      this.checkExtrimValues();
    }
  }

  itemIterator (item) {
    if (item.classList.contains('dropdown__counter')) {
      let elem = 0;
      let data = this.getDropdownData();
      const allItems = this.findElems('.js-dropdown__item-wrapper');
      const counterItems = this.findElems('.js-dropdown__counter-value');

      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i].closest('.js-dropdown__item-wrapper') === item.closest('.js-dropdown__item-wrapper')) {
          elem = i;
        }
      }   

      let count = data[elem].value;

      if (item.classList.contains('js-dropdown__counter_next') && count < data[elem].max) {
        count++;
      }

      if (item.classList.contains('js-dropdown__counter_prev') && count > data[elem].min) {
        count--;
      }

      counterItems[elem].innerHTML = count;
      data[elem].value = count;
      this.setDropdownData(data);
      this.checkExtrimValues();
    }
  }

  dropdownClearValue (item) {

    if (item.classList.contains('dropdown__confirm-button_clear')) {
      const elems = this.findElems('.js-dropdown__item-wrapper');
      const data = this.getDropdownData();
      const counterElems = this.findElems('.js-dropdown__counter-value');

      for (let i = 0; i < elems.length; i++) {
        counterElems[i].innerHTML = data[i].min;
        data[i].value = data[i].min;
      }

      this.setDropdownData(data);
      this.checkExtrimValues();
    }
  }

  addTextToField(item) {

    if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear')) {
      const dropdownField = this.findElem('.js-dropdown__preview-wrapper');
      let arr = [];
      let name, value;
      const items = this.findElems('.js-dropdown__item-wrapper');
      const data = this.getDropdownData();
      for (let i = 0; i < items.length; i++) {
        name = data[i].name;
        value = data[i].value;
        arr[i] = {name: name, value: value};
      }
      dropdownField.innerHTML = `${arr[0].value} ${arr[0].name}, ${arr[1].value} ${arr[1].name}...`;
    }
  }

  hideClearButton (item) {
    if (item.classList.contains('dropdown__counter') || item.classList.contains('dropdown__confirm-button_clear') || item.classList.contains('dropdown__check-wrapper')) {
      const confirmPanel = this.findElem('.js-dropdown__confirm-panel');
      const clearButton = this.findElem('.js-dropdown__confirm-button_clear');
      const data = this.getDropdownData();
      const dropdownField = this.findElem('.js-dropdown__preview-wrapper');
      let sumItemsValues = 0;

      for (let value of data) {
        sumItemsValues += +value.value;
      }

      if (confirmPanel) {
        if (sumItemsValues != 0) {
          clearButton.classList.remove('dropdown__confirm-button_hide');
        } else {
          clearButton.classList.add('dropdown__confirm-button_hide');
          dropdownField.innerHTML = this.dropdown.getAttribute('data-dropdown-content-default');
        }
      }
    }
  }
}

function addDropdowns(){
  const dropdowns = document.querySelectorAll('.js-dropdown');

  dropdowns.forEach(dropdown =>  {
    dropdown = new Dropdown(dropdown);
    dropdown.initDropdown();
  });
}

addDropdowns();