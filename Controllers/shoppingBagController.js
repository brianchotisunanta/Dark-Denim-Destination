angular
    .module("dddShopApp")
    .controller("shoppingBagController", function($scope, shoppingBagService) {

      $scope.denims = shoppingBagService.getShoppingBag();


// Look over this later BC

var currentDenimInShopBag = null;

      $scope.editShopBagItems = function(denim) {
        for (var i = 0; i < $scope.denims.length; i++) {
        if($scope.denims[i] ==  denim) {
          // setting a var equal to current denim in shop bag so when the customer saves, we know which denim to update
          currentDenimInShopBag = i

          $scope.name = denim.name;
          $scope.price = denim.price;
          $scope.style = denim.style;
          $scope.image = denim.image;
          $scope.smallSize = denim.smallSize;
          $scope.bigSize = denim.bigSize;
          $scope.smallQuantity = denim.smallQuantity;
          $scope.largeQuantity = denim.largeQuantity;
          $scope.color = denim.color;
        }
      }

    }
      $scope.buttonEdit = true;
      $scope.buttonRemove = true;

// Not Working
    $scope.deleteDenim = function(denim) {
      denimService.deleteDenim(denim)
    }

// Not Working
    $scope.submitButtonCheckout = function() {
      checkOutService.submitButtonCheckout();
    }

// Not Working
    $scope.subTotal = function() {
      shoppingBagService.subTotal()
    }

    })
