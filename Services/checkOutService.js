angular
    .module("dddShopApp")
    .service("checkOutService", function() {

      var _customers = [];

      var _customerId = [];

      var Customer = function (id, firstName, lastName, address1, address2, city, state, zipcode, email, password, phoneNumber, cardNumber, cardExpirationDate, cardSecurityCode) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zipcode;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.cardNumber = cardNumber;
        this.cardExpDate = cardExpirationDate;
        this.cardSecurityCode = cardSecurityCode;
      }

      _customers.push(new Customer("_customerId++", "Calvin", "Klein", "725 5th Avenue", "Floor 70", "New York" , "NY", "10022", "CalvinKlein@CK.com", "trumpone", "212-715-6788", "5789-3456-1234-0987", "07/21", "777"))

      _customers.push(new Customer("_customerId++", "Tommy", "Hilfigure", "935 Pennsylvania Avenue, NW", "", "Washington", "D.C", "20535-0001", "TommyHilfigure@TH.com", "trumpfiredme", "202-324-3000", "1234-6534-2344-7564", "05/20", "555"))

      _customers.push(new Customer("_customerId++", "Bobby", "Denim", "71751 Jeans Lane", "Suite 743", "Venice", "CA", "90291", "BobbyDenim@denimwearer.com", "ilovejeans", "310-454-7235", "8392-2957-5935-7921", "01/21", "111"))

      _customers.push(new Customer("_customerId++", "Carson", "Daly", "1515 Broadway", "Suite 743", "New York", "NY", "10036", "CarsonDaly@mtv.com", "IWasAVJ", "212-846-6000", "1079-0352-5379-0017", "04/20", "454"))


// ************************ Button Functions ************************

    this.getCustomers = function() {
      return _customers;
    }

// Not Working
    this.addCustomer = function(id++, firstName, lastName, address1, address2, city, state, zipcode, email, password, phoneNumber, cardNumber, cardExpirationDate, cardSecurityCode) {

      _customers.unshift(new Customer (id++, firstName, lastName, address1, address2, city, state, zipcode, email, password, phoneNumber, cardNumber, cardExpirationDate, cardSecurityCode))
    }


// Not Working
    this.editCustomer = function(currentCustomer, firstName, lastName, address1, address2, city, state, zipcode, email, password, phoneNumber, cardNumber, cardExpirationDate, cardSecurityCode) {

      _customers.splice(currentCustomer, 1, new Customer(cfirstName, lastName, address1, address2, city, state, zipcode, email, password, phoneNumber, cardNumber, cardExpirationDate, cardSecurityCode))
    }


// Not Working
    this.deleteCustomer = function(customer) {
      for (var i = 0; i < _customers.length; i++) {
        if( _customers[i] ==  customer ) {
          _customers.splice(i,1)
        }
      }
    }

// Not Working
    this.submitButtonCheckout = function(customer) {
      var checkOutMessage = prompt("Thank You for Your Purchase");
    }

})
