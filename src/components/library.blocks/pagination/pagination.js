// import 'jquery';
import './jquery.pajinatify.js';

$(function(){

  $('.pagination').pajinatify();

});

$('.pagination').pajinatify({
  onChange: function (currentPage) {
    console.log(currentPage);
  },
});