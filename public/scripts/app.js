'use strict';
(() => {
  $.getJSON('/scripts/projects.json')
    .done(function(projects) {
      var template = Handlebars.compile($('#template').html());
      projects.forEach(function(project) {
        $('#main-content').append(template(project));
      });
       $('#main-content section').not('#home').hide();
    })
    .fail(function(res, err) {
      console.log('fail!');
      console.log(err);
    });
    var repos = [];
    $.get('https://api.github.com/users/snlcessna/repos', function(data){
      repos = data.map(function(repo){
        return repo.name;
      }).reduce(function(previous, current){
        if(!current.match('201n8')){
          return previous.concat(current);
        } else {
          return previous;
        }
      }, []);
      console.log(repos);
    });
})();

$(document).ready(function(){
  $('#navbar li').on('click', function(e){
    e.preventDefault();
    let clickedOn = $(this).attr('class').replace('nav', '');
    $(`#${clickedOn}`).show();
    $('#main-content section').not(`#${clickedOn}`).hide();

  });

});
