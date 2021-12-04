openCheckList();

function openCheckList () {
  const checkbox = document.querySelector('.checkbox-opened');
  checkbox.firstChild.firstChild.lastChild.firstChild.classList.add('checkbox-header__check-mark_active');
  checkbox.firstChild.lastChild.classList.add('checkbox-list_active');
}