'use strict'

$(document).ready(function(){
  $('#navbar li').on('click', function(e){
    e.preventDefault();
    let clickedOn = $(this).attr('class').replace('nav', '');
    $(`#${clickedOn}`).show();
    $('#main-content section').not(`#${clickedOn}`).hide();

  })

  $.getJSON('/scripts/projects.json')
    .done(function(projects) {
      var template = Handlebars.compile($('#template').html());
      projects.forEach(function(project) {
        $('#main-content').append(template(project));
       })
       $('#main-content section').not('#home').hide();
    })
    .fail(function(res, err) {
      console.log('fail!');
      console.log(err);
    })
})
