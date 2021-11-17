let numberOfLikes = 12;
let content = document.querySelectorAll('.like-button__content');
let numElems = document.querySelectorAll('.like-button__number');

for (let elem of numElems) {
  elem.innerHTML = numberOfLikes;
}

for (let elem of content) {
  console.log(elem.lastChild.classList);
  elem.addEventListener("click", () => {

    elem.firstChild.classList.toggle('like-button__heart_unactive');
    elem.lastChild.classList.toggle('like-button__heart_unactive');

    if (elem.firstChild.classList.contains('like-button__heart_unactive')) {
      elem.nextElementSibling.innerHTML = numberOfLikes + 1;
      
    } else {
       elem.nextElementSibling.innerHTML = numberOfLikes;
    }
    // if (elem.lastChild.classList.contains('like-button__heart_unactive')) {
    //   elem.nextElementSibling.innerHTML = numberOfLikes;
    // }
    
  });
}