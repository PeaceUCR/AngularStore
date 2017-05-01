/**
 * Created by ibm on 2017/4/24.
 */
angular.module('store.about',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/about', {
                templateUrl: '../view/about.html',
                controller: 'AboutCtrl'
            })
    }])

    .controller('AboutCtrl', ['$scope', function($scope){

    }]);