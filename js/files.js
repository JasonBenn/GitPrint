var repoItems = []

var repo = $('.js-current-repository').text().trim()
var user = $('.author').first().text().trim()
var clientID = '62b11d2267425d40826b'
var clientSecret = 'a50963d2c2bdbc5783e4df1939be09c52808e0b3'
var patt1 = new RegExp('/')

var foldersRecursive = function(name, parentDirectory, dataTree) {
  var parentRegex = new RegExp(name)
  $.each(dataTree, function(index){
    if(dataTree[index]) {
      if(dataTree[index].type === "tree"  && parentRegex.test(dataTree[index].path)) {
        var subFolderName = dataTree[index].path;
        subFolderName = subFolderName.replace(name, '');
        if (!(patt1.test(subFolderName))) {
          var subFolder = {};
          subFolder.type = "tree";
          subFolder.name = subFolderName;
          subFolder.url = 'https://github.com/' + user + '/' + repo + '/blob/master/' + dataTree[index].path;
          subFolder.subFolders = [];
          name = name.replace('/', '');
          for (var i=0, iLen=dataTree.length; i<iLen; i++) {
            if(dataTree[i].path === name) {
              dataTree.splice(i, 1);
              break
            };
          };
          foldersRecursive(subFolderName + '/', subFolder, dataTree);
          if (parentDirectory) {
            parentDirectory.subFolders.push(subFolder.name + '/', subFolder);
          };
        } else {
          foldersRecursive(subFolderName + '/', subFolder, dataTree)
        };
      } else if (dataTree[index].type === "blob" && parentRegex.test(dataTree[index].path)) {
        if (parentDirectory) {
          parentDirectory.subFolders.push({
          type: "blob",
          name: dataTree[index].path,
          url: 'https://github.com/' + user + '/' + repo + '/blob/master/' + dataTree[index].path
          });
        };
      };
    };
  });
};

$.get('https://api.github.com/repos/' + user + '/' + repo + '/commits' + '?client_id=' + clientID + '&client_secret=' + clientSecret, function(commits) {
  var sha = (commits[0].sha);
  $.get('https://api.github.com/repos/' + user + '/' + repo + '/git/trees/' + sha + '?recursive=1&client_id=' + clientID + '&client_secret=' + clientSecret, function(data) {
    $.each(data.tree, function(index){
      if(data.tree[index]) {
        if(data.tree[index].type === "tree" && !(patt1.test(data.tree[index].path))){
          var newFolder = {};
          newFolder.type = "tree";
          newFolder.name = data.tree[index].path;
          newFolder.url = 'https://github.com/' + user + '/' + repo + '/blob/master/' + data.tree[index].path;
          newFolder.subFolders = []
          var folderName = data.tree[index].path;
          folderName.replace(folderName + '/', '');
          foldersRecursive(folderName + '/', newFolder, data.tree);
          repoItems.push(newFolder);
        } else if(data.tree[index].type === "blob" && !(patt1.test(data.tree[index].path))) {
          repoItems.push({
            type: "blob",
            name: data.tree[index].path,
            url: 'https://github.com/' + user + '/' + repo + '/blob/master/' + data.tree[index].path
          });
        };
      };
    });
  });
});



$('.minibutton').on('click', function(){
  console.log('hey');
  repoItems.forEach(function(repoItem){
    if(repoItem.type === 'tree') {
      $('#accordion').append('<h3 class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"><img src="https://googledrive.com/host/0B9bg70URlInBR00zUW9PYnBWLWM/folder.png" height="15px" <span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>' + repoItem.name + '</h3>')
      $('#accordion').append('<div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"><ul id="' + repoItem.name + 'ul"></ul></div>')
      repoItem.subFolders.forEach(function(innerItem){
        var idName = '#' + repoItem.name + 'ul';
        var itemName = innerItem.name
        console.log(itemName);
        if(itemName) {
          console.log('butt');
          var slashIndex = itemName.lastIndexOf('/') + 1;
          console.log(slashIndex);
          itemName = itemName.substring(slashIndex);
          console.log(itemName);
        };
        $(idName).append('<li><input type="checkbox" id="root-1" name="root-1" value="' + innerItem.name + '"><label for="root-1">' + itemName + '</label><span class="description"></span></li>')
      });
    };
  });
});

$('.md-modal').on('click', '.preview', function(){
  $('body').html('<div class="print-container"><h1>' + user + ' / ' + repo + '</h1></div>')
  repoItems.forEach(function(repoItem) {
    if(repoItem.type === "file") {
      $.get(repoItem.url, function(gitFile) {
        $('.print-container').append($(gitFile).find('.breadcrumb'));
        $('.zeroclipboard-button').remove();
        $('.print-container').append($(gitFile).find('.file-code'));
        $('.breadcrumb').addClass('page-break');
      });
    }
  });
});
