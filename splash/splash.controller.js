(function() {
    'use strict'

    angular
        .module('djcats')
        .controller('splashController', splashController);


    function splashController() {
        console.log('Hello from the splashController!');
    }
})()
