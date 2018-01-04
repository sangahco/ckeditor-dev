CKEDITOR.download = function(editor, name){
	editor.once('contentPreview', function(e){
		// download data here
		$.ajax({
			url: "/Common/TemporaryFile/uploadContent.action",
			data: {
				"content" : e.data.dataValue
			},
			type: "POST",
			dataType: "json"
		}).done(function(data) {
			$.fileDownload( "/Common/TemporaryFile/download.action?" + $.param({
				"fileId": data.fileId,
				"fileName": name||'editor.html'
			}));
		});


		return false;
	});
	editor.execCommand('preview');
}
if(!CKEDITOR.editor.prototype.download){
	CKEDITOR.editor.prototype.download = function(filename){
		CKEDITOR.download(this, filename);
	}
}

CKEDITOR.print = function(editor){
	editor.execCommand('print');
}
if(!CKEDITOR.editor.prototype.print){
	CKEDITOR.editor.prototype.print = function(){
		CKEDITOR.print(this);
	}
}

CKEDITOR.getFullHTMLContent = function(editor){
	var cnt = "";
	editor.once('contentPreview', function(e){
		// download data here
		cnt = e.data.dataValue;
		return false;
	});
	editor.execCommand('preview');

	return cnt;
}
if(!CKEDITOR.editor.prototype.getFullHTMLContent){
	CKEDITOR.editor.prototype.getFullHTMLContent = function(){
		return CKEDITOR.getFullHTMLContent(this);
	}
}

CKEDITOR.destroyAll = function(container){
// destroy all ckeditor inside this container

	for( var editor in CKEDITOR.instances ) {
		if( CKEDITOR.instances.hasOwnProperty(editor)
		&& $(container).find( CKEDITOR.instances[editor].element.$ ).length ) {

			CKEDITOR.instances[editor].destroy(true);

		}
	}
}