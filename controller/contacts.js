angular.module('store.contacts',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/contacts', {
                templateUrl: '../view/contacts.html',
                controller: 'ContactsCtrl'
            })
    }])

    .controller('ContactsCtrl', ['$scope', function($scope){

    }]);/**
 * Created by ibm on 2017/4/24.
 */
