// DESCRIPTION: Add a 'Hook' on all Ajax page calls
// SOURCE: http://stackoverflow.com/questions/5202296/add-a-hook-to-all-ajax-requests-on-a-page

function addXMLRequestCallback(callback){
    var oldSend, i;
    if( XMLHttpRequest.callbacks ) {
        // we've already overridden send() so just add the callback
        XMLHttpRequest.callbacks.push( callback );
    } else {
        // create a callback queue
        XMLHttpRequest.callbacks = [callback];
        // store the native send()
        oldSend = XMLHttpRequest.prototype.send;
        // override the native send()
        XMLHttpRequest.prototype.send = function(){
            // process the callback queue
            // the xhr instance is passed into each callback but seems pretty useless
            // you can't tell what its destination is or call abort() without an error
            // so only really good for logging that a request has happened
            // I could be wrong, I hope so...
            // EDIT: I suppose you could override the onreadystatechange handler though
            for( i = 0; i < XMLHttpRequest.callbacks.length; i++ ) {
                XMLHttpRequest.callbacks[i]( this );
            }
            // call the native send()
            oldSend.apply(this, arguments);
        }
    }
}

addXMLRequestCallback( function( xhr ) {  console.log( xhr.responseText );  });
addXMLRequestCallback( function( xhr ) {  console.dir( xhr );  });

/*** USING JQUERY ***/

jQuery.ajaxSetup({
    beforeSend: function() {
        //do stuff before request fires
    }
});

/* REFERENCES

Ajax-Interceptor: Wire interceptors on XHR requests and responses
https://github.com/slorber/ajax-interceptor

*/
