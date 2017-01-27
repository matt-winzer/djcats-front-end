(function() {
    'use strict';

    angular.module('djcats').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']


    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true)

        $stateProvider
            .state({
                name: 'splash',
                url: '/',
                component: 'splashComponent',
            })
            .state({
                name: 'post',
                url: '/memorial',
                component: 'postComponent',
            })
            .state({
                name: 'browse',
                url: '/happiness',
                component: 'browseComponent',
            })
    }

}());
