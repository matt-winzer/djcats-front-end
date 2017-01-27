(function() {
    'use strict'

    angular
        .module('djcats')
        .controller('postController', postController);


    function postController() {
        console.log('Hello from the postController!');
    }
})()
