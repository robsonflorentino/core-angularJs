var LanguageController = function($rootScope, $scope, $translate) {
  
  $scope.setLang = function(langKey){
    $translate.use(langKey);
    
  }
  
  $scope.isActive = function(langKey) {
    return langKey === $translate.use();
  }
}

define([], function(){
  'use strict';
  return ['$rootScope', '$scope', '$translate', LanguageController];
});