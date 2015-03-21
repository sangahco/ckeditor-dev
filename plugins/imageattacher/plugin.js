( function() {

	CKEDITOR.plugins.add( 'imageattacher', {
	    icons: 'imageattacher',
	    hidpi: true,
	    init: function( editor ) {
	        //Plugin logic goes here.
	    	editor.addCommand( 'insertPmisImage', {
	    	    exec: function( editor ) {
	    	    	if( typeof attacher === 'undefined' ){
		        		throw new Error('The file imgattacher.jsp is required.');
		        	}
	            	attacher.openAttacher();
	    	    }
	    	});
	    	
	    	editor.ui.addButton( 'Imageattacher', {
	    	    label: 'Insert Image',
	    	    command: 'insertPmisImage',
	    	    toolbar: 'insert'
	    	});
	    }
	});
	
})();