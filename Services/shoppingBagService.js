angular
    .module("dddShopApp")
    .service("shoppingBagService", function() {

      var _shoppingBag = [];

  // ****************** The Button Functions ******************:

// This Works
      this.getShoppingBag = function() {
          return _shoppingBag;
      }

// This Works
      this.addToBag = function(denim) {
        _shoppingBag.push(denim);
        console.log(_shoppingBag);
      }

// This is not working
      this.subTotal = function() {
        return (denim.price) * 0.0775
      }


})
