$('body').append('<div class="print-container"></div>')

$('.md-modal').on('click', /* PREVIEW BTN */, function(){
  var repo = $('.js-current-repository').text()
  var user = $('.author').text()
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
