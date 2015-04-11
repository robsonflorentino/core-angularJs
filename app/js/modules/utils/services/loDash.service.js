var loDashService = function($window){
    var oLodash;
    oLodash = typeof $window._ === 'undefined' ? null : $window._.noConflict();
    if(!oLodash) {
        throw new Error('Error! O módulo loDash não pode ser encontrado no escopo global!');
    }
    return oLodash;
}

define([], function(){
    return ['$window', loDashService];
});