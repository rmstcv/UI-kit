let dropdownCounterPrev = document.querySelectorAll('.dropdown__counter_prev');
let dropdownCounterNext = document.querySelectorAll('.dropdown__counter_next');
let count = 0;
let countNode;
for(item of dropdownCounterPrev) {
item.addEventListener('click' , () => itemIterator(item));
  
}

function itemIterator (item) {

  console.log(item);
}
