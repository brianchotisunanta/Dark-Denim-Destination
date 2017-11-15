angular
    .module("dddShopApp")
    .controller("checkOutController", function($scope, checkOutService) {

    $scope.customers = checkOutService.getCustomers();

    $scope.addCustomer = function() {
      checkOutService.addCustomer(
        $scope.id,
        $scope.firstName,
        $scope.lastName,
        $scope.address1,
        $scope.address2,
        $scope.city,
        $scope.state,
        $scope.zipcode,
        $scope.email,
        $scope.password,
        $scope.phoneNumber,
        $scope.cardNumber,
        $scope.cardExpirationDate,
        $scope.securityCode)

      this.firstName = "";
      this.lastName = "";
      this.address1 = "";
      this.address2 = "";
      this.city = "";
      this.state = "";
      this.zip = "";
      this.email = "";
      this.password = "";
      this.phoneNumber = "";
      this.cardNumber = "";
      this.cardExpDate = "";
      this.cardSecurityCode = "";
    }

    var currentCustomer = null;

    $scope.submitButton = true;
    $scope.saveButton = false;

    $scope.updateCustomer = function(customer) {
      for (var i = 0; i < $scope.customers.length; i++) {
        if($scope.customers[i] == customer) {

          currentCustomer = i

          $scope.id = customer.id;
          $scope.firstName = customer.firstName;
          $scope.lastName = customer.lastName;
          $scope.address1 = customer.address1;
          $scope.address2 = customer.address2;
          $scope.city = customer.city;
          $scope.state = customer.state;
          $scope.zip = customer.zip;
          $scope.email = customer.email;
          $scope.password = customer.password;
          $scope.phoneNumber = customer.phoneNumber;
          $scope.cardNumber = customer.cardNumber;
          $scope.cardExpDate = customer.cardExpDate;
          $scope.cardSecurityCode = customer.cardSecurityCode;

        }
      }
      // hiding submit, showing save
      $scope.submitButton = false;
      $scope.saveButton = true;
    }


    $scope.saveCustomer = function() {
      checkOutService.updateCustomer(
        currentCustomer,
        $scope.firstName,
        $scope.lastName,
        $scope.address1,
        $scope.address2,
        $scope.city,
        $scope.state,
        $scope.zipcode,
        $scope.email,
        $scope.password,
        $scope.phoneNumber,
        $scope.cardNumber,
        $scope.cardExpirationDate,
        $scope.securityCode)

      // hiding save, showing submit
      $scope.submitButton = true;
      $scope.saveButton = false;

      // reseting scoped variables
      this.firstName = "";
      this.lastName = "";
      this.address1 = "";
      this.address2 = "";
      this.city = "";
      this.state = "";
      this.zip = "";
      this.email = "";
      this.password = "";
      this.phoneNumber = "";
      this.cardNumber = "";
      this.cardExpDate = "";
      this.cardSecurityCode = "";
    }


    $scope.deleteCustomer = function(customer) {
      checkOutService.deleteCustomer(customer)
    }


})
