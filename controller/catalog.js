/**
 * Created by ibm on 2017/4/24.
 */
angular.module('store.catalog',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/catalog', {
                templateUrl: '../view/catalog.html',
                controller: 'CatalogCtrl'
            })
    }])

    .controller('CatalogCtrl', ['$scope', function($scope){

    }]);