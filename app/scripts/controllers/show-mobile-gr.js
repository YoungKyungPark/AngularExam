'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:UserDetailCtrl
 * @description
 * # UserDetailCtrl
 * Controller of the angularJsexamApp
 */

angular.module('angularJsexamApp')
  .controller('ShowMobileGRCtrl', [
    "Data", "$scope", "$state", 
    function (Data, $scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.mobileList = [];
    $scope.call_gipyo_data1 = function(id){
    	var dataPromise = Data.getData(
    		'http://172.16.2.15:52273/user/gr/'+id);

    	dataPromise.then(function(restful){  
        //alert(JSON.stringify(restful.data));
    		$scope.mobileList = restful.data;
    		}, 	function(reason){}
    		,	function(update){}) 
     
    }
 }]);