angular
    .module("dddShopApp")
    .service("shoppingBagService", function(chooseYourDenimService) {

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




      this.updateShopBagItems = function(denim) {
        currentDenimInShopBag = i;
        _shoppingBag.splice(i, 1, new Denim(name, price, style, image, smallSize, bigSize, smallQuantity, largeQuantity, color))
      }


      this.removeShopBagItems = function(denim) {

        _shoppingBag.indexOf(denim) //try this

        // I don't think you need a loop
        for (var i = 0; i < _shoppingBag.length; i++) {
          if (_shoppingBag[i] == _denim[i]){
            splice(i,1);
          }
        }
      }

// This is not working
      this.subTotal = function() {
        return (denim.price) * 0.0775
      }

//I think I just need one service file!!!

})
