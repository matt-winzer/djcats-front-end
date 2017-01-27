(function() {
    'use strict'

    angular
        .module('djcat')
        .component('splashComponent', {
            controller: function() {
                console.log("hi from splash component");
            },
            templateUrl: '/splash/splash.html'
        })
})();
