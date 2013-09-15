var modal = '<div class="container md-modal"> \
<div class="md-content"> \
  <div class="header-cat"><img src="https://googledrive.com/host/0B9bg70URlInBR00zUW9PYnBWLWM/octocat_300.png"><span class="logo">GitPrint</span></div>  \
	  <div class="sidebar"> \
      <h2 class="sidebar-heading">Repos</h2> \
		  <ul id="sortable"> \
				<li class="ui-state-default">node-browserify</li> \
				<li class="ui-state-default">dnode</li> \
				<li class="ui-state-default">node-optimist</li> \
				<li class="ui-state-default">GitPrint</li> \
		  </ul> \
      <button class="preview">Preview</button> \
      <button class="md-close">Close</button> \
	  </div> \
		<div id="repo-contents"> \
        <p class="accordion-expand-holder"> \
          <a class="accordion-expand-all" href="#">Expand all</a> \
        </p> \
        <div id="accordion" class="ui-accordion ui-widget ui-helper-reset"> \
          <h3 class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"> \
            <img src="https://googledrive.com/host/0B9bg70URlInBR00zUW9PYnBWLWM/folder.png" height="15px" \
            <span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span> \
            root \
          </h3> \
          <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"> \
            <ul> \
              <li><input type="checkbox" id="root-1" name="root-1" value="readme"><label for="root-1">README</label><span class="description">Description</span></li> \
              <li><input type="checkbox" id="root-2" name="root-2" value="index.js"><label for="root-2">index.js</label><span class="description">Description</span></li>\
              <li><input type="checkbox" id="root-3" name="root-3" value="package.json"><label for="root-3">package.json</label><span class="description"Description</span></li> \
            </ul> \
          </div> \
          <h3 class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"> \
            <img src="https://googledrive.com/host/0B9bg70URlInBR00zUW9PYnBWLWM/folder.png" height="15px"><span class="ui-accordion-header-icon ui-icon ui-icontriangle-1-e"></span> \
            lib \
          </h3> \
          <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"> \
            <ul> \
              <li><input type="checkbox" id="lib-1" name="el-1" value="stuff"><label for="lib-1">stuff</label></li> \
              <li><input type="checkbox" id="lib-2" name="el-2" value="stuff.js"><label for="lib-2">stuff.js</label></li> \
              <li><input type="checkbox" id="lib-3" name="root-3" value="stuff.json"><label for="lib-3">stuff.json</label></li> \
            </ul> \
          </div> \
          <h3 class="accordion-header ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all"> \
            <img src="https://googledrive.com/host/0B9bg70URlInBR00zUW9PYnBWLWM/folder.png" height="15px"><span class="ui-accordion-header-icon ui-icon ui-icontriangle-1-e"></span> \
            examples \
          </h3> \
          <div class="ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"> \
            <ul> \
              <li><input type="checkbox" id="bin-1" name="bin-1"><label for="lib-1">advanced.txt</label></li> \
              <li><input type="checkbox" id="bin-2" name="bin-2"><label for="lib-2">args.js</label></li> \
              <li><input type="checkbox" id="bin-3" name="bin-3"><label for="lib-3">cmd.js</label></li> \
            </ul> \
          </div> \
        </div> \
		</div> \
	</div> \
</div> \
<div class="md-overlay"></div>'
