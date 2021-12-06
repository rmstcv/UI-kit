// likeButton

class LikeButton {
  constructor(likeButton) {
    this.likeButton = likeButton;
    this.numberOfLikes = 12;
  }

  findElems(elemsClass) {
    const elems = document.querySelectorAll(elemsClass);
    const newElems = [];
    let elem;
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].closest('.like-button') === this.likeButton) {
        newElems.push(elems[i]);
      }
    }
    if (newElems.length !== 1) {
      elem = newElems;
    } else {
      [elem] = newElems;
    }
    return elem;
  }

  addLikes() {
    const numOfLikes = this.findElems('.like-button__number');
    numOfLikes.innerHTML = this.numberOfLikes;
  }

  addLikeButtonHandler() {
    const hearts = this.findElems('.like-button__heart');
    const numOfLikes = this.findElems('.like-button__number');
    hearts.forEach((heart) => {
      this.likeButton.addEventListener('click', () => {
        heart.classList.toggle('like-button__heart_unactive');
        if (heart.classList.contains('like-button__heart_unactive')) {
          numOfLikes.innerHTML = this.numberOfLikes;
        } else {
          numOfLikes.innerHTML = this.numberOfLikes + 1;
        }
      });
    });
  }
}

function addLikeButton() {
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((likeButtonItem) => {
    let likeButton = likeButtonItem;
    likeButton = new LikeButton(likeButton);
    likeButton.addLikes();
    likeButton.addLikeButtonHandler();
  });
}

addLikeButton();

// const numberOfLikes = 12;
// const content = document.querySelectorAll('.like-button__content');
// const numElems = document.querySelectorAll('.like-button__number');

// for (let elem of numElems) {
//   elem.innerHTML = numberOfLikes;
// }

// for (let elem of content) {
//   elem.addEventListener('click', () => {

//     elem.firstChild.classList.toggle('like-button__heart_unactive');
//     elem.lastChild.classList.toggle('like-button__heart_unactive');

//     if (elem.firstChild.classList.contains('like-button__heart_unactive')) {
//       elem.nextElementSibling.innerHTML = numberOfLikes + 1;
//     } else {
//       elem.nextElementSibling.innerHTML = numberOfLikes;
//     }
//   });
// }

// rateButton

// let rateButtons = document.querySelectorAll('.rate-buttons__item_uncolored');
// function rate(item) {
//   let handler = function () {

//     if (item.classList.contains('rate-buttons__item_norated')) {
//       item.classList.remove('rate-buttons__item_uncolored');
//       item.classList.add('rate-buttons__item_colored');
//       item.classList.remove('rate-buttons__item_norated');
//       let allElem = item.parentNode.childNodes;
//       for (let elem of allElem) {
//         elem.classList.remove('rate-buttons__item_norated');
//       }
//       let prevElem = item.previousSibling;
//       deletePrev(prevElem);
//     }
//   };
//   return handler;
// }

// function deletePrev(elem) {

//   if (elem !== null) {
//     elem.classList.remove('rate-buttons__item_uncolored');
//     elem.classList.add('rate-buttons__item_colored');
//     elem.classList.remove('rate-buttons__item_norated');
//     elem = elem.previousSibling;
//     deletePrev();
//   }
// }

// for (let elem of rateButtons) {
//   elem.classList.add('rate-buttons__item_norated');
//   elem.addEventListener('click', rate(elem));
// }
