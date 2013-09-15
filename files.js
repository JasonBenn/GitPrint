var objects = []

var repo = $('.js-current-repository').text().trim()
var user = $('.author').first().text().trim()
var clientID = '62b11d2267425d40826b'
var clientSecret = 'a50963d2c2bdbc5783e4df1939be09c52808e0b3'

$.get('https://api.github.com/repos/' + user + '/' + repo + '/commits' + '?client_id=' + clientID + '&client_secret=' + clientSecret, function(commits) {
  var sha = (commits[0].sha);
  $.get('https://api.github.com/repos/' + user + '/' + repo + '/git/trees/' + sha + '?recursive=1&client_id=' + clientID + '&client_secret=' + clientSecret, function(data) {
    $.each(data.tree, function(index){
      objects.push({
        type: data.tree[index].type === "blob" ? "file" : "folder",
        name: data.tree[index].path,
        url: 'https://github.com/' + user + '/' + repo + '/blob/master/' + data.tree[index].path
      })
    });
  });
});
