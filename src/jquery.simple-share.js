(function( $ ){

	var openWindows = {};

    var methods = {
        init : function(options) {
        	//Bind to onclick
			$(this).on('click','a', methods.click);
        },
        click : function(e) {
        	//Grab url
        	e.preventDefault();
	        var action = $(this),
	            url;
	        if (action && action.attr('href')) {
	            url = action.attr('href');
	            methods.open(url);
	        } 
        
        },
        open : function(url) { 
        	//Open window
	        if (url) {
		        if (openWindows[url] && !openWindows[url].closed) {
		            openWindows[url].focus();
		        } else {
		            openWindows[url] = window.open(url, url, 'width=648,height=436');
		        }
		    }
        }
    };

    $.fn.simpleShare = function(methodOrOptions) {
        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.simpleShare' );
        }    
    };

})( jQuery );
//$('.social-icons ul').simpleShare();