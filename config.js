﻿/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	/**
	 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */

	config.skin = 'sangah';
	config.plugins = 'dialogui,dialog,a11yhelp,basicstyles,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,dialogadvtab,elementspath,enterkey,entities,find,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,image,indent,indentblock,indentlist,justify,fakeobjects,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,preview,print,removeformat,resize,selectall,showblocks,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableresize,toolbar,undo,wysiwygarea,codemirror,imageattacher';
	config.codemirror = {
		showFormatButton: false,
		showCommentButton: false,
		showUncommentButton: false,
		showAutoCompleteButton: false
	};
	//config.allowedContent = true;
	//config.extraAllowedContent = '*(*){*}[*]';
	
	config.allowedContent = {
	    $1: {
	        // Use the ability to specify elements as an object.
	        elements: CKEDITOR.dtd,
	        attributes: true,
	        styles: true,
	        classes: true
	    }
	};
	config.disallowedContent = 'script; *{mso-*,-ms-*}; *(mso-*)';

	if(typeof __LOCALE__ !== "undefined"){
		config.language = __LOCALE__ || 'en';
	}
	config.contentsCss = [CKEDITOR.getUrl('wysiwyg_reset.css'), CKEDITOR.getUrl('contents.css')];
	config.docType = '<!DOCTYPE html>';
	//config.fullPage = true;
	config.removePlugins = 'base64image';
	config.removeButtons = 'Image';
	config.font_names = "맑은 고딕/맑은 고딕, sans-serif;굴림/굴림, sans-serif; HY견고딕/HY견고딕, sans-serif;" + config.font_names;
	config.baseFloatZIndex = 120;

	CKEDITOR.dtd.$removeEmpty.span = 0;
	
};

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

// %LEAVE_UNMINIFIED% %REMOVE_LINE%