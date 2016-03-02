// Helper method to apply addEventListener, only if the element(s) passed to the method exists.

if ( typeof addEventListenerIf === "undefined" ){

  var addEventListenerIf = function( selector, type, listener, useCapture ) {

      var element = ( typeof selector === "string" )? document.querySelectorAll(selector) : selector;

      if ( element && element instanceof Element ){

        return Element.prototype.addEventListener.call(element, type, listener, useCapture);  

      } else if ( element.constructor.name === 'NodeList' ) {

        Array.prototype.slice.call(element).map(function(element){

          Element.prototype.addEventListener.call(element, type, listener, useCapture);

        });

      }

  };  

}

/*

Usage:

(1)

addEventListenerIf( '.js-add-mail-link', 'click', function(e){
    e.preventDefault();
    document.querySelector("#new-email-dialog").open()
});

(2)

var mailLink = document.querySelector('.js-add-mail-link');

addEventListenerIf( mailLink, 'click', function(e){
    e.preventDefault();
    document.querySelector("#new-email-dialog").open()
});

References: addEventListenerPolyfill: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

*/
