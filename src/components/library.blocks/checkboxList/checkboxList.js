class CheckBox {
  constructor(checkbox) {
    this.checkbox = checkbox;
  }

  addCheckboxHandler() {
    this.checkbox.addEventListener('click', (e) => {
      this.showCheckboxList(e.target);
    });
  }

  findElem (elemClass) {
    const elems = document.querySelectorAll(elemClass);

    for (let i = 0; i < elems.length; i++) {
      if (elems[i].closest('.js-checkbox') ==  this.checkbox) {
        return elems[i];  
      }
    }

  }

  showCheckboxList (item) {
    const list = this.findElem('.js-checkbox-list');
    const checkMark = this.findElem('.js-checkbox-header__check-mark');

    if (item.classList.contains('js-checkbox-header__check-wrapper')) {
      checkMark.classList.toggle('checkbox-header__check-mark_active');
      list.classList.toggle('checkbox-list_active');
    }
    
  }
}

function addCheckboxesLists (){
  const checkboxes = document.querySelectorAll('.js-checkbox');

  checkboxes.forEach(checkbox =>  {
    checkbox = new CheckBox(checkbox);
    checkbox.addCheckboxHandler();
  });
}

addCheckboxesLists();