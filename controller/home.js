/**
 * Created by ibm on 2017/4/24.
 */
angular.module('store.home',['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: '../view/home.html',
                controller: 'HomeCtrl'
            })
    }])
    .filter('searchFilter',function(){//we can't pass argument in this function
        // the first element items is the array to be repeat the second is the searchkey passed by searchFilter:searchKey
        return function(items,searchKey){
            console.log(searchKey);
            if(searchKey==undefined||searchKey==null||searchKey.length==0){
                return items;
            }else{
                var result=[];
                for(let i= 0;i<items.length;i++){

                    if(items[i].name.indexOf(searchKey)!=-1){
                        result.push(items[i]);
                    }
                }
                return result ;
            }

        };
    })

        .controller('HomeCtrl', ['$scope','$http', function($scope,$http){

        $http({
            method: 'GET',
            url: '../model/products.json'
        }).then(function successCallback(response) {
            console.log(response.data);
            $scope.data = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.

        });



        $scope.addData=function(){
            var d = new item($scope.dName, $scope.dDescription,$scope.dPrice);
            $scope.data.push(d);
            console.log($scope.data);
        };

        $scope.deleteData=function(item){
            console.log($scope.data.length);
            //remove array at certain index
            if($scope.data.length==1){
                $scope.data=[];
            }else{
                $scope.data.splice(item.currentTarget.getAttribute("value"), 1);
            }

        };

        $scope.searchMatch=function(searchKey){

            return function(d){
                console.log("searchKey",searchKey);
                console.log("d",d);
                if(searchKey==undefined||searchKey==null||searchKey.length==0){
                    return true;
                }else{
                    if(d.name.indexOf(searchKey)!=-1){
                        return true;
                    }
                }
                return false;
            };

        };
    }]);