angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope) {})

.controller('MyPathCtrl', function($scope) {

})

.controller('PublishCtrl', function($scope) {
  $scope.settings = {
    enableAutoroute: true
  };
})

.controller("AccountFormCtrl", function($scope){
  $scope.showLogIn = true;
  $scope.showSignIn = false;

  $scope.inputMail;
  $scope.inputPwd;

  $scope.inputConfirmPwd;
  $scope.inputFirstName;
  $scope.inputLastName;

  $scope.hideForm = function() {
      $scope.showLogIn = ($scope.showLogIn == false)?true:false;
      $scope.showSignIn = ($scope.showSignIn == false)?true:false;
  };
  $scope.logIn = function(mail,pwd){
      console.log( $scope.inputMail);
      console.log( $scope.inputPwd);
  }

})

.controller('AccountCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/account.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});