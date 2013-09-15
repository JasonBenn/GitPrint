var repo = 'pilgrim'
var user = 'rleahy22'
var clientID = '62b11d2267425d40826b'
var clientSecret = 'a50963d2c2bdbc5783e4df1939be09c52808e0b3'

$.get('https://api.github.com/repos/' + user + '/' + repo + '/commits', function(commits) {
  var sha = (commits[0].sha);
	$.get('https://api.github.com/repos/' + user + '/' + repo + '/git/trees/' + sha, function(data) {
	  $.each(data.tree, function(index){
	  	var fileUrl = data.tree[index].url;
	  	$.get(fileUrl, function(gitFile) {
		  console.log(gitFile);
			});
	  });
	});
});
