addClassToDropdowns();
checkGuests();

function addHandlerToGuestDropdown (item) {
  item.addEventListener('click', (e) => {if(e.target.classList.contains('dropdown__counter')) {
    checkGuests();
  }});
}

function addClassToDropdowns() {
  const dropdowns = document.querySelectorAll('.form-elements .dropdown');
  for (let i = 1; i < dropdowns.length; i++) {
    dropdowns[i].lastChild.classList.add('dropdown__content-wrapper_show');
    dropdowns[i].children[1].classList.add('dropdown__field_darker');

  };
  dropdowns[3].lastChild.lastChild.firstChild.classList.remove('dropdown__confirm-button_hide');
  addHandlerToGuestDropdown(dropdowns[3]);
};

function checkGuests () {
  const dropdowns = document.querySelectorAll('.form-elements .dropdown');
  let dataGuests = JSON.parse(dropdowns[3].getAttribute('data-dropdown-content'));
  let totalGuests = +dataGuests[0].value + +dataGuests[1].value;
  let nameTotalGuests = 'гость';

  if (totalGuests <= 20) {
    if (totalGuests == 1) {
      nameTotalGuests = 'гость'
    } else {
      if (totalGuests >=2 && totalGuests <=4 ) {
        nameTotalGuests = 'гостя'
      } else {
       nameTotalGuests = 'гостей';
      }
    } 
  }

  if (totalGuests > 20) {
    if (totalGuests%10 == 1) {
      nameTotalGuests = 'гость'
    }
    if (totalGuests%10 >=2 && totalGuests%10 <=4 ) {
      nameTotalGuests = 'гостя'
    } else {
       nameTotalGuests= 'гостей'
    }
  }
  dropdowns[3].children[1].firstChild.innerHTML = `${totalGuests} ${nameTotalGuests}`;
}