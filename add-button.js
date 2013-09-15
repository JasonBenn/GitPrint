$('.pagehead-actions').prepend('<li class="add-book-btn"><span class="minibutton">Add to Book</span></li>')

var url = "/substack/node-browserify/blob/master/bin/advanced.txt"

$('body').append(modal)

// Given a url for a file in a repo, return the html for the lines in that file
$('.pagehead-actions').on('click', '.add-book-btn', function() {
  // $.get(url, function(response) {
    // return $(response).find('pre').html()
  // })
	$('.md-modal').toggleClass('md-show');
})

$('body').on('click', '.md-close', function() {
	$('.md-modal').toggleClass('md-show');
})
