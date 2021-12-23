function checkGuests() {
  const dropdowns = document.querySelectorAll('.form-elements .dropdown');
  const dataGuests = JSON.parse(dropdowns[4].getAttribute('data-dropdown-content'));
  const totalGuests = +dataGuests[0].value + +dataGuests[1].value;
  let nameTotalGuests = 'гость';

  if (totalGuests <= 20) {
    if (totalGuests === 1) {
      nameTotalGuests = 'гость';
    } else if (totalGuests >= 2 && totalGuests <= 4) {
      nameTotalGuests = 'гостя';
    } else {
      nameTotalGuests = 'гостей';
    }
  }

  if (totalGuests > 20) {
    if (totalGuests % 10 === 1) {
      nameTotalGuests = 'гость';
    }
    if (totalGuests % 10 >= 2 && totalGuests % 10 <= 4) {
      nameTotalGuests = 'гостя';
    } else {
      nameTotalGuests = 'гостей';
    }
  }
  dropdowns[4].children[1].firstChild.innerHTML = `${totalGuests} ${nameTotalGuests}`;
}

checkGuests();

function addHandlerToGuestDropdown(item) {
  item.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown__counter')) {
      checkGuests();
    }
  });
}

function addClassToDropdowns() {
  const dropdowns = document.querySelectorAll('.form-elements .dropdown');
  for (let i = 2; i < dropdowns.length; i += 1) {
    dropdowns[i].lastChild.classList.add('dropdown__content-wrapper_show');
    dropdowns[i].children[1].classList.add('dropdown__field_darker');
    dropdowns[i].lastChild.style.position = 'relative';
  }
  dropdowns[4].lastChild.lastChild.firstChild.classList.remove('dropdown__confirm-button_hide');
  addHandlerToGuestDropdown(dropdowns[4]);
}

addClassToDropdowns();
