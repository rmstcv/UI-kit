// import 'jquery';
import './jquery.pajinatify';

$(() => {
  $('.pagination').pajinatify();
});

$('.pagination').pajinatify({
  onChange(currentPage) {
    console.log(currentPage);
  },
});
