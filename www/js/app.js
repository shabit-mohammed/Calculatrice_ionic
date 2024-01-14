// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('calculator', ['ionic','ui.bootstrap']);

 app.controller('main', function ($scope, $ionicModal) { //store the entities name in a variable var taskData = 'task';
$scope.firstOperand="";
$scope.result="";
$scope.buttonTouched=function (num) {
  $scope.firstOperand=$scope.firstOperand+num;
  $scope.result=$scope.firstOperand;
  console.log('clicked');
}

$scope.test="Calculator";


});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
