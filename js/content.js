$( document ).ready(function() {
  $('#accordion').on('click', '.accordion-header', function(e) {
    $(this).next().toggle()
  })
});
