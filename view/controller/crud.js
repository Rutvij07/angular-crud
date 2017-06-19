var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){

$scope.users=[
  {firstname:'Rutvij',lastname:'Doshi',email:'rutvijdoshi07@gmail.com'},
  {firstname:'Meet',lastname:'Dave',email:'meetdave@gmail.com'}
];

$scope.saveUser = function(){

$scope.users.push($scope.newUser);
$scope.newUser={};
};

$scope.editUser = function(user){
  $scope.clickedUser=user;
};

$scope.updateUser=function(){
alert('Updated');
};

$scope.deleteUser=function(){
$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
};

});
