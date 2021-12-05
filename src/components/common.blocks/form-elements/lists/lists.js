openCheckList('.checkbox-opened');

function openCheckList (openedList) {
  const checkbox = document.querySelector(openedList);
  const lists = document.querySelectorAll('checkbox-header__check-mark');

  for (let i = 0; i < lists.length; i++) {
    if (lists[i].parentNode == checkbox) {
      lists[i].classList.add('checkbox-header__check-mark_active');
    }
  }

  checkbox.firstChild.lastChild.classList.add('checkbox-list_active');

  // const checkbox = document.querySelector('.checkbox-opened');
  // checkbox.firstChild.firstChild.lastChild.firstChild.classList.add('checkbox-header__check-mark_active');
  // checkbox.firstChild.lastChild.classList.add('checkbox-list_active');
}