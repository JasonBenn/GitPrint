$('body').append('<div class="print-container"></div>')

$('.pagehead-actions').on('click', '.add-book-btn', function(){
  var repo = 'wtfsidtw'
  var user = 'claubacher'
  var clientID = '62b11d2267425d40826b'
  var clientSecret = 'a50963d2c2bdbc5783e4df1939be09c52808e0b3'

  $.get('https://api.github.com/repos/' + user + '/' + repo + '/commits' + '?client_id=' + clientID + '&client_secret=' + clientSecret, function(commits) {
    var sha = (commits[0].sha);
    $.get('https://api.github.com/repos/' + user + '/' + repo + '/git/trees/' + sha + '?recursive=1&client_id=' + clientID + '&client_secret=' + clientSecret, function(data) {
      $.each(data.tree, function(index){
        var filePath = data.tree[index].path;
        $.get('https://github.com/' + user + '/' + repo + '/blob/master/' + filePath, function(gitFile) {
          $('.print-container').append($(gitFile).find('.breadcrumb'));
          $('.zeroclipboard-button').remove();
          $('.print-container').append($(gitFile).find('.file-code'));
          $('.breadcrumb').addClass('page-break');
        });
      });
    });
  });
});
