var LanguageController = function($rootScope, $scope, $translate, tmhDynamicLocale, $route) {
  
  $scope.setLang = function(langKey){
    // load labels
    $translate.use(langKey);
    
    // change $locale
    tmhDynamicLocale.set(langKey);
    
    // reload directives to use the new $locale
    $route.reload(false);
  }
  
  $scope.isActive = function(langKey) {
    return langKey === $translate.use();
  }
}

define([], function(){
  'use strict';
  return ['$rootScope', '$scope', '$translate', 'tmhDynamicLocale', '$route', LanguageController];
});