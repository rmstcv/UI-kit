addCheckboxHandler ();

function addCheckboxHandler () {
  const checkboxes = document.querySelectorAll('.checkbox');
  for(item of checkboxes) {
    item.addEventListener('click', (e) => showCheckboxList(e.target));
  }
};

function showCheckboxList (item) {

  if (item.classList.contains('checkbox-header__check-wrapper')) {
    item.closest('.checkbox').lastChild.classList.toggle('checkbox-list_active');
    item.firstChild.classList.toggle('checkbox-header__check-mark_active')
  }
};