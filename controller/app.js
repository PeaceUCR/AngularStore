/**
 * Created by ibm on 2017/4/24.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('store', [
    'ngRoute',
    'store.home',
    'store.about',
    'store.catalog',
    'store.contacts'
]).config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
