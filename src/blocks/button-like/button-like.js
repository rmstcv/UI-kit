class LikeButton {
  constructor(likeButton) {
    this.likeButton = likeButton;
    this.likes = +likeButton.getAttribute('data-likes');
    this.test = 1;
  }

  getIsLike() {
    const isliked = +this.likeButton.getAttribute('data-isLiked');
    return isliked;
  }

  findElems(elemsClass) {
    const elems = document.querySelectorAll(elemsClass);
    const newElems = [];
    let elem;
    for (let i = 0; i < elems.length; i += 1) {
      if (elems[i].closest('.js-like-button') === this.likeButton) {
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

  checkLikes() {
    const colored = this.findElems('.js-like-button__heart_colored');
    const uncolored = this.findElems('.js-like-button__heart_uncolored');
    if (this.getIsLike() === 1) {
      colored.classList.add('like-button__heart_active');
    } else {
      uncolored.classList.add('like-button__heart_active');
    }
  }

  addLikes() {
    const numOfLikes = this.findElems('.js-like-button__number-of-likes');
    numOfLikes.innerHTML = this.likes;
  }

  addLikeButtonHandler() {
    this.test = 2;
    this.likeButton.addEventListener('click', this.addLike);
  }

  addLike = () => {
    const numOfLikes = this.findElems('.like-button__number-of-likes');
    if (this.getIsLike() === 0) {
      numOfLikes.innerHTML = this.likes + 1;
      this.likes = this.likeButton.setAttribute('data-likes', this.likes + 1);
      this.likeButton.setAttribute('data-isLiked', '1');
    }
    this.checkLikes();
    this.likeButton.removeEventListener('click', this.addLike);
  };

  likeButtonInit() {
    this.checkLikes();
    this.addLikes();
    this.addLikeButtonHandler();
  }
}

function addLikeButton() {
  const likeButtons = document.querySelectorAll('.js-like-button');
  likeButtons.forEach((likeButtonItem) => {
    let likeButton = likeButtonItem;
    likeButton = new LikeButton(likeButton);
    likeButton.likeButtonInit();
  });
}

addLikeButton();
