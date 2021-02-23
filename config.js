/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.skin = 'moono-lisa';
	config.plugins =
		'a11yhelp,' +
		'autolink,' +
		'basicstyles,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'fakeobjects,' +
		'find,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'imageattacher,' +
		'indentblock,' +
		'indentlist,' +
		'justify,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'openlink,' +
		'pagebreak,' +
		'panel,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'richcombo,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tableselection,' +
		'tableresize,' +
		'tabletools,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea,' +
		'codemirror,' +
		'embed';
	
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
	config.disallowedContent = 'script;*{mso-*,-ms-*};*(mso-*);title;link;';

	if(typeof __LOCALE__ !== "undefined"){
		config.language = __LOCALE__ || 'en';
	}
	config.contentsCss = [CKEDITOR.getUrl('wysiwyg_reset.css'), CKEDITOR.getUrl('contents.css')];
	config.docType = '<!DOCTYPE html>';
	//config.fullPage = true;
	config.removePlugins = 'base64image';
	config.removeButtons = 'Image';
	config.font_names = "바탕/batang,바탕,sans-serif;맑은 고딕/Malgun Gothic,'맑은 고딕',sans-serif;돋움/돋움,Dotum,sans-serif;굴림/Gulim,굴림,AppleGothic,sans-serif;HY견고딕/HY견고딕,sans-serif;" + config.font_names;
	config.baseFloatZIndex = 120;
	
	// copyfromword options
	config.pasteFromWordRemoveFontStyles = false;
	config.pasteFromWordRemoveStyles = false;
	//config.pasteFromWordPromptCleanup = true;

	config.openlink_enableReadOnly = true;

	config.embed_provider = 'http://iframe.ly/api/oembed?url={url}&api_key=8ab06d3b30f8e7280c1fa8&callback={callback}'

	CKEDITOR.dtd.$removeEmpty.span = 0;
	
};

// %LEAVE_UNMINIFIED% %REMOVE_LINE%
