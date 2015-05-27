(function() {

	CKEDITOR.plugins.add('imageattacher', {
		icons: 'imageattacher',
		hidpi: true,
		init: function(editor) {
			if (typeof attacher !== 'undefined') {
				//Plugin logic goes here.
				editor.addCommand('insertPmisImage', {
					exec: function(editor) {
						editor.setMode('wysiwyg');
						attacher.openAttacher();
					}
				});

				if (editor.ui.addButton) {
					editor.ui.addButton('Imageattacher', {
						label: 'Insert Image',
						command: 'insertPmisImage',
						toolbar: 'insert'
					});
				}
			} else {
				console.error('ImageAttacher plugin not initialized; file imgattacher.jsp required.');
			}
		}
	});

})();