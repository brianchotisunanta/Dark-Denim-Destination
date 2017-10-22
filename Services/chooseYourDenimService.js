angular
    .module("dddShopApp")
    .service("chooseYourDenimService", function() {

      var _denims = [];

      var _denimsId = [];

      var Denim = function(id, name, price, style, image, smallSize, bigSize, smallQuantity, largeQuantity, color) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.style = style;
        this.image = image;
        this.smallSize = smallSize;
        this.bigSize = bigSize;
        this.smallQuantity = smallQuantity;
        this.largeQuantity = largeQuantity;
        this.color = color;
      }

      _denims.push(new Denim("High Up", 125, "Straight", "../images/Denim1NYC.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("Straight One", 125, "Straight", "../images/Denim2RagBone.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Tight Fit", 115, "Extra Slim", "../images/Denim3Hudson.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Right Fit One", 145, "Straight", "../images/Denim4Paige.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Right Fit Two", 145, "Straight", "../images/Denim5JBrand.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Front", 115, "Straight", "../images/Denim6AG.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("Slimmy", 135, "Slim", "../images/Denim7NF.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Back", 105, "Straight", "../images/Denim8_7M.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Slimmy Two", 155, "Slim", "../images/Denim9D.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("Narrow", 165, "Extra Slim", "../images/Denim10NudieJeans.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("Torn", 155, "Slim", "../images/Denim11Hudson.jpg", "30", "34", "1", "5", "black"))
      _denims.push(new Denim("The Straight Two", 135, "Straight", "../images/Denim12TR.jpg", "30", "34", "1", "5", "black"))

// ****************** The Button Functions ******************:

      this.getDenims = function() {
        return _denims
      }

})
