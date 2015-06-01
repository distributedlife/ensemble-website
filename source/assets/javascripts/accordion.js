$('a.collapsed').each(function(index, element) {
  var key = $(this).data('key');
  $("." + key).slideToggle('fast');
});

$('a.collapsed').bind('click', function(e) {
  var key = $(this).data('key');
  $("." + key).slideToggle('fast');
  e.preventDefault();
});

$('a.expanded').bind('click', function(e) {
  var key = $(this).data('key');
  $("." + key).slideToggle('fast');
  e.preventDefault();
});