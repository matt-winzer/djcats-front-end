(function() {
    'use strict'

    angular
        .module('djcat')
        .controller('postController', postController);

    postController.$inject = ['$http']


    function postController($http) {
        const vm = this;

        vm.$onInit = function() {
            vm.deadcats = [{
                id: 1,
                name: 'sally',
                color: 'black',
                type: 'crunches',
                age: 'dead',
                image_url: 'https://s-media-cache-ak0.pinimg.com/564x/e0/5c/01/e05c0152e928315788d7b634f61e6805.jpg',
                owner_id: 1,
            }, {
                id: 2,
                name: 'snowball I',
                color: 'black',
                age: 'dead',
                type: 'stray',
                image_url: 'http://4vector.com/thumb_data/v4l-128147.jpg',
                owner_id: 2,
            }, {
                id: 3,
                name: 'snowball II',
                color: 'black',
                age: 'dead',
                type: 'animated',
                image_url: 'http://vignette2.wikia.nocookie.net/simpsons/images/0/07/Snowball2.png/revision/latest?cb=20090712193344',
                owner_id: 2,
            }, {
                id: 4,
                name: 'Garfield',
                color: 'Orange',
                age: 'dead',
                type: 'animated',
                image_url: 'https://lh6.googleusercontent.com/-0bImuV11gTM/UUyKbARBljI/AAAAAAAAAOE/nWRQAmBupe4/w800-h800/cool%2Bgarfield%2B-%2Bcopia%2B-%2Bcopia.jpg',
                owner_id: 2,
            }]
        }

    }
})()
