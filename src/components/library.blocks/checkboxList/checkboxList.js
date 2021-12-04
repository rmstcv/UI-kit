class CheckBox {
  constructor(checkbox) {
    this.checkbox = checkbox;
  }

  showCheckbox () {
    this.checkbox.closest('.js-checkbox').lastChild.classList.toggle('checkbox-list_active');
    this.checkbox.firstChild.classList.toggle('checkbox-header__check-mark_active');
  }
}

let checkboxes = document.querySelectorAll('.checkbox-header__check-wrapper');

for (let item of checkboxes) {

  item.addEventListener('click', (e) => {
    let checkbox = new CheckBox(e.target);
    checkbox.showCheckbox();
  });

}

// let checkboxHandle = function addCheckboxHandler () {
//   const checkboxes = document.querySelectorAll('.js-checkbox');

//   for(let item of checkboxes) {
//     item.addEventListener('click', (e) => showCheckbox(e.target));
//   }

// };

// let showCheckbox = function showCheckboxList (item) {

//   if (item.classList.contains('checkbox-header__check-wrapper')) {
//     item.closest('.js-checkbox').lastChild.classList.toggle('checkbox-list_active');
//     item.firstChild.classList.toggle('checkbox-header__check-mark_active');
//   }

// };

// checkboxHandle ();