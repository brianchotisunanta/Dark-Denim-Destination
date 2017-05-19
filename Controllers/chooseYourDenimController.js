angular
    .module("dddShopApp")
    .controller("chooseYourDenimController", function($scope, chooseYourDenimService, shoppingBagService) {

    $scope.denims = chooseYourDenimService.getDenims()

    $scope.addToBag = function(denim) {
      shoppingBagService.addToBag(denim)
    }

})
