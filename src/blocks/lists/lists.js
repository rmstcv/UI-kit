function openCheckList(openedList) {
  const checkbox = document.querySelector(openedList);
  const lists = document.querySelectorAll('.checkbox-header__check-mark');

  for (let i = 0; i < lists.length; i += 1) {
    if (lists[i].closest('.checkbox-opened') === checkbox) {
      lists[i].classList.add('checkbox-header__check-mark_active');
    }
  }
  checkbox.firstChild.lastChild.classList.add('checkbox-list_active');
}

function addSize() {
  const checkBox = document.querySelector('.checkboxes-rich-block .checkbox-button');
  checkBox.style.width = '23.6rem';
}

addSize();
openCheckList('.checkbox-opened');
