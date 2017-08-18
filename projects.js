'use strict'

var Projects (name, describe, projectURL, finishedOn){
  this.name = name; <!-- Self explanatory -->
  this.describe = describe; <!-- Description of the project -->
  this.projectURL = projectURL;
  this.finishedOn = finishedOn;

}

Projects.prototype.toHtml = function() {
  var $newProject = $('project.template').clone();
  $newProject.removeClass('template');
  if (!this.publishedOn) $newProject.addClass('draft');
  $newProject.data('category', this.category);

  $newProject.find('.byline a').html(this.author);
  $newProject.find('.byline a').attr('href', this.projectUrl);
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time[pubdate]').attr('datetime', this.publishedOn);
  $newProject.find('time[pubdate]').attr('title', this.publishedOn);
  // Display the date as a relative number of 'days ago'
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
