'use strict'

$(document).ready(function(){
  $('#main-content section').not('#home').hide();
  $('#navbar li').on('click', function(e){
    e.preventDefault();
    let clickedOn = $(this).attr('class').replace('nav', '');
    $(`#${clickedOn}`).show();
    $('#main-content section').not(`#${clickedOn}`).hide();

  })

})
