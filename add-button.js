$('.pagehead-actions').prepend('<li class="add-book-btn"><span class="minibutton">Add to Book</span></li>')

var url = "/substack/node-browserify/blob/master/bin/advanced.txt"

// Given a url for a file in a repo, return the html for the lines in that file
$('.pagehead-actions').on('click', '.add-book-btn', function(){
  $.get(url, function(response) {
    return $(response).find('pre').html()
  })
})
