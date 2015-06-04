$('a.collapsed').each(function(index, element) {
  var key = $(this).data('key');
  $("." + key).slideToggle('fast');
});

var toggleList = function(e) {
  var key = $(this).data('key');
  $("." + key).slideToggle('fast');

  e.preventDefault();
};

$('a.collapsed').bind('click', toggleList);
$('a.expanded').bind('click', toggleList);

