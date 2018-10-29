function MainController($scope){
  $scope.name = 'Giles';
}

angular
  .module('app')
  .controller('MainController', MainController)
