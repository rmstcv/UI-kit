// likeButton

let numberOfLikes = 12;
let content = document.querySelectorAll('.like-button__content');
let numElems = document.querySelectorAll('.like-button__number');

for (let elem of numElems) {
  elem.innerHTML = numberOfLikes;
}

for (let elem of content) {
  elem.addEventListener("click", () => {

    elem.firstChild.classList.toggle('like-button__heart_unactive');
    elem.lastChild.classList.toggle('like-button__heart_unactive');

    if (elem.firstChild.classList.contains('like-button__heart_unactive')) {
      elem.nextElementSibling.innerHTML = numberOfLikes + 1;
      
    } else {
       elem.nextElementSibling.innerHTML = numberOfLikes;
    } 
  });
}

// rateButton

let rateButtons = document.querySelectorAll('.rate-buttons__item_uncolored');
  function rate (item) {
    let handler = function() {
       
      if (item.classList.contains('rate-buttons__item_norated')) {
        item.classList.remove('rate-buttons__item_uncolored');
        item.classList.add('rate-buttons__item_colored');
        item.classList.remove('rate-buttons__item_norated');
        let allElem = item.parentNode.childNodes;
        for (let elem of allElem) {
          elem.classList.remove('rate-buttons__item_norated')
        }
        let prevElem = item.previousSibling;
        deletePrev();

        function deletePrev () {
          
          if (prevElem !== null ) {
            prevElem.classList.remove('rate-buttons__item_uncolored');
            prevElem.classList.add('rate-buttons__item_colored');
            prevElem.classList.remove('rate-buttons__item_norated');
            prevElem = prevElem.previousSibling;
            deletePrev();
          }
        } 
      }   
    };
    return handler; 
  };

for (let elem of rateButtons) {
  elem.classList.add('rate-buttons__item_norated');
  elem.addEventListener('click', rate(elem));
}